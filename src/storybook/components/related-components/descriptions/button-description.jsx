import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Button from "../../../../components/Button/Button";

export const ButtonDescription = () => {
  const component = useMemo(() => <Button size={Button.sizes.LARGE}>Get started</Button>, []);
  return (
    <RelatedComponent
      component={component}
      title="Button"
      href="/?path=/docs/buttons-button--overview"
      description="Allow users take actions with a single click."
    />
  );
};
