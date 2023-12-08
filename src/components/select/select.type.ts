import { DefaultProps } from "../common/type";

export type SelectDefaultValuesType = {
  select: (option: number) => void;
  selectedOption: number | null;
  open: boolean;
  toggleSelectBox: () => void;
};

export type SelectRootProps = {
  externalSelectedOption?: number | null;
  defalutSelected?: number;
  onSelectChange?: (state?: number | null) => void;
  externalOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (state: boolean | undefined) => void;
} & DefaultProps;

export type SelectTriggerProps = DefaultProps & {
  className?: string;
  onTriggerClick?: (e: MouseEvent) => void;
};

export type SelectOptionGroupProps = DefaultProps & {
  className?: string;
};

export type SelecOptionProps = DefaultProps & {
  className?: string;
  onOptionClick?: (e: MouseEvent) => void;
  id: number;
};

export type SelectValueProps<T> = DefaultProps & {
  className?: string;
  options: Record<number, T>;
  defautlValue?: T;
};
