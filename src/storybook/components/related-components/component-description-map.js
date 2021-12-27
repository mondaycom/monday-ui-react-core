import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";
import { CheckboxDescription } from "./descriptions/checkbox-description";
import { RadioButtonDescription } from "./descriptions/radio-button-description";
import { LabelDescription } from "./descriptions/label-description";
import { CounterDescription } from "./descriptions/counter-description";
import { ChipsDescription } from "./descriptions/chips-description";
import { TooltipDescription } from "./descriptions/tooltip-description";
import { ToggleDescription } from "./descriptions/toggle-description";
import { DropdownDescription } from "./descriptions/dropdown-description";
import { ButtonDescription } from "./descriptions/button-description";
import { TabsDescription } from "./descriptions/tab-description";
import { BreadcrumbsDescription } from "./descriptions/breadcrumbs-description";
import { MenuDescription } from "./descriptions/menu-description";
import { AttentionBoxDescription } from "./descriptions/attention-box-description";
import { AlertBannerDescription } from "./descriptions/alert-banner-description";
import { ToastDescription } from "./descriptions/toast-description";
import { WizardDescription } from "./descriptions/wizard-description";
import { TipseenDescription } from "./descriptions/tipseen-description";
import { TextFieldDescription } from "./descriptions/text-field-description";
import { SearchDescription } from "./descriptions/search-description";
import { ComboboxDescription } from "./descriptions/combobox-description";
import { StepperDescription } from "./descriptions/stepper-description";
import { ColorsDescription } from "./descriptions/colors-description/colors-description";
import { SpinnerDescription } from "./descriptions/spinner-description";
import { SkeletonDescription } from "./descriptions/skeleton-description";
import { TypographyDescription } from "./descriptions/typography-description/typography-description";
import { IconButtonDescription } from "./descriptions/icon-button-description";
import { MenuButtonDescription } from "./descriptions/menu-button-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const LABEL = "label";
export const CHECKBOX = "checkbox";
export const RADIO_BUTTON = "radio-button";
export const COUNTER = "counter";
export const TOOLTIP = "tooltip";
export const TOGGLE = "toggle";
export const DROPDAWN = "dropdawn";
export const CHIP = "chips";
export const BUTTON = "button";
export const TAB = "tab";
export const BREADCRUBMS = "breadcrumbs";
export const MENU = "menu";
export const ATTENTION_BOX = "attention-box";
export const ALERT_BANNER = "alert-banner";
export const TOAST = "toast";
export const WIZARD = "wizard";
export const TIPSEEN = "tipseen";
export const TEXT_FIELD = "text-field";
export const SEARCH = "search";
export const COMBOBOX = "combobox";
export const STEPPER = "stepper";
export const SPINNER = "spinner";
export const SKELETON = "skeleton";
export const ICON_BUTTON = "icon-button";
export const MENU_BUTTON = "menu-button";

// General description names (not related to specific components)
export const COLORS = "colors";
export const TYPOGRAPHY = "typography";

export const descriptionTypesMap = new Map();

descriptionTypesMap.set(SPLIT_BUTTON, <SplitButtonDescription />);
descriptionTypesMap.set(BUTTON_GROUP, <ButtonGroupDescription />);
descriptionTypesMap.set(LABEL, <LabelDescription />);
descriptionTypesMap.set(CHECKBOX, <CheckboxDescription />);
descriptionTypesMap.set(RADIO_BUTTON, <RadioButtonDescription />);
descriptionTypesMap.set(COUNTER, <CounterDescription />);
descriptionTypesMap.set(TOOLTIP, <TooltipDescription />);
descriptionTypesMap.set(TOGGLE, <ToggleDescription />);
descriptionTypesMap.set(DROPDAWN, <DropdownDescription />);
descriptionTypesMap.set(CHIP, <ChipsDescription />);
descriptionTypesMap.set(ATTENTION_BOX, <AttentionBoxDescription />);
descriptionTypesMap.set(ALERT_BANNER, <AlertBannerDescription />);
descriptionTypesMap.set(TOAST, <ToastDescription />);
descriptionTypesMap.set(BUTTON, <ButtonDescription />);
descriptionTypesMap.set(TAB, <TabsDescription />);
descriptionTypesMap.set(BREADCRUBMS, <BreadcrumbsDescription />);
descriptionTypesMap.set(MENU, <MenuDescription />);
descriptionTypesMap.set(WIZARD, <WizardDescription />);
descriptionTypesMap.set(TIPSEEN, <TipseenDescription />);
descriptionTypesMap.set(TEXT_FIELD, <TextFieldDescription />);
descriptionTypesMap.set(SEARCH, <SearchDescription />);
descriptionTypesMap.set(COMBOBOX, <ComboboxDescription />);
descriptionTypesMap.set(STEPPER, <StepperDescription />);
descriptionTypesMap.set(SPINNER, <SpinnerDescription />);
descriptionTypesMap.set(SKELETON, <SkeletonDescription />);
descriptionTypesMap.set(ICON_BUTTON, <IconButtonDescription />);
descriptionTypesMap.set(MENU_BUTTON, <MenuButtonDescription />);

// General description (not related to specific components)
descriptionTypesMap.set(COLORS, <ColorsDescription />);
descriptionTypesMap.set(TYPOGRAPHY, <TypographyDescription />);
