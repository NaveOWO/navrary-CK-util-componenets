import { DefaultProps } from "../common/type";

type ModeType = "on" | "off";

export type SwitchDefaultValueType = {
  mode: ModeType;
  toggleMode: () => void;
};

export type SwitchRootProps = DefaultProps & {
  externalMode?: ModeType;
  defaultMode?: ModeType;
  onModeChange?: (state?: ModeType) => void;
};

export type SwitchThumbProps = DefaultProps & {
  className?: string;
  onThumbClick?: (e: MouseEvent) => void;
};

export type SwitchBoxProps = DefaultProps &
  (
    | {
        className?: string;
        clickable: true;
        onBoxClick: (e: MouseEvent) => void;
      }
    | {
        className?: string;
        clickable?: false;
        onBoxClick: never;
      }
  );
