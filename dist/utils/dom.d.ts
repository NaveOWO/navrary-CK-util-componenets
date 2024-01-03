import { Attributes, ReactElement, ReactNode } from "react";
import { DefaultProps } from "../components/common/type";
export declare const getCustomElement: <P extends Partial<P> & Attributes>(children: ReactElement, props: P, innerChild?: ReactNode) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare const getNarrowTypedProps: <T extends DefaultProps>(props: T) => (T & {
    asChild: boolean;
    children: ReactElement<any, string | import("react").JSXElementConstructor<any>>;
}) | (T & {
    asChild: boolean;
});
