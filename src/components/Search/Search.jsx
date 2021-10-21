import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Search.scss";
import SearchIcon from "../Icon/Icons/components/Search";
import CloseIcon from "../Icon/Icons/components/CloseSmall";
import TextField from "../TextField/TextField";
import useMergeRefs from "../../hooks/useMergeRefs";
import { TYPES } from "./SearchConstats";
import { SIZES } from "../../constants/sizes";

const NOOP = () => {};

const TYPE_CLASSES = {
  round: "search_component--round",
  underline: "input-component__input--only-underline",
  square: ""
};

function getType(type) {
  return TYPE_CLASSES[type] || "";
}

const ICON_NAMES = {
  primary: "Search",
  secondary: "Clear Search"
};

const Search = forwardRef(
  (
    {
      secondaryIconName,
      iconName,
      onChange,
      autoFocus,
      underline,
      value,
      placeholder,
      disabled,
      debounceRate,
      onBlur,
      onFocus,
      wrapperClassName,
      setRef,
      autoComplete,
      size,
      type,
      className,
      id,
      validation,
      inputAriaLabel,
      searchResultsContainerId,
      activeDescendant,
      iconNames,
      loading
    },
    ref
  ) => {
    const mergedRef = useMergeRefs({ refs: [ref, setRef] });

    return (
      <TextField
        id={id}
        iconName={iconName}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        underline={underline}
        placeholder={placeholder}
        disabled={disabled}
        debounceRate={debounceRate}
        className={classNames(className, "search_component", getType(type))}
        secondaryIconName={secondaryIconName}
        wrapperClassName={classNames(wrapperClassName, "search_component_wrapper")}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={mergedRef}
        autoComplete={autoComplete}
        size={size}
        clearOnIconClick
        validation={validation}
        inputAriaLabel={inputAriaLabel}
        searchResultsContainerId={searchResultsContainerId}
        activeDescendant={activeDescendant}
        iconsNames={iconNames}
        type="search"
        role="search"
        loading={loading}
      />
    );
  }
);

Search.sizes = SIZES;
Search.types = TYPES;

Search.propTypes = {
  secondaryIconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  underline: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  debounceRate: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  wrapperClassName: PropTypes.string,
  setRef: PropTypes.func,
  autoComplete: PropTypes.string,
  /* SIZES is exposed on the component itself */
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
  /* TYPES is exposed on the component itself */
  type: PropTypes.oneOf([TYPES.SQUARE, TYPES.SQUARE, TYPES.UNDERLINE]),
  className: PropTypes.string,
  id: PropTypes.string,
  validation: PropTypes.shape({
    status: PropTypes.string,
    text: PropTypes.string
  }),
  inputAriaLabel: PropTypes.string,
  searchResultsContainerId: PropTypes.string,
  activeDescendant: PropTypes.string,
  /*  Icon names labels for a11y */
  iconNames: PropTypes.shape({
    layout: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string
  }),
  loading: PropTypes.bool
};

Search.defaultProps = {
  secondaryIconName: CloseIcon,
  iconName: SearchIcon,
  onChange: NOOP,
  autoFocus: false,
  underline: false,
  value: "",
  placeholder: "",
  disabled: false,
  debounceRate: 200,
  onBlur: NOOP,
  onFocus: NOOP,
  wrapperClassName: "",
  setRef: NOOP,
  autoComplete: "off",
  size: SIZES.MEDIUM,
  type: TYPES.SQUARE,
  className: "",
  id: "search",
  validation: null,
  inputAriaLabel: undefined,
  searchResultsContainerId: "",
  activeDescendant: "",
  iconNames: ICON_NAMES,
  loading: false
};

export default Search;
