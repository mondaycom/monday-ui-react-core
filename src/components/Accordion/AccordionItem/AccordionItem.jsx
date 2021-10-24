import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";

import "./AccordionItem.scss";

const AccordionItem = forwardRef(
  ({ children, headerComponentRenderer, className, iconSize, id, open, onClick }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div ref={mergedRef} className={cx("accordion-item", className)} id={id}>
        <ExpandCollapse
          headerComponentRenderer={headerComponentRenderer}
          iconSize={iconSize}
          open={open}
          onClick={onClick}
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

AccordionItem.propTypes = {
  /**
   * custom style
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  /**
   * Component as parameter to be rendered as header
   */
  headerComponentRenderer: PropTypes.func,
  /**
   * The value of the expandable section
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * The expand icon font size
   */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

AccordionItem.isAccordionChild = true;

AccordionItem.defaultProps = {
  className: "",
  id: undefined,
  iconSize: 24
};

export default AccordionItem;
