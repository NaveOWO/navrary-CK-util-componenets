import { DefaultProps } from "../common/type";

export type SelectDefaultValuesType = {
  select: (option: any) => void;
  selectedOption: any;
  open: boolean;
  toggleSelectBox: () => void;
};

export type SelectRootProps = {
  externalSelectedOption?: any;
  defalutSelected?: any;
  onSelectChange?: (state?: any) => void;
  externalOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (state?: boolean) => void;
} & DefaultProps;

export type SelectTriggerProps = DefaultProps & {
  className?: string;
  onTriggerClick?: (e: MouseEvent) => void;
};

export type SelectOptionGroupProps = DefaultProps & {
  className?: string;
};

export type SelecOptionProps<T extends number | string> = DefaultProps & {
  className?: string;
  onOptionClick?: (e: MouseEvent) => void;
  id: T;
};

export type SelectValueProps<T> = DefaultProps & {
  className?: string;
  options: Record<number, T>;
  defautlValue?: T;
};
