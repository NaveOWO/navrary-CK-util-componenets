import { DefaultProps } from "../common/type";

export type CheckBoxContextType = {
  checked: boolean;
  toggleCheckBox: () => void;
  id: string | null;
};

export type CheckBoxRootProps = DefaultProps & {
  id: string;
  externalCheck?: boolean;
  defaultCheck?: boolean;
  onCheckChange?: (state?: boolean) => void;
};

export type CheckBoxIndicatorProps = DefaultProps & {
  className?: string;
  onIndicatorClick?: (e: MouseEvent) => void;
};

export type CheckBoxLabelProps = DefaultProps & {
  className?: string;
  onLabelClick?: (e: MouseEvent) => void;
};
