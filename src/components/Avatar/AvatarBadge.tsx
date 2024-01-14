import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { ElementType } from "react";
import CustomSvgIcon from "../Icon/CustomSvgIcon/CustomSvgIcon";
import { AvatarSize } from "./AvatarConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./AvatarBadge.module.scss";

export interface AvatarBadgeProps extends VibeComponentProps {
  src?: string;
  component?: ElementType;
  ariaLabel?: string;
  tabIndex?: string | number;
  className?: string;
  size?: string;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> & {
  sizes?: typeof AvatarSize;
} = ({
  src,
  component: SVGComponent,
  ariaLabel,
  tabIndex = 0,
  className,
  size = AvatarSize.LARGE,
  id,
  "data-testid": dataTestId,
  ...otherProps
}) => {
  const classNames = cx(getStyle(styles, camelCase("badge--" + size)), className);
  const testId = dataTestId || getTestId(ComponentDefaultTestId.AVATAR_BADGE, id);

  if (SVGComponent) {
    return (
      <SVGComponent
        ariaLabel={ariaLabel}
        className={classNames}
        clickable={tabIndex === -1}
        {...otherProps}
        data-testid={testId}
      />
    );
  }

  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={classNames}
      clickable={tabIndex === -1}
      {...otherProps}
      data-testid={testId}
    />
  ) : null;
};

Object.assign(AvatarBadge, {
  sizes: AvatarSize
});
