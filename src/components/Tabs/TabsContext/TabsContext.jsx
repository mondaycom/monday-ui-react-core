import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabsContext.scss";

const TabsContext = forwardRef(({ className, id }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
    <div ref={mergedRef} className={cx("tabs-context--wrapper", className)} id={id}>
        My awesome new component
    </div>
  );
});

TabsContext.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};
TabsContext.defaultProps = {
    className: "",
    id: ""
};

export default TabsContext;
