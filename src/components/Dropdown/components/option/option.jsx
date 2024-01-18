import cx from "classnames";
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./option.module.scss";

const Option = ({ Renderer, data, children, optionWrapperClassName, ...props }) => {
  const tooltipProps = data?.tooltipProps || {};
  const rendererProps = { children, data, ...props };
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      <div role="option" aria-selected={props.isSelected}>
        {Renderer ? (
          <components.Option {...rendererProps} className={cx(styles.optionReset, optionWrapperClassName)}>
            <Renderer {...rendererProps} {...data} /> {/* Spreading data here for a backward compatability */}
          </components.Option>
        ) : (
          <components.Option {...rendererProps} className={cx(styles.optionReset, optionWrapperClassName)}>
            <ChildrenContent data={data}>{children}</ChildrenContent>
          </components.Option>
        )}
      </div>
    </Tooltip>
  );
};

export default Option;
