import { SelecOptionProps, SelectOptionGroupProps, SelectRootProps, SelectTriggerProps, SelectValueProps } from "./select.type";
declare function SelectRoot(props: SelectRootProps): import("react/jsx-runtime").JSX.Element;
declare function SelectTrigger(props: SelectTriggerProps): import("react/jsx-runtime").JSX.Element;
declare function SelectOptionGroup(props: SelectOptionGroupProps): import("react/jsx-runtime").JSX.Element | null;
declare function SelectOption<T extends number | string>(props: SelecOptionProps<T>): import("react/jsx-runtime").JSX.Element;
declare function SelectValue<T extends string = string>(props: SelectValueProps<T>): import("react/jsx-runtime").JSX.Element;
declare const Select: typeof SelectRoot & {
    Trigger: typeof SelectTrigger;
    OptionGroup: typeof SelectOptionGroup;
    Option: typeof SelectOption;
    Value: typeof SelectValue;
};
export default Select;
