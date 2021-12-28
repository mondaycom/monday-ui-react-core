import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { bem } from "../SliderCommons";

const SliderRail = forwardRef(({ className, children, onClick }, ref) => {
  function handleClick(e) {
    console.log("click on track", e, e.clientX);
    if (typeof onClick === "function") {
      onClick(e);
    }
  }

  console.log("slider: rail", { className });
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={bem("rail", "", className)} onClick={handleClick} ref={ref}>
      {children}
    </div>
  );
});

SliderRail.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * onClick callback function
   */
  onClick: PropTypes.func
};

SliderRail.defaultProps = {
  className: "",
  onClick: undefined
};

export default SliderRail;
