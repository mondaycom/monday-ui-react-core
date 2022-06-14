import React from "react";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import cx from "classnames";
import PropTypes from "prop-types";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

const AvatarGroupCounterTooltipContent = ({ avatars, type, className, isVirtualizedList }) => {
  avatars = avatars.map(avatar => ({ value: avatar.props }));
  const displayAsGrid = !avatars.some(item => item.value?.tooltipProps?.content);

  const avatarRenderer = (item, index, style) => {
    const avatarProps = item.value;

    const ClickableContainer = ({ children }) => {
      if (!avatarProps.onClick) {
        return children;
      }

      return <Clickable onClick={avatarProps.onClick}>{children}</Clickable>;
    };

    const ariaLabel =
      typeof avatarProps?.tooltipProps?.content === "string" ? avatarProps.tooltipProps.content : undefined;

    const tooltipAvatarFlexItemClassName =
      isVirtualizedList || displayAsGrid ? "" : styles.tooltipAvatarFlexItemContainer;

    return (
      <ClickableContainer key={index}>
        <div className={styles.tooltipAvatarItemClickableContainer} style={style}>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} className={tooltipAvatarFlexItemClassName}>
            <Avatar
              {...avatarProps}
              tooltipProps={undefined}
              size={Avatar.sizes.SMALL}
              type={type || avatarProps?.type}
              ariaLabel={ariaLabel}
            />
            <div className={styles.tooltipAvatarItemTitle}>{avatarProps?.tooltipProps?.content}</div>
          </Flex>
        </div>
      </ClickableContainer>
    );
  };

  if (isVirtualizedList) {
    const maxOptionsWithoutScroll = 10;
    const optionLineHeight = 34;
    // TODO temp solution
    const optionLineWidth = avatars.some(i => !!i.value?.tooltipProps?.content) ? 175 : 40;

    const virtualizedItems = avatars.map(item => ({ ...item, height: optionLineHeight }));

    let virtualizedListStyle;
    if (maxOptionsWithoutScroll) {
      // Adding 0.5 to show next option to indicate scroll is available
      const minCount = Math.min(avatars.length, maxOptionsWithoutScroll + 0.5);
      virtualizedListStyle = { height: optionLineHeight * minCount, minWidth: optionLineWidth };
    }

    return (
      <div className={styles.virtualizedTooltipContainer}>
        <div className={styles.virtualizedListContainer}>
          <VirtualizedList
            className={cx(className)}
            items={virtualizedItems}
            itemRenderer={(item, index, style) => avatarRenderer(item, index, { ...style, width: "100%" })}
            role="treegrid"
            scrollableClassName={styles.scrollableContainer}
            getItemId={(item, index) => index}
            style={virtualizedListStyle}
          />
        </div>
      </div>
    );
  }

  const renderedItems = avatars.map((item, index) =>
    avatarRenderer(item, index, { width: displayAsGrid ? undefined : "100%" })
  );

  if (displayAsGrid) {
    return (
      <Flex
        className={cx(styles.scrollableContainer, styles.tooltipContainer, styles.tooltipGridContainer, className)}
        role="treegrid"
        direction={Flex.directions.ROW}
        gap={Flex.gaps.XS}
        wrap
      >
        {renderedItems}
      </Flex>
    );
  }

  return (
    <Flex
      className={cx(styles.scrollableContainer, styles.tooltipContainer, className)}
      role="treegrid"
      direction={Flex.directions.COLUMN}
    >
      {renderedItems}
    </Flex>
  );
};

AvatarGroupCounterTooltipContent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Array of Avatar components
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  isVirtualizedList: PropTypes.bool
};
AvatarGroupCounterTooltipContent.defaultProps = {
  className: undefined,
  type: undefined,
  avatars: [],
  isVirtualizedList: false
};

export default AvatarGroupCounterTooltipContent;
