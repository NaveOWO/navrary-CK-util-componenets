import * as React from "react";

type CreateContextProps<TDefaultValues = {}> = {
  defaultValue: TDefaultValues;
  contextName: string;
};

type ContextReturnType<TDefaultValues> = {
  [key in `${CreateContextProps<TDefaultValues>["contextName"]}Provider`]: ({
    children,
    contextValues,
  }: React.PropsWithChildren<{ contextValues: TDefaultValues }>) => JSX.Element;
} & {
  [key in `${CreateContextProps<TDefaultValues>["contextName"]}UseContext`]: () => TDefaultValues;
};

export function createContext<TDefaultValues>(
  props: React.PropsWithChildren<CreateContextProps<TDefaultValues>>
) {
  const { defaultValue, contextName, children } = props;
  const Context = React.createContext<TDefaultValues>(defaultValue);

  function Provider(
    props: React.PropsWithChildren<{ contextValues: TDefaultValues }>
  ) {
    const { contextValues, children } = props;
    return (
      <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
  }

  Context.displayName = contextName;

  function useContext() {
    const value = React.useContext(Context);

    if (!value) {
      throw Error(
        `This function can only be used within ${contextName}context.`
      );
    }

    return value;
  }

  return {
    [`${contextName}Provider`]: Provider,
    [`${contextName}UseContext`]: useContext,
  } as ContextReturnType<TDefaultValues>;
}
