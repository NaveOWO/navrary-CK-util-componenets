import { createContext } from "react";
export var SelectContext = createContext({
    isSelecBoxOpen: false,
    toggleBoxOpen: function () { },
    selectedId: null,
    selectOption: function (_id) { },
});
