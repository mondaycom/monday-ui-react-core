import { within, userEvent, fireEvent } from "@storybook/testing-library";
import { waitFor } from "@testing-library/react";
import { getTestId, ELEMENT_TYPES as types } from "../utils/test-utils";
import { expect } from "@storybook/jest";

export const ELEMENT_TYPES = types;

function getWithin(canvasOrValidTestElement) {
  if (canvasOrValidTestElement.getByRole) return canvasOrValidTestElement;
  const result = within(canvasOrValidTestElement);
  if (result instanceof Error) {
    throw result;
  }
  return result;
}

export const interactionSuite =
  ({ beforeEach = null, tests, afterEach = null }) =>
  async ({ canvasElement, args }) => {
    for (const test of tests) {
      const fnName = test.name;
      if (beforeEach) {
        logFunctionStart(`Before: ${fnName}`);
        await testFunctionWrapper(beforeEach)({ canvasElement, args });
      }

      logFunctionStart(`Running : ${fnName}`);
      await testFunctionWrapper(test)({ canvasElement, args });

      if (afterEach) {
        logFunctionStart(`After: ${fnName}`);
        await testFunctionWrapper(afterEach)({ canvasElement, args });
      }
    }
  };

export const testFunctionWrapper = testFunc => {
  return async ({ canvasElement, args }) => {
    // Starts querying the component from its root element
    const canvas = getWithin(canvasElement);
    return testFunc(canvas, args);
  };
};

export const getByTestId = (rootElement, elementType, id = "") => {
  const dataTestId = getTestId(elementType, id);
  return getWithin(rootElement).getByTestId(dataTestId);
};

export const getByText = (rootElement, text) => {
  return getWithin(rootElement).getByText(text);
};

export const getByPlaceholderText = (rootElement, text) => {
  return getWithin(rootElement).getByPlaceholderText(text);
};

export const getByClassName = className => {
  return document.getElementsByClassName(className)[0];
};

export const getByRole = (rootElement, role) => {
  return getWithin(rootElement).getByRole(role);
};

export const getByLabelText = (rootElement, text) => {
  return getWithin(rootElement).getByLabelText(text);
};

export const clickElement = element => {
  return userEvent.click(element);
};

export const hoverElement = element => {
  return userEvent.hover(element);
};

export const typeText = async (element, text, waitForDebounceMs = 250) => {
  let promise = userEvent.type(element, text, {
    delay: 50
  });
  const result = await promise;
  await delay(waitForDebounceMs);
  return result;
};

export function delay(timeout) {
  return new Promise(resolve => {
    if (!timeout) return resolve();
    setTimeout(resolve, timeout);
  });
}

export async function resetFocus() {
  const focusTrap = document.querySelector("[data-testid=focusTrap]");
  await userEvent.click(focusTrap);
}

export const waitForElementVisible = getterFunc => {
  return new Promise(resolve => {
    let element;
    waitFor(() => {
      element = getterFunc();
      expect(element).toBeVisible();
    }).then(() => {
      resolve(element);
    });
  });
};

function logFunctionStart(name) {
  expect(` ➡️ ${name}`).toBeDefined();
}

function getElementClientCenter(element) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2
  };
}

const getCoords = ({ toElm, toCoords, delta, from }) => {
  if (toCoords) {
    return toCoords;
  }
  if (toElm) {
    return getElementClientCenter(toElm);
  }
  if (delta) {
    return {
      x: from.x + delta.x,
      y: from.y + delta.y
    };
  }
  return {
    x: from.x + 10,
    y: from.y + 0
  };
};

export async function drag(
  element,
  { delta = undefined, toCoords = undefined, toElm = undefined, steps = 20, duration = 500 }
) {
  const from = getElementClientCenter(element);
  const to = getCoords({ toElm, toCoords, delta, from });
  const step = {
    x: (to.x - from.x) / steps,
    y: (to.y - from.y) / steps
  };
  const current = {
    clientX: from.x,
    clientY: from.y
  };
  console.log("interactions-helper: drag", { current, step, to, from, element });
  userEvent.hover(element);
  fireEvent.mouseEnter(element, current);
  fireEvent.mouseOver(element, current);
  fireEvent.mouseMove(element, current);
  fireEvent.mouseDown(element, current);
  for (let i = 0; i < steps; i++) {
    current.clientX += step.x;
    current.clientY += step.y;
    await delay(duration / steps);
    fireEvent.mouseMove(element, current);
  }
  fireEvent.mouseUp(element, current);
}
