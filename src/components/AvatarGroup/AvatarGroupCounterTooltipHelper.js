import React from "react";
import { useKeyEvent } from "hooks";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  setShouldUpdate,
  setIsTooltipVisible
}) {
  const hideTooltip = () => {
    // Tricky way to close the tooltip
    setTimeout(() => {
      setIsTooltipVisible(false);
      setIsTooltipVisible(true);
    });
  };

  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    withoutAnyModifier: true,
    ref: counterContainerRef,
    callback: e => {
      if (e.target === counterContainerRef.current) {
        e.preventDefault();
        tooltipContentContainerRef.current && tooltipContentContainerRef.current.focus();
        setShouldUpdate(prev => !prev);
      }
    }
  });

  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: e => {
      if (e.target === counterContainerRef.current) {
        focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
        hideTooltip();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    ref: tooltipContentContainerRef,
    withoutAnyModifier: true,
    callback: e => {
      if (e.target === tooltipContentContainerRef.current) {
        focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
        hideTooltip();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    ref: tooltipContentContainerRef,
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: e => {
      if (e.target === tooltipContentContainerRef.current) {
        e.preventDefault();
        counterContainerRef.current && counterContainerRef.current.focus();
      }
    }
  });
}

export const avatarRenderer = (item, index, style = {}, type, displayAsGrid) => {
  const avatarProps = item.value;
  const overrideStyle = { ...style, width: displayAsGrid ? undefined : "100%" };

  const ClickableWrapper = ({ children }) => {
    if (!avatarProps.onClick) {
      return children;
    }

    return (
      <Clickable onClick={avatarProps.onClick} tabIndex="-1">
        {children}
      </Clickable>
    );
  };

  const labelId = `tooltip-item-${index}-label`;

  return (
    <ClickableWrapper key={index}>
      <div style={overrideStyle}>
        <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} ariaLabelledby={labelId}>
          <Avatar
            {...avatarProps}
            tooltipProps={undefined}
            ariaLabel={""}
            size={Avatar.sizes.SMALL}
            type={type || avatarProps?.type}
            tabIndex="-1"
          />
          {!displayAsGrid && (
            <div id={labelId} className={avatarGroupCounterTooltipContentStyles.tooltipAvatarItemTitle}>
              {avatarProps.tooltipContent}
            </div>
          )}
        </Flex>
      </div>
    </ClickableWrapper>
  );
};
