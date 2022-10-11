<<<<<<<< HEAD:src/components/Icon/hooks/useIconProps.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = require("classnames");
const noop_1 = require("lodash/noop");
const useEventListener_1 = require("../../../hooks/useEventListener");
const useKeyEvent_1 = require("../../../hooks/useKeyEvent");
const KeyCodes_1 = require("../../../constants/KeyCodes");
const useIconScreenReaderAccessProps_1 = require("../../../hooks/useIconScreenReaderAccessProps");
const KEYS = [KeyCodes_1.keyCodes.ENTER, KeyCodes_1.keyCodes.SPACE];
function useIconProps({ onClick, className, clickable, ignoreFocusStyle, isDecorationOnly, iconLabel, externalTabIndex }) {
    const iconRef = (0, react_1.useRef)(null);
    const onEnterCallback = (0, react_1.useCallback)((event) => {
        const isActive = document.activeElement === iconRef.current;
        if (!isActive) {
            return;
        }
        // Keyboard event is different from mouse event
        //@ts-ignore
        onClick(event);
    }, [iconRef, onClick]);
    const onMouseDown = (0, react_1.useCallback)((event) => {
        event.preventDefault();
    }, []);
    const computedClassName = (0, react_1.useMemo)(() => {
        return (0, classnames_1.default)("icon_component", className, {
            "icon_component--clickable": clickable,
            "icon_component--no-focus-style": ignoreFocusStyle
        });
    }, [clickable, className, ignoreFocusStyle]);
    (0, useEventListener_1.default)({
        eventName: "mousedown",
        callback: onMouseDown,
        ref: iconRef
    });
    // We did not convert this hook to ts yet
    //@ts-ignore
    (0, useKeyEvent_1.default)({
        keys: KEYS,
        ref: iconRef,
        callback: onEnterCallback,
        ignoreDocumentFallback: true,
        capture: true,
        stopPropagation: true,
        preventDefault: true
    });
    const onClickCallback = (0, react_1.useCallback)((event) => {
        const callback = onClick || noop_1.default;
        callback(event);
    }, [onClick]);
    const screenReaderAccessProps = (0, useIconScreenReaderAccessProps_1.default)({
        isClickable: clickable,
        label: iconLabel,
        isDecorationOnly
    });
    screenReaderAccessProps.tabIndex = externalTabIndex !== null && externalTabIndex !== void 0 ? externalTabIndex : screenReaderAccessProps.tabIndex;
    return {
        screenReaderAccessProps,
        onClickCallback,
        computedClassName,
        onEnterCallback,
        iconRef
    };
========
import { KeyboardEvent, UIEvent, MouseEvent, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import NOOP from "lodash/noop";
import useEventListener from "../../../hooks/useEventListener";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/KeyCodes";
import useIconScreenReaderAccessProps from "../../../hooks/useIconScreenReaderAccessProps";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export default function useIconProps({
  onClick,
  className,
  clickable,
  ignoreFocusStyle,
  isDecorationOnly,
  iconLabel,
  externalTabIndex
}: {
  onClick?: (event: UIEvent) => void;
  className?: string;
  clickable?: boolean;
  ignoreFocusStyle?: boolean;
  isDecorationOnly?: boolean;
  iconLabel?: string;
  externalTabIndex?: number | undefined;
}) {
  const iconRef = useRef(null);
  const onEnterCallback = useCallback(
    (event: KeyboardEvent) => {
      const isActive = document.activeElement === iconRef.current;
      if (!isActive) {
        return;
      }
      onClick(event);
    },
    [iconRef, onClick]
  );

  const onMouseDown = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const computedClassName = useMemo(() => {
    return cx("icon_component", className, {
      "icon_component--clickable": clickable,
      "icon_component--no-focus-style": ignoreFocusStyle
    });
  }, [clickable, className, ignoreFocusStyle]);

  useEventListener({
    eventName: "mousedown",
    callback: onMouseDown,
    ref: iconRef
  });

  useKeyEvent({
    keys: KEYS,
    ref: iconRef,
    callback: onEnterCallback,
    ignoreDocumentFallback: true,
    capture: true,
    stopPropagation: true,
    preventDefault: true
  });

  const onClickCallback = useCallback(
    (event: MouseEvent) => {
      const callback = onClick || NOOP;
      callback(event);
    },
    [onClick]
  );

  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: iconLabel,
    isDecorationOnly
  });

  screenReaderAccessProps.tabIndex = externalTabIndex ?? screenReaderAccessProps.tabIndex;

  return {
    screenReaderAccessProps,
    onClickCallback,
    computedClassName,
    onEnterCallback,
    iconRef
  };
>>>>>>>> master:src/components/Icon/hooks/useIconProps.tsx
}
exports.default = useIconProps;
