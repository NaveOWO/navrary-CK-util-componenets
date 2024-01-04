import { DefaultProps } from "../common/type";
export type DialogDefalutValuesType = {
    open: boolean;
    toggleDialog: () => void;
    openDialog: () => void;
    closeDialog: () => void;
};
export type DialogRootProps = {
    externalOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (state?: boolean) => void;
} & DefaultProps;
export type DialogTriggerProps = DefaultProps & {
    className?: string;
    onTriggerClick?: (e: MouseEvent) => void;
};
export type DialogBackDropProps = DefaultProps & {
    onBackDropClick?: (e: MouseEvent) => void;
    className?: string;
};
export type DialogContentProps = DefaultProps & {
    closeOnEsc?: boolean;
    className?: string;
};
