// import { useRef, useCallback, useState, useMemo } from "@storybook/addons";
// import { action } from "@storybook/addon-actions";
// import cx from "classnames";
// import { range } from "lodash-es";
// import useGridKeyboardNavigation from "../useGridKeyboardNavigation";
// import Button from "../../../../src/components/Button/Button";
import "./useGridKeyboardNavigation.stories.scss";
import { Tip } from "vibe-storybook-components";

// const ELEMENT_WIDTH_PX = 72;
// const PADDING_PX = 24;
// const ON_CLICK = action("item selected");

export default {
  title: "Hooks/useGridKeyboardNavigation"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );

    // const ref = useRef(null);
    // const disabledIndexes = [2, 4, 6];
    // const [itemsCount, setItemsCount] = useState(15);
    // const [numberOfItemsInLine, setNumberOfItemsInLine] = useState(4);
    //
    // const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);
    //
    // const items = useMemo(() => range(itemsCount).map(num => `${num}.`), [itemsCount]);
    // const getItemByIndex = useCallback(index => items[index], [items]);
    //
    // const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
    //   ref,
    //   numberOfItemsInLine,
    //   itemsCount,
    //   getItemByIndex,
    //   onItemClicked: ON_CLICK,
    //   disabledIndexes
    // });
    //
    // const onClickByIndex = useCallback(index => () => onSelectionAction(index), [onSelectionAction]);
    //
    // return (
    //   <div>
    //     <div
    //       className="use-grid-keyboard-nav-comp-wrapper"
    //       style={{
    //         width
    //       }}
    //       ref={ref}
    //       tabIndex={-1}
    //     >
    //       {items.map((item, index) => (
    //         <Button
    //           key={item}
    //           disabled={disabledIndexes.includes(index)}
    //           onClick={onClickByIndex(index)}
    //           kind={Button.kinds.SECONDARY}
    //           className={cx("use-grid-keyboard-nav-item", {
    //             "active-item": index === activeIndex
    //           })}
    //         >
    //           {item}
    //         </Button>
    //       ))}
    //     </div>
    //     <div className="use-grid-keyboard-nav-controls">
    //       <div>
    //         Items count:{" "}
    //         <input value={itemsCount} onChange={e => setItemsCount(e.target.value)} type="number" min={1} />
    //       </div>
    //       <div>
    //         Number of items in line:{" "}
    //         <input
    //           value={numberOfItemsInLine}
    //           onChange={e => setNumberOfItemsInLine(e.target.value)}
    //           type="number"
    //           min={1}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // );
  },

  name: "Overview"
};