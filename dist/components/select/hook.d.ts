import { Context } from "react";
export declare const useContextScope: <T>(context: Context<T>) => T;
export declare const useSelect: <T>(defaultOpen?: boolean) => {
    selectedOption: T | null;
    selectOption: (option: T) => void;
    isSelecBoxOpen: boolean;
    toggleBoxOpen: () => void;
};
