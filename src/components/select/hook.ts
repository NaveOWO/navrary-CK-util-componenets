import { Context, useContext, useState } from "react";

export const useContextScope = <T>(context: Context<T>): T => {
  const contextValue = useContext(context);

  if (!context) throw new Error("Invalid Scope Context!");

  return contextValue;
};

export const useSelect = <T>(defaultOpen?: boolean) => {
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const [isSelecBoxOpen, setIsSelecBoxOpen] = useState(defaultOpen ?? false);

  const toggleBoxOpen = () => {
    setIsSelecBoxOpen((prevIsOpen) => !prevIsOpen);
  };

  const selectOption = (option: T) => {
    setSelectedOption(option);
  };

  return { selectedOption, selectOption, isSelecBoxOpen, toggleBoxOpen };
};
