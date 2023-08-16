import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import Avatar from "../Avatar/Avatar";
import { ListItemComponentType } from "../ListItem/ListItemConstants";
import styles from "./ListItemAvatar.module.scss";

export interface ListItemAvatarProps extends VibeComponentProps {
  /**
   * the ListItem component [li, div, a]
   */
  component?: ListItemComponentType;
  src?: string;
  avatarClassName?: string;
}

const ListItemAvatar: VibeComponent<ListItemAvatarProps> & { components?: typeof ListItemComponentType } = forwardRef(
  ({ className, id, src, avatarClassName, component = ListItemAvatar.components.DIV }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Component = component;

    return (
      <Component ref={mergedRef} className={cx(styles.listItemAvatar, className)} id={id} aria-hidden="true">
        <Avatar
          src={src}
          type={Avatar.types.IMG}
          size={Avatar.sizes.SMALL}
          className={cx(styles.avatar, avatarClassName)}
        />
      </Component>
    );
  }
);

export default withStaticProps(ListItemAvatar, {
  components: ListItemComponentType
});
