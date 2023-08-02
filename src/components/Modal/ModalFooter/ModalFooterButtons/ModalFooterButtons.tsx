import React, { forwardRef } from "react";
import VibeComponentProps from "../../../../types/VibeComponentProps";
import VibeComponent from "../../../../types/VibeComponent";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { NOOP } from "../../../../utils/function-utils";
import Flex from "../../../Flex/Flex";
import Button from "../../../Button/Button";
import ModalFooter from "../ModalFooter";

export interface ModalFooterButtonsProps extends VibeComponentProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const ModalFooterButtons: VibeComponent<ModalFooterButtonsProps> = forwardRef(
  (
    {
      primaryButtonText = "Confirm",
      secondaryButtonText = "Cancel",
      onPrimaryButtonClick = NOOP,
      onSecondaryButtonClick = NOOP,
      className,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    return (
      <ModalFooter
        id={id}
        className={className}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_FOOTER_BUTTONS, id)}
      >
        <Flex justify={Flex.justify.END} gap={Flex.gaps.SMALL}>
          <Button onClick={onSecondaryButtonClick} kind={Button.kinds.TERTIARY}>
            {secondaryButtonText}
          </Button>
          <Button onClick={onPrimaryButtonClick}>{primaryButtonText}</Button>
        </Flex>
      </ModalFooter>
    );
  }
);

export default ModalFooterButtons;