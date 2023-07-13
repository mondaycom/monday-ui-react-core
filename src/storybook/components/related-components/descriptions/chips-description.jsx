import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Chips from "../../../../components/Chips/Chips";

export const ChipsDescription = () => {
  const component = useMemo(() => <Chips label="This is a chip" readOnly />, []);
  return (
    <RelatedComponent
      component={component}
      title="Chip"
      href="/?path=/docs/data-display-chips--overview"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
