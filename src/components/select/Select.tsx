import React from "react";
import { createContext } from "../../utils/createContext";
import { DefaultProps } from "../common/type";
import { useExternalState } from "../../hooks/useExternalState";
import { getCustomElement, getNarrowTypedProps } from "../../utils/dom";

type SelectDefaultValuesType = {
  select: (option: number) => void;
  selectedOption: number | null;
  open: boolean;
  toggleSelectBox: () => void;
};

type SelectRootProps = {
  externalSelectedOption?: number | null;
  defalutSelected?: number;
  onSelectChange?: (state?: number | null) => void;
  externalOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (state: boolean | undefined) => void;
} & DefaultProps;

type SelectTriggerProps = DefaultProps & {
  className?: string;
  onTriggerClick?: (e: MouseEvent) => void;
};

type SelectOptionGroupProps = DefaultProps & {
  className?: string;
};

type SelecOptionProps = DefaultProps & {
  className?: string;
  onOptionClick?: (e: MouseEvent) => void;
  id: number;
};

type SelectValueProps<T> = DefaultProps & {
  className?: string;
  options: Record<number, T>;
  defautlValue?: T;
};

const selectDefaultValues: SelectDefaultValuesType = {
  select: (option: number) => {},
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

  const select = (option: number) => {
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
