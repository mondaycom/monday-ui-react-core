import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import TextField from "../../../../components/TextField/TextField";

export const TextFieldDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <TextField placeholder="Placeholder text here" size={TextField.sizes.LARGE} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Input field"
      href="/?path=/docs/inputs-textfield--overview"
      description="Allows users take actions with a single click."
    />
  );
};
