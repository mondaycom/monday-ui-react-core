import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import HiddenText from "../../../../components/HiddenText/HiddenText";

export const HiddenTextDescription = () => {
  const component = useMemo(() => {
    return <HiddenText text="Secret text" />;
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Hidden text"
      href="/?path=/docs/accessibility-hiddentext--overview"
      description="Hidden text helps us to create a text which is accessible to screen reader users but not to users who see the screen."
    />
  );
};
