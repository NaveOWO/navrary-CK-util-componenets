import { createContext } from "react";
import { SelectContextType } from "./select.type";

export const SelectContext = createContext<SelectContextType>({
  isSelecBoxOpen: false,
  toggleBoxOpen: () => {},
  selectedId: null,
  selectOption: (_id: number) => {},
});
