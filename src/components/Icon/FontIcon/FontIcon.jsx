import React, { forwardRef } from "react";
import "./FontIcon.scss";
import classNames from "classnames";

const FontIcon = forwardRef(({ className, onClick, iconLabel, tabIndex, icon, role, ariaHidden }, iconRef) => {
  const iconClassName = typeof icon === "function" ? "" : icon;
  return (
    <span
      aria-hidden={ariaHidden}
      className={classNames(className, "fa", iconClassName)}
      onClick={onClick}
      ref={iconRef}
      aria-label={iconLabel}
      tabIndex={tabIndex}
      role={role}
    >
      {typeof icon === "function" && icon()}
    </span>
  );
});
export default FontIcon;
