import { SwitchBoxProps, SwitchRootProps, SwitchThumbProps } from "./switch.type";
declare function SwitchRoot(props: SwitchRootProps): import("react/jsx-runtime").JSX.Element;
declare function SwitchThumb(props: SwitchThumbProps): import("react/jsx-runtime").JSX.Element;
declare function SwitchBox(props: SwitchBoxProps): import("react/jsx-runtime").JSX.Element;
declare const Switch: typeof SwitchRoot & {
    Thumb: typeof SwitchThumb;
    Box: typeof SwitchBox;
};
export default Switch;
