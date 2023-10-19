import { useContext, useState } from "react";
export var useContextScope = function (context) {
    var contextValue = useContext(context);
    if (!context)
        throw new Error("Invalid Scope Context!");
    return contextValue;
};
export var useSelect = function (defaultOpen) {
    var _a = useState(null), selectedOption = _a[0], setSelectedOption = _a[1];
    var _b = useState(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false), isSelecBoxOpen = _b[0], setIsSelecBoxOpen = _b[1];
    var toggleBoxOpen = function () {
        setIsSelecBoxOpen(function (prevIsOpen) { return !prevIsOpen; });
    };
    var selectOption = function (option) {
        setSelectedOption(option);
    };
    return { selectedOption: selectedOption, selectOption: selectOption, isSelecBoxOpen: isSelecBoxOpen, toggleBoxOpen: toggleBoxOpen };
};
