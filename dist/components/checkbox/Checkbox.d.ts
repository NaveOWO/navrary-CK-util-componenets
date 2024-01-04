import { CheckBoxIndicatorProps, CheckBoxLabelProps, CheckBoxRootProps } from "./checkbox.type";
declare function CheckBoxRoot(props: CheckBoxRootProps): import("react/jsx-runtime").JSX.Element;
declare function CheckBoxIndicator(props: CheckBoxIndicatorProps): import("react/jsx-runtime").JSX.Element;
declare function CheckBoxLabel(props: CheckBoxLabelProps): import("react/jsx-runtime").JSX.Element;
declare const CheckBox: typeof CheckBoxRoot & {
    Indicator: typeof CheckBoxIndicator;
    Label: typeof CheckBoxLabel;
};
export default CheckBox;
