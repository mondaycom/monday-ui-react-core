import { expect } from "@storybook/jest";
import {
  getByLabelText,
  testFunctionWrapper,
  pressNavigationKey,
  interactionSuite,
  resetFocus
} from "../../../__tests__/interactions-helper";
import { NAVIGATIONS_COMMANDS } from "utils/test-utils";

export const states_onClickTabFocusElementTest = testFunctionWrapper(async canvas => {
  const CLICKABLE_LABEL = "clickable button";
  const CLICKABLE_DISABLED_LABEL = "disabled clickable button";
  const clickableElement = await getByLabelText(canvas, CLICKABLE_LABEL);
  const disabledClickableElement = await getByLabelText(canvas, CLICKABLE_DISABLED_LABEL);
  await pressNavigationKey(NAVIGATIONS_COMMANDS.TAB);
  expect(document.activeElement).toEqual(clickableElement);
  await pressNavigationKey(NAVIGATIONS_COMMANDS.TAB);
  expect(document.activeElement).not.toEqual(disabledClickableElement);
});

export const statesPlaySuite = interactionSuite({
  tests: [states_onClickTabFocusElementTest]
});
