import React, { PropsWithChildren } from "react";
import { DescriptionProps, externalStateType, IndicatorProps, LabelProps, OptionGroupProps, OptionProps, SelectBoxProps, TriggerProps, ValueProps } from "./select.type";
declare const Select: ((props: PropsWithChildren<SelectBoxProps<externalStateType>>) => import("react/jsx-runtime").JSX.Element) & {
    Label: (props: PropsWithChildren<LabelProps>) => import("react/jsx-runtime").JSX.Element;
    Description: (props: PropsWithChildren<DescriptionProps>) => import("react/jsx-runtime").JSX.Element;
    Trigger: (props: PropsWithChildren<TriggerProps>) => import("react/jsx-runtime").JSX.Element;
    Value: (props: ValueProps) => React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    OptionGroup: (props: PropsWithChildren<OptionGroupProps>) => import("react/jsx-runtime").JSX.Element | null;
    Indicator: (props: PropsWithChildren<IndicatorProps>) => import("react/jsx-runtime").JSX.Element;
    Option: (props: PropsWithChildren<OptionProps>) => import("react/jsx-runtime").JSX.Element;
};
export default Select;
