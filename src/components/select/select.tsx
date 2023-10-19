import React, {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useEffect,
} from "react";
import {
  DescriptionProps,
  externalStateType,
  IndicatorProps,
  LabelProps,
  OptionGroupProps,
  OptionProps,
  SelectBoxProps,
  SelectContextType,
  TriggerProps,
  ValueProps,
} from "./select.type";

import styled from "styled-components";
import { useContextScope, useSelect } from "./hook";
import { combineStates, getCustomElement } from "./utils";
import { SelectContext } from "./context";

const DefaultLabel = styled.div`
  ${({ theme }) => theme.fonts.title_large}
`;

const DefaultDescription = styled.div`
  ${({ theme }) => theme.fonts.description5}
`;

const DefaultTrigger = styled.div`
  width: 2rem;
  height: 2rem;
`;

const DefaultIndicator = styled.div<{ isSelected: boolean }>`
  width: 0.2rem;
  height: 0.2rem;
`;

const DefaultOptionGroup = styled.div`
  width: 2rem;
`;

const DefaultOption = styled.div<{ isSelected: boolean }>`
  width: 8rem;
  height: 2rem;
`;

// select컴포넌트가 context를 공유할 수 있게 하는 provider컴포넌트
const SelectBox = (
  props: PropsWithChildren<SelectBoxProps<externalStateType>>
) => {
  const { children, defaultOpen, externalSelectState } = props;
  const {
    selectedOption: selectedId,
    selectOption: innerSelectState,
    isSelecBoxOpen,
    toggleBoxOpen,
  } = useSelect<number>(defaultOpen);
  const selectOption = combineStates(externalSelectState, innerSelectState);

  return (
    <SelectContext.Provider
      value={{ isSelecBoxOpen, toggleBoxOpen, selectedId, selectOption }}
    >
      {children}
    </SelectContext.Provider>
  );
};

// select컴포넌트의 라벨
const Label = (props: PropsWithChildren<LabelProps>) => {
  const { asChild = false, children, ...restProps } = props;

  if (asChild) {
    return getCustomElement(children as ReactElement, { ...restProps });
  }
  return <DefaultLabel>{children}</DefaultLabel>;
};

// select컴포넌트에 대한 설명
const Description = (props: PropsWithChildren<DescriptionProps>) => {
  const { asChild = false, children, ...restProps } = props;

  if (asChild) {
    return getCustomElement(children as ReactElement, { ...restProps });
  }
  return <DefaultDescription>{children}</DefaultDescription>;
};

// 클릭하면 selectBox를 보여줄 수 있는 trigger 버튼
const Trigger = (props: PropsWithChildren<TriggerProps>) => {
  const { asChild = false, children, ...restProps } = props;
  const { toggleBoxOpen } = useContextScope<SelectContextType>(SelectContext);

  if (asChild) {
    return getCustomElement(children as ReactElement, {
      ...restProps,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        toggleBoxOpen();
      },
    });
  }
  return (
    <DefaultTrigger
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        toggleBoxOpen();
      }}
    >
      {children}
    </DefaultTrigger>
  );
};

const Value = (props: ValueProps) => {
  const { asChild = false, children, ...restProps } = props;
  console.log(restProps);
  const { selectedId } = useContextScope(SelectContext);
  return cloneElement(children({ selectedId }));
};

// Option들을 담는 컨테이너 컴포넌트
const OptionGroup = (props: PropsWithChildren<OptionGroupProps>) => {
  const { asChild = false, children, ...restProps } = props;
  const { isSelecBoxOpen } = useContextScope<SelectContextType>(SelectContext);

  if (asChild) {
    return isSelecBoxOpen
      ? getCustomElement(children as ReactElement, { ...restProps })
      : null;
  }
  return isSelecBoxOpen ? (
    <DefaultOptionGroup>{children}</DefaultOptionGroup>
  ) : null;
};

// Option이 선택되었는지 나타내는 indicator
const Indicator = (props: PropsWithChildren<IndicatorProps>) => {
  const { asChild = false, children, ...restProps } = props;
  const { selectedId } = useContextScope<SelectContextType>(SelectContext);
  const isSelected = restProps.id === selectedId;

  if (asChild) {
    return getCustomElement(children as ReactElement, {
      ...restProps,
      isSelected,
    });
  }
  return (
    <DefaultIndicator isSelected={isSelected}>{children}</DefaultIndicator>
  );
};

// select의 각 Option
const Option = (props: PropsWithChildren<OptionProps>) => {
  const { asChild = false, children, ...restProps } = props;
  const { selectOption, selectedId, toggleBoxOpen } =
    useContextScope<SelectContextType>(SelectContext);
  const isSelected = restProps.id === selectedId;

  useEffect(() => {
    if (restProps.defaultSelected) {
      selectOption(restProps.id);
    }
  }, []);

  if (asChild) {
    return getCustomElement(children as ReactElement, {
      ...restProps,
      isSelected,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        selectOption(restProps.id);
        if (!restProps.defaultOpen) {
          toggleBoxOpen();
        }
      },
    });
  }
  return (
    <DefaultOption
      isSelected={isSelected}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        selectOption(restProps.id);
      }}
    >
      {children}
    </DefaultOption>
  );
};

const Select = Object.assign(SelectBox, {
  Label,
  Description,
  Trigger,
  Value,
  OptionGroup,
  Indicator,
  Option,
});

export default Select;
