import { DialogBackDropProps, DialogContentProps, DialogRootProps, DialogTriggerProps } from "./dialog.type";
declare function DialogRoot(props: DialogRootProps): import("react/jsx-runtime").JSX.Element;
declare function DialogTrigger(props: DialogTriggerProps): import("react/jsx-runtime").JSX.Element;
declare function DialogBackDrop(props: DialogBackDropProps): import("react/jsx-runtime").JSX.Element | null;
declare function DialogContent(props: DialogContentProps): import("react/jsx-runtime").JSX.Element | null;
declare const Dialog: typeof DialogRoot & {
    Trigger: typeof DialogTrigger;
    BackDrop: typeof DialogBackDrop;
    Content: typeof DialogContent;
};
export default Dialog;
