import React, { useEffect } from "react";
import { createContext } from "../../utils/createContext";
import { useExternalState } from "../../hooks/useExternalState";
import {
  DialogBackDropProps,
  DialogContentProps,
  DialogDefalutValuesType,
  DialogRootProps,
  DialogTriggerProps,
} from "./dialog.type";
import { getCustomElement, getNarrowTypedProps } from "../../utils/dom";

const dialogDefalutValues: DialogDefalutValuesType = {
  open: false,
  toggleDialog: () => {},
  openDialog: () => {},
  closeDialog: () => {},
};

const { DialogProvider, DialogUseContext } =
  createContext<DialogDefalutValuesType>({
    defaultValue: dialogDefalutValues,
    contextName: "Dialog",
  });

function DialogRoot(props: DialogRootProps) {
  const { children, externalOpen, onOpenChange, defaultOpen = false } = props;
  const [open = false, setOpen] = useExternalState<
    DialogRootProps["externalOpen"]
  >({
    prop: externalOpen,
    defaultProp: defaultOpen,
    handler: onOpenChange,
  });

  const toggleDialog = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <DialogProvider
      contextValues={{ open, toggleDialog, openDialog, closeDialog }}
    >
      {children}
    </DialogProvider>
  );
}

function DialogTrigger(props: DialogTriggerProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { toggleDialog } = DialogUseContext();

  const handleClick = (e: MouseEvent) => {
    if (asChild) {
      restProps.onTriggerClick?.(e);
    }
    toggleDialog();
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      onClick: handleClick,
    });
  }

  return (
    <button onClick={toggleDialog} className={restProps.className}>
      {children}
    </button>
  );
}

function DialogBackDrop(props: DialogBackDropProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { closeDialog } = DialogUseContext();

  useEffect(() => {
    document
      .getElementById("navrary-dialog-backdrop")
      ?.addEventListener("click", closeDialog);
    return () => {
      window.removeEventListener("click", closeDialog);
    };
  });

  const handleClick = (e: MouseEvent) => {
    restProps.onBackDropClick?.(e);
    closeDialog();
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      onClick: handleClick,
      id: "navrary-dialog-backdrop",
    });
  }

  return (
    <button
      id="navrary-dialog-backdrop"
      onClick={closeDialog}
      className={restProps.className}
    >
      {children}
    </button>
  );
}

function DialogContent(props: DialogContentProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { open, closeDialog } = DialogUseContext();

  const closeWithEscapeKey = (e: KeyboardEvent) => {
    if (!restProps.closeOnEsc || e.key !== "Escape") return;
    closeDialog();
  };

  useEffect(() => {
    window.addEventListener("keydown", closeWithEscapeKey);
    return () => {
      window.removeEventListener("keydown", closeWithEscapeKey);
    };
  });

  if (asChild) {
    return open
      ? getCustomElement(children, {
          className: restProps.className,
        })
      : null;
  }

  return open ? (
    <article className={restProps.className}>{children}</article>
  ) : null;
}

const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  BackDrop: DialogBackDrop,
  Content: DialogContent,
});

export default Dialog;
