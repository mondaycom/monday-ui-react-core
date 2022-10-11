import React, { ForwardedRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LoaderColors, LoaderSize, LoaderSizes } from "./LoaderConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./Loader.module.scss";

export interface LoaderProps extends VibeComponentProps {
  id?: string;
  // Backward compatibility for props naming
  svgClassName?: string;
  className?: string;
  /** The loader's size: `number` or */
  size?: LoaderSize;
  color?: LoaderColors;
  hasBackground?: boolean;
}

const Loader: React.ForwardRefExoticComponent<LoaderProps> & {
  sizes?: typeof LoaderSizes;
  colors?: typeof LoaderColors;
} = forwardRef<unknown, LoaderProps>(
  (
    { svgClassName, className, size, color, hasBackground, id, "data-testid": dataTestId }: LoaderProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, svgClassName], "");

    const sizeStyle = useMemo(() => {
      if (typeof size === "number") {
        return { width: size, height: size };
      }
      return undefined;
    }, [size]);

    return (
      <div
        className={cx("monday-loader-component", styles.loaderContainer)}
        ref={ref}
        role="alert"
        title="loading"
        style={sizeStyle}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.LOADER, id)}
      >
        <svg
          className={cx("circle-loader-spinner", styles.circleLoaderSpinner, overrideClassName)}
          viewBox="0 0 50 50"
          color={color}
          aria-hidden
        >
          {hasBackground && (
            <circle
              className={styles.circleLoaderSpinnerBackground}
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
          )}
          <circle
            className={cx("circle-loader-spinner-path", styles.circleLoaderSpinnerPath)}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  }
);

Object.assign(Loader, {
  sizes: LoaderSizes,
  colors: LoaderColors
});

Loader.defaultProps = {
  id: undefined,
  className: undefined,
  svgClassName: undefined,
  size: undefined,
  color: undefined,
  hasBackground: false
};

export default Loader;
