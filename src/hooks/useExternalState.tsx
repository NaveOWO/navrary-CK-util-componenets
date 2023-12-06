import { useState } from "react";

type ExternalStateType<T> = {
  prop?: T;
  defaultProp?: T;
  handler?: (state: T) => void;
};

export function useExternalState<T>({
  prop,
  defaultProp,
  handler,
}: ExternalStateType<T>) {
  const [innerState, setInnerState] = useState<T | undefined>(defaultProp);
  const isControlledByExternal = prop !== undefined;
  const value = isControlledByExternal ? prop : innerState;

  const setValue = (handledValue: T | ((prevState?: T) => T)) => {
    if (isControlledByExternal) {
      const setter = handledValue as (prevState?: T) => T;
      const value =
        typeof handledValue === "function" ? setter(prop) : handledValue;
      handler?.(value as T);
    } else {
      setInnerState(handledValue);
    }
  };

  return [value, setValue] as const;
}
