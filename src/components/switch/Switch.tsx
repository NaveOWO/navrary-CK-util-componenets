import React from "react";
import { createContext } from "../../utils/createContext";
import {
  SwitchBoxProps,
  SwitchDefaultValueType,
  SwitchRootProps,
  SwitchThumbProps,
} from "./switch.type";
import { useExternalState } from "../../hooks/useExternalState";
import { getNarrowTypedProps, getCustomElement } from "../../utils/dom";

const switcheDefaultValue: SwitchDefaultValueType = {
  mode: "off",
  toggleMode: () => {},
};

const { SwitchProvider, SwitchUseContext } =
  createContext<SwitchDefaultValueType>({
    defaultValue: switcheDefaultValue,
    contextName: "Switch",
  });

function SwitchRoot(props: SwitchRootProps) {
  const { children, externalMode, defaultMode, onModeChange } = props;
  const [mode = "off", setMode] = useExternalState<
    SwitchRootProps["externalMode"]
  >({
    prop: externalMode,
    defaultProp: defaultMode,
    handler: onModeChange,
  });

  const toggleMode = () => {
    mode === "off" ? setMode("on") : setMode("off");
  };

  return (
    <SwitchProvider contextValues={{ mode, toggleMode }}>
      {children}
    </SwitchProvider>
  );
}

function SwitchThumb(props: SwitchThumbProps) {
  const { children, asChild, ...restProps } = getNarrowTypedProps(props);
  const { mode, toggleMode } = SwitchUseContext();

  const handleClick = (e: MouseEvent) => {
    if (asChild) {
      restProps.onThumbClick?.(e);
    }
    toggleMode();
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      mode,
      onClick: handleClick,
    });
  }

  return (
    <div onClick={toggleMode} className={restProps.className}>
      {children}
    </div>
  );
}

function SwitchBox(props: SwitchBoxProps) {
  const { children, asChild, ...restProps } = getNarrowTypedProps(props);
  const { mode, toggleMode } = SwitchUseContext();

  const handleClick = (e: MouseEvent) => {
    if (asChild && restProps.clickable) {
      restProps.onBoxClick?.(e);
      toggleMode();
    }
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      mode,
      onClick: restProps.clickable ? handleClick : undefined,
    });
  }

  return <div className={restProps.className}>{children}</div>;
}

const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
  Box: SwitchBox,
});

export default Switch;
