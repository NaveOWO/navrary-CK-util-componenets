import React from "react";
import { createContext } from "../../utils/createContext";
import { useExternalState } from "../../hooks/useExternalState";
import { getCustomElement, getNarrowTypedProps } from "../../utils/dom";
import {
  SelecOptionProps,
  SelectDefaultValuesType,
  SelectOptionGroupProps,
  SelectRootProps,
  SelectTriggerProps,
  SelectValueProps,
} from "./select.type";

const selectDefaultValues: SelectDefaultValuesType = {
  select: (option: any) => {},
  selectedOption: null,
  open: false,
  toggleSelectBox: () => {},
};

const { SelectProvider, SelectUseContext } =
  createContext<SelectDefaultValuesType>({
    defaultValue: selectDefaultValues,
    contextName: "Select",
  });

function SelectRoot(props: SelectRootProps) {
  const {
    children,
    externalSelectedOption,
    defalutSelected,
    onSelectChange,
    externalOpen,
    defaultOpen,
    onOpenChange,
  } = props;
  const [selectedOption = null, setSelectedOption] = useExternalState<
    SelectRootProps["externalSelectedOption"]
  >({
    prop: externalSelectedOption,
    defaultProp: defalutSelected,
    handler: onSelectChange,
  });
  const [open = false, setOpen] = useExternalState<
    SelectRootProps["externalOpen"]
  >({
    prop: externalOpen,
    defaultProp: defaultOpen,
    handler: onOpenChange,
  });

  const toggleSelectBox = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const select = (option: SelectRootProps["externalSelectedOption"]) => {
    setSelectedOption(option);
  };

  return (
    <SelectProvider
      contextValues={{ selectedOption, select, toggleSelectBox, open }}
    >
      {children}
    </SelectProvider>
  );
}

function SelectTrigger(props: SelectTriggerProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { toggleSelectBox } = SelectUseContext();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (asChild) {
      restProps.onTriggerClick?.(e);
    }
    toggleSelectBox();
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      onClick: handleClick,
    });
  }

  return (
    <button onClick={toggleSelectBox} className={restProps.className}>
      {children}
    </button>
  );
}

function SelectOptionGroup(props: SelectOptionGroupProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { open } = SelectUseContext();

  if (asChild) {
    return open
      ? getCustomElement(children, {
          className: restProps.className,
        })
      : null;
  }

  return open ? <ul className={restProps.className}>{children}</ul> : null;
}

function SelectOption(props: SelecOptionProps) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { selectedOption, select } = SelectUseContext();
  const isSelected = restProps.id === selectedOption;

  const handleSelect = (e: MouseEvent) => {
    restProps.onOptionClick?.(e);
    select(restProps.id);
  };

  if (asChild) {
    return getCustomElement(children, {
      className: restProps.className,
      onClick: handleSelect,
      isSelected: isSelected,
    });
  }
  return (
    <li onClick={() => select(restProps.id)} className={restProps.className}>
      {children}
    </li>
  );
}

function SelectValue<T extends string = string>(props: SelectValueProps<T>) {
  const { asChild, children, ...restProps } = getNarrowTypedProps(props);
  const { selectedOption } = SelectUseContext();

  const selectedValue =
    selectedOption === null
      ? restProps.defautlValue
      : restProps.options[selectedOption];

  if (asChild) {
    return getCustomElement(
      children,
      {
        className: restProps.className,
      },
      selectedValue
    );
  }
  return <>{selectedValue}</>;
}

const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  OptionGroup: SelectOptionGroup,
  Option: SelectOption,
  Value: SelectValue,
});

export default Select;
