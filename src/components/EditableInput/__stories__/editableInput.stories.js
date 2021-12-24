import React from "react";
import { withPerformance } from "storybook-addon-performance";
import EditableInput from "../EditableInput";

export const Sandbox = () => (
  <div style={{ width: "300px", border: "1px solid", padding: "30px" }}>
    <EditableInput inputType="input" value={"Hello input"} />
    <br />
    <br />
    <EditableInput inputType="textarea" value={"Hello textarea"} />
    <br />
    <br />
    <EditableInput
      inputType="textarea"
      autoSize
      value={"Hello textarea autosize test long long text"}
      ariaLabel="Edit input"
    />
  </div>
);

export const InputWithDate = () => (
  <div style={{ width: "300px", border: "1px solid", padding: "30px" }}>
    <EditableInput inputType="input" autoSize value={"2022-12-25"} ariaLabel="Choose date" type="date" />
  </div>
);

export const InputWithDateTime = () => (
  <div style={{ width: "300px", border: "1px solid", padding: "30px" }}>
    <EditableInput
      inputType="input"
      autoSize
      value={"2022-12-25T10:10"}
      ariaLabel="Choose date and time"
      type="datetime-local"
    />
  </div>
);


export default {
  title: "Components|EditableInput",
  component: EditableInput,
  decorators: [withPerformance]
};
