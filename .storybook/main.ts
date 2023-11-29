import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackOptions } from "./addon-styling-webpack-options";

const getAddons = () => {
  const addons = [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/preset-scss",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackOptions
    }
  ];

  if (process.env.NODE_ENV !== "production") {
    addons.push("@storybook/addon-interactions");
  }

  return addons;
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.js"],
  addons: getAddons(),
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: false
  },
  features: {}
};
export default config;