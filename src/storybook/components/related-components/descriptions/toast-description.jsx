import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import ToastLineWrapper from "../../../../components/Toast/__stories__/ToastLineWrapper";
import Toast from "../../../../components/Toast/Toast";

export const ToastDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div style={style}>
        <ToastLineWrapper text="Message" actions={[{ type: Toast.actionTypes.BUTTON, content: "Button" }]} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Toast"
      href="/?path=/docs/feedback-toast--overview"
      description="A message object that presents timely information or feedback for the user."
    />
  );
};
