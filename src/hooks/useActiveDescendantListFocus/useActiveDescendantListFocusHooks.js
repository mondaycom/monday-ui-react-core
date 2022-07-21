import { useCallback, useEffect, useMemo, useState } from "react";
import useKeyEvent from "../useKeyEvent";
import useEventListener from "../useEventListener";
import usePrevious from "../usePrevious";
import { getNextSelectableIndex, getPreviousSelectableIndex } from "./useActiveDescendantListFocusHelpers";
import { useListenFocusTriggers } from "hooks/useListenFocusTriggers";

const ARROW_DIRECTIONS = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft"
};

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

export function useSupportArrowsKeyboardNavigation({
  itemsCount,
  focusedElementRef,
  visualFocusItemIndex,
  setVisualFocusItemIndex,
  isHorizontalList,
  isItemSelectable,
  listenerOptions,
  triggerByKeyboard,
  setTriggerByKeyboard
}) {
  const nextArrow = isHorizontalList ? ARROW_DIRECTIONS.RIGHT : ARROW_DIRECTIONS.DOWN;
  const backArrow = isHorizontalList ? ARROW_DIRECTIONS.LEFT : ARROW_DIRECTIONS.UP;

  const onArrowKeyEvent = useCallback(
    direction => {
      // we desire to change the visual focus item only if the user pressed on the keyboard arrows keys while
      // the focusedElementRef is naturally focus
      if (document.activeElement !== focusedElementRef.current) {
        return;
      }

      // If the focusedElementRef is naturally focus but this is the first keyboard interaction of the user, we will mark future user interactions as trigger by keyboard (until the next mouse interaction)
      // that from now on the interactions are trigger by keyboard (until the next mosue interaction)
      if (!triggerByKeyboard) {
        setTriggerByKeyboard(true);

        // If the focusedElementRef is naturally focus but this is the first keyboard interaction of the user, we want only to display the item
        // which right now visually focus without changing it.
        if (visualFocusItemIndex > -1) {
          return;
        }
      }

      let newIndex;

      // We will change the visual focused item index according to the direction of the pressed arrow
      if (direction === nextArrow) {
        newIndex = getNextSelectableIndex({ isItemSelectable, visualFocusItemIndex, itemsCount });
      } else if (direction === backArrow) {
        newIndex = getPreviousSelectableIndex({ isItemSelectable, visualFocusItemIndex, itemsCount });
      }

      if (newIndex > -1 && newIndex !== visualFocusItemIndex) setVisualFocusItemIndex(newIndex);
    },
    [
      focusedElementRef,
      triggerByKeyboard,
      setTriggerByKeyboard,
      nextArrow,
      backArrow,
      visualFocusItemIndex,
      setVisualFocusItemIndex,
      isItemSelectable,
      itemsCount
    ]
  );
  const onArrowBack = useCallback(() => {
    onArrowKeyEvent(backArrow);
  }, [backArrow, onArrowKeyEvent]);

  const onArrowNext = useCallback(() => {
    onArrowKeyEvent(nextArrow);
  }, [nextArrow, onArrowKeyEvent]);

  useKeyEvent({
    keys: [nextArrow],
    callback: onArrowNext,
    ...listenerOptions
  });

  useKeyEvent({
    keys: [backArrow],
    callback: onArrowBack,
    ...listenerOptions
  });
}

export function useIsTriggerByKeyboard({ focusedElementRef }) {
  const [triggerByKeyboard, setTriggerByKeyboard] = useState(false);
  const onFocusByKeyboard = useCallback(() => !triggerByKeyboard && setTriggerByKeyboard(true), [triggerByKeyboard]);
  const onFocusByMouse = useCallback(() => triggerByKeyboard && setTriggerByKeyboard(false), [triggerByKeyboard]);
  useListenFocusTriggers({ ref: focusedElementRef, onFocusByKeyboard, onFocusByMouse });

  return { triggerByKeyboard, setTriggerByKeyboard };
}

