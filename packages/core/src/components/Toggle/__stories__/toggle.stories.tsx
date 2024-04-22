import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import Toggle from "../Toggle";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./toggle.stories.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toggle>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toggle,
  enumPropNamesArray: [],
  iconPropNamesArray: [],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/Toggle",
  component: Toggle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Toggle>;

const toggleTemplate = createComponentTemplate(Toggle);

export const Overview: Story = {
  render: toggleTemplate.bind({})
};

export const States: Story = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle isDefaultSelected={false} />
      <Toggle />
    </MultipleStoryElementsWrapper>
  )
};

export const Disabled: Story = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle isDefaultSelected={false} disabled />
      <Toggle disabled />
    </MultipleStoryElementsWrapper>
  )
};

export const TurnOnOffAnAutomation: Story = {
  render: () => (
    <>
      <h5>Board automations</h5>
      <Toggle />
    </>
  )
};
