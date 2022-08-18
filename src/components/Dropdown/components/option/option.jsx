/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import TooltipWrapper from "../../../Tooltip/TooltipWrapper";
import "./option.scss";
import Tooltip from "../../../Tooltip/Tooltip";

const Option = ({ Renderer, ...props }) => {
  const { data } = props;

  return (
    <TooltipWrapper
      wrapWithTooltip={!!data?.tooltipProps}
      tooltipProps={{ position: Tooltip.positions.RIGHT, ...data.tooltipProps }}
    >
      <components.Option {...props} className="dropdown-wrapper__option--reset">
        {Renderer && <Renderer {...data} />}
      </components.Option>
    </TooltipWrapper>
  );
};

export default Option;
