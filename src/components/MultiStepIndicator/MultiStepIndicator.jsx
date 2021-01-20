import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import StepsDivider from "./components/StepsDivider/StepsDivider";
import { MULTI_STEP_TYPES } from "./MultiStepConstants";
import "./MultiStepIndicator.scss";

const MultiStepIndicator = forwardRef(
  ({ className, type, steps, stepComponentClassName, dividerComponentClassName }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const text = "hello";

    return (
      <div ref={mergedRef} className={cx("multi-step-indicator--wrapper", className)}>
        {steps.map((step, index) => {
          return (
            <>
              <StepIndicator
                {...step}
                stepNumber={index + 1}
                type={type}
                stepComponentClassName={stepComponentClassName}
              />
              {index !== steps.length - 1 && <StepsDivider dividerComponentClassName={dividerComponentClassName} />}
            </>
          );
        })}
      </div>
    );
  }
);

MultiStepIndicator.types = MULTI_STEP_TYPES;

MultiStepIndicator.propTypes = {
  /** For overriding the container class styles. */
  className: PropTypes.string,
  type: PropTypes.oneOf([
    MULTI_STEP_TYPES.PRIMARY,
    MULTI_STEP_TYPES.SUCCESS,
    MULTI_STEP_TYPES.DANGER,
    MULTI_STEP_TYPES.DARK
  ]),
  /** Array of objects of the specified format. */
  steps: PropTypes.arrayOf({
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
    status: PropTypes.arrayOf([
      StepIndicator.statuses.PENDING,
      StepIndicator.statuses.ACTIVE,
      StepIndicator.statuses.FULFILLED
    ])
  }).isRequired,
  /** For overriding the styles of the step component - container of number/check and texts. */
  stepComponentClassName: PropTypes.string,
  /** For overriding the step-dividers styles. */
  dividerComponentClassName: PropTypes.string
};

MultiStepIndicator.defaultProps = {
  className: "",
  stepComponentClassName: "",
  dividerComponentClassName: "",
  type: MultiStepIndicator.types.PRIMARY,
  steps: []
};

export default MultiStepIndicator;
