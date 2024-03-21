import React, { cloneElement, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import useResizeObserver from "../../hooks/useResizeObserver";
import styles from "./LabelCelebrationAnimation.module.scss";

const DEFAULT_BORDER_RADIUS = 4;
const DEFAULT_STROKE_WIDTH = 1;

export interface LabelCelebrationAnimationProps {
  children: React.ReactElement;
  active: boolean;
}

function LabelCelebrationAnimation({ children, active: isActive }: LabelCelebrationAnimationProps) {
  const wrapperRef = useRef<HTMLDivElement>();
  const childRef = useRef<HTMLDivElement>();

  const [active, setActive] = useState<boolean>(isActive);
  const [path, setPath] = useState<string>();

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const resizeObserverCallback = useCallback(
    ({ borderBoxSize }: { borderBoxSize: { blockSize: number; inlineSize: number } }) => {
      const { blockSize: height, inlineSize: width } = borderBoxSize || {};

      if (wrapperRef.current && active) {
        const d = getPath({ width, height });
        setPath(d);

        const perimeter = getPerimeter({ width, height });
        wrapperRef.current.style.setProperty("--container-perimeter", String(perimeter));
      }
    },
    [active]
  );

  useResizeObserver({
    ref: wrapperRef,
    callback: resizeObserverCallback,
    debounceTime: 0
  });

  const ChildComponentWithRef = forwardRef((_props, ref) =>
    cloneElement(children, {
      ref
    })
  );

  if (!active) {
    return children;
  }

  return (
    <div className={styles.celebration} ref={wrapperRef}>
      <svg className={styles.svg}>
        <path className={cx(styles.stroke, styles.base)} d={path} />
        <path className={cx(styles.stroke, styles.first)} d={path} />
        <path className={cx(styles.stroke, styles.second)} d={path} />
        <path
          className={cx(styles.stroke, styles.third)}
          d={path}
          onAnimationEnd={() => {
            setActive(false);
          }}
        />
      </svg>
      <ChildComponentWithRef ref={childRef} />
    </div>
  );
}

export default LabelCelebrationAnimation;

function getPath({
  width,
  height,
  borderRadius = DEFAULT_BORDER_RADIUS,
  strokeWidth = DEFAULT_STROKE_WIDTH
}: {
  width: number;
  height: number;
  borderRadius?: number;
  strokeWidth?: number;
}) {
  return `M ${width - strokeWidth / 2}, ${borderRadius} V ${
    height - borderRadius
  } A ${borderRadius} ${borderRadius} 0 0 1 ${width - borderRadius} ${
    height - strokeWidth / 2
  } H ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 1 ${strokeWidth / 2} ${
    height - borderRadius
  } V ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${strokeWidth / 2} L ${
    width - borderRadius
  }, ${strokeWidth / 2} A ${borderRadius} ${borderRadius} 0 0 1 ${width - strokeWidth / 2} ${borderRadius} Z`;
}

function getPerimeter({
  width,
  height,
  borderRadius = DEFAULT_BORDER_RADIUS
}: {
  width: number;
  height: number;
  borderRadius?: number;
}) {
  const straightWidth = width - 2 * borderRadius;
  const straightHeight = height - 2 * borderRadius;
  const cornerCircumference = 2 * Math.PI * borderRadius;
  return cornerCircumference + 2 * straightWidth + 2 * straightHeight;
}
