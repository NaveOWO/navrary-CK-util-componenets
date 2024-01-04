import * as React from "react";
type CreateContextProps<TDefaultValues = {}> = {
    defaultValue: TDefaultValues;
    contextName: string;
};
type ContextReturnType<TDefaultValues> = {
    [key in `${CreateContextProps<TDefaultValues>["contextName"]}Provider`]: ({ children, contextValues, }: React.PropsWithChildren<{
        contextValues: TDefaultValues;
    }>) => JSX.Element;
} & {
    [key in `${CreateContextProps<TDefaultValues>["contextName"]}UseContext`]: () => TDefaultValues;
};
export declare function createContext<TDefaultValues>(props: React.PropsWithChildren<CreateContextProps<TDefaultValues>>): ContextReturnType<TDefaultValues>;
export {};
