import React from "react";
import { createContext } from "../../utils/createContext";
import { getNarrowTypedProps, getCustomElement } from "../../utils/dom";
import { useExternalState } from "../../hooks/useExternalState";
import {
  CheckBoxContextType,
  CheckBoxIndicatorProps,
  CheckBoxLabelProps,
  CheckBoxRootProps,
} from "./checkbox.type";

const checkboxDefaultValue: CheckBoxContextType = {
  checked: false,
  toggleCheckBox: () => {},
  id: null,
};

const { CheckBoxProvider, CheckBoxUseContext } =
  createContext<CheckBoxContextType>({
    defaultValue: checkboxDefaultValue,
    contextName: "CheckBox",
  });

function CheckBoxRoot(props: CheckBoxRootProps) {
  const {
    children,
    externalCheck,
    defaultCheck = false,
    onCheckChange,
    id,
  } = props;
  const [checked = false, setChecked] = useExternalState<
    CheckBoxRootProps["externalCheck"]
  >({
    prop: externalCheck,
    defaultProp: defaultCheck,
    handler: onCheckChange,
  });

  const toggleCheckBox = () => {
    console.log(checked);
    checked ? setChecked(false) : setChecked(true);
  };
  return (
    <CheckBoxProvider contextValues={{ checked, toggleCheckBox, id }}>
      {children}
    </CheckBoxProvider>
  );
}

function CheckBoxIndicator(props: CheckBoxIndicatorProps) {
  const { children, asChild, ...restProps } = getNarrowTypedProps(props);
  const { checked, toggleCheckBox, id } = CheckBoxUseContext();

  const handleClick = (e: MouseEvent) => {
    if (asChild) {
      restProps.onIndicatorClick?.(e);
    }
    toggleCheckBox();
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      checked,
      onClick: handleClick,
      type: "checkbox",
      id: id,
    });
  }

  return (
    <input
      type="checkbox"
      id={`checkbox-${id}`}
      onClick={toggleCheckBox}
      checked={checked}
      className={restProps.className}
    >
      {children}
    </input>
  );
}

function CheckBoxLabel(props: CheckBoxLabelProps) {
  const { children, asChild, ...restProps } = getNarrowTypedProps(props);
  const { checked, id } = CheckBoxUseContext();

  const handleClick = (e: MouseEvent) => {
    if (asChild) {
      restProps.onLabelClick?.(e);
    }
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      htmlFor: `checkbox-${id}`,
      checked,
      onClick: handleClick,
    });
  }
  return (
    <label htmlFor={`checkbox-${id}`} className={restProps.className}>
      {children}
    </label>
  );
}

const CheckBox = Object.assign(CheckBoxRoot, {
  Indicator: CheckBoxIndicator,
  Label: CheckBoxLabel,
});

export default CheckBox;