export function useSupportPressItemKeyboardNavigation({
  visualFocusItemIndex,
  focusedElementRef,
  itemsCount,
  setVisualFocusItemIndex,
  onItemClick,
  isItemSelectable,
  listenerOptions = undefined,
  isIgnoreSpaceAsItemSelection = false
}) {
  const pressKeys = useMemo(
    () => (isIgnoreSpaceAsItemSelection ? [ENTER_KEY] : [ENTER_KEY, SPACE_KEY]),
    [isIgnoreSpaceAsItemSelection]
  );

  const baseOnClickCallback = useCallback(
    (event, itemIndex) => {
      const hasValidIndex = itemIndex >= 0 && itemIndex < itemsCount;
      if (!onItemClick || !hasValidIndex || !isItemSelectable(itemIndex)) return;
      if (visualFocusItemIndex !== itemIndex) setVisualFocusItemIndex(itemIndex);
      onItemClick(event, itemIndex);
    },
    [itemsCount, onItemClick, isItemSelectable, visualFocusItemIndex, setVisualFocusItemIndex]
  );

  const keyboardOnSelectCallback = useCallback(
    event => {
      // we desire to change the trigger the active item on click callback only if the user pressed on the keyboard arrows keys while
      // the focusedElementRef is naturally focus
      if (focusedElementRef.current.contains(document.activeElement)) {
        baseOnClickCallback(event, visualFocusItemIndex);
      }
    },
    [baseOnClickCallback, focusedElementRef, visualFocusItemIndex]
  );

  useKeyEvent({
    keys: pressKeys,
    callback: keyboardOnSelectCallback,
    ...listenerOptions
  });
}

export function SetDefaultItemOnFocusEvent({
  focusedElementRef,
  isItemSelectable,
  visualFocusItemIndex,
  setVisualFocusItemIndex,
  itemsCount,
  triggerByKeyboard,
  defaultVisualFocusItemIndex = -1
}) {
  const previousFocusedElementRef = usePrevious(focusedElementRef);
  const onBlurCallback = useCallback(() => {
    if (visualFocusItemIndex !== -1) {
      setVisualFocusItemIndex(-1);
    }
  }, [setVisualFocusItemIndex, visualFocusItemIndex]);

  const onFocusCallback = useCallback(() => {
    if (triggerByKeyboard && visualFocusItemIndex !== defaultVisualFocusItemIndex) {
      if (isItemSelectable(defaultVisualFocusItemIndex)) {
        setVisualFocusItemIndex(defaultVisualFocusItemIndex);
      } else {
        const newVisualFocusIndex = getNextSelectableIndex({
          isItemSelectable,
          itemsCount,
          visualFocusItemIndex: newVisualFocusIndex
        });
        setVisualFocusItemIndex(newVisualFocusIndex);
      }
    }
  }, [
    triggerByKeyboard,
    visualFocusItemIndex,
    defaultVisualFocusItemIndex,
    isItemSelectable,
    setVisualFocusItemIndex,
    itemsCount
  ]);

  // if element unmount act like element got blur event
  useEffect(() => {
    // if element unmount
    if (focusedElementRef?.current === null && previousFocusedElementRef?.current !== null) {
      onBlurCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedElementRef.current, previousFocusedElementRef, onBlurCallback]);

  useEventListener({
    eventName: "blur",
    ref: focusedElementRef,
    callback: onBlurCallback
  });

  useEventListener({
    eventName: "focus",
    ref: focusedElementRef,
    callback: onFocusCallback
  });
}

export function useKeepFocusOnItemWhenListChanged({
  visualFocusItemIndex,
  itemsIds,
  isItemSelectable,
  setVisualFocusItemIndex
}) {
  const prevItemIds = usePrevious(itemsIds);

  // When item list changed, keep the focus on the same item
  useEffect(() => {
    // When the list is changing the index of the focused item is point to a different item then before and
    // this is why we want to search for the new index of the item and change the index to point to it.
    let overrideIndexAfterListChanged;
    const isListChanged = prevItemIds !== undefined && prevItemIds !== itemsIds;
    if (isListChanged && prevItemIds !== undefined && visualFocusItemIndex !== -1) {
      const focusedItemId = prevItemIds[visualFocusItemIndex];
      overrideIndexAfterListChanged = itemsIds.indexOf(focusedItemId);
    } else {
      overrideIndexAfterListChanged = visualFocusItemIndex;
    }

    if (overrideIndexAfterListChanged !== visualFocusItemIndex) {
      if (isItemSelectable(overrideIndexAfterListChanged)) {
        setVisualFocusItemIndex(overrideIndexAfterListChanged);
      } else {
        const closestSelectableIndex = getNextSelectableIndex({
          isItemSelectable,
          visualFocusItemIndex: overrideIndexAfterListChanged,
          itemsCount: itemsIds.length
        });
        setVisualFocusItemIndex(closestSelectableIndex);
      }
    }
  }, [visualFocusItemIndex, itemsIds, isItemSelectable, setVisualFocusItemIndex, prevItemIds]);
}
