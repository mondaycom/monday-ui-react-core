import { userEvent } from "@storybook/testing-library";
import {
  getByRole,
  getByText,
  clickElement,
  waitForElementVisible,
  interactionSuite,
  resetFocus,
  expectActiveElementToHavePartialText
} from "../../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";

const TWO_DEPTHS_MENU_TEXTS = {
  TOP_MENU_SUB_MENU_ITEM: "With Sub menu",
  SUB_MENU_ITEM: "Sub Sub menu",
  SUB_SUB_MENU_ITEM: "Sub sub item",
  TOP_MENU_NON_SUB_MENU_ITEM: "Another item"
};

const showSubSubMenusOnHover = async canvas => {
  const menuElement = getMenuElement(canvas);

  const topMenuItem = getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.TOP_MENU_SUB_MENU_ITEM);
  await userEvent.hover(topMenuItem);

  const innerMenuItem = getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM);
  await userEvent.hover(innerMenuItem);

  // validate showing sub sub item
  const optionToSelect = await waitForElementVisible(() =>
    getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM)
  );
  await clickElement(optionToSelect);
  expect(document.activeElement).toHaveTextContent(TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM);

  //close the sub-menus on hovering the top-level menu
  await userEvent.hover(getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.TOP_MENU_NON_SUB_MENU_ITEM));
  expect(canvas.queryByText(TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM)).not.toBeInTheDocument();
  expect(canvas.queryByText(TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM)).not.toBeInTheDocument();
};

const showSubSubMenusWithKeyboard = async canvas => {
  const menuElement = getMenuElement(canvas);

  //set the initial focus, to make the keyboard events work
  const topMenuItem = getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.TOP_MENU_SUB_MENU_ITEM);
  await userEvent.click(topMenuItem);

  //open sub menu
  await userEvent.keyboard("{arrowDown}");
  await userEvent.keyboard("{arrowDown}");
  await userEvent.keyboard("{arrowRight}");
  await waitForElementVisible(() => getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM));
  expectActiveElementToHavePartialText(TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM);

  //open sub sub menu
  await userEvent.keyboard("{arrowDown}");
  await userEvent.keyboard("{arrowDown}");
  await userEvent.keyboard("{arrowRight}");
  await waitForElementVisible(() => getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM));
  expectActiveElementToHavePartialText(TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM);

  //close sub-sub-menu - using left arrow
  await userEvent.keyboard("{arrowLeft}");
  expect(canvas.queryByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM)).not.toBeInTheDocument();
  expectActiveElementToHavePartialText(TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM);

  //close sub-menu - using escape
  await userEvent.keyboard("{escape}");
  expect(canvas.queryByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM)).not.toBeInTheDocument();
  expectActiveElementToHavePartialText(TWO_DEPTHS_MENU_TEXTS.TOP_MENU_SUB_MENU_ITEM);
};

export const menuWithTwoDepthsSuite = interactionSuite({
  tests: [showSubSubMenusOnHover, showSubSubMenusWithKeyboard],
  afterEach: async () => {
    await resetFocus();
  }
});

function getMenuElement(canvas) {
  return getByRole(canvas, "menu");
}
