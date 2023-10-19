import { Attributes, ReactElement } from "react";
import { CombineStateType } from "./select.type";
export declare const combineStates: CombineStateType;
export declare const getCustomElement: <P extends Partial<P> & Attributes>(children: ReactElement, props: P) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
