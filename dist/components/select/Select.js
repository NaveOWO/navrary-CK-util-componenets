var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext } from "../../utils/createContext";
import { useExternalState } from "../../hooks/useExternalState";
import { getCustomElement, getNarrowTypedProps } from "../../utils/dom";
var selectDefaultValues = {
    select: function (option) { },
    selectedOption: null,
    open: false,
    toggleSelectBox: function () { },
};
var _a = createContext({
    defaultValue: selectDefaultValues,
    contextName: "Select",
}), SelectProvider = _a.SelectProvider, SelectUseContext = _a.SelectUseContext;
function SelectRoot(props) {
    var children = props.children, externalSelectedOption = props.externalSelectedOption, defalutSelected = props.defalutSelected, onSelectChange = props.onSelectChange, externalOpen = props.externalOpen, defaultOpen = props.defaultOpen, onOpenChange = props.onOpenChange;
    var _a = useExternalState({
        prop: externalSelectedOption,
        defaultProp: defalutSelected,
        handler: onSelectChange,
    }), _b = _a[0], selectedOption = _b === void 0 ? null : _b, setSelectedOption = _a[1];
    var _c = useExternalState({
        prop: externalOpen,
        defaultProp: defaultOpen,
        handler: onOpenChange,
    }), _d = _c[0], open = _d === void 0 ? false : _d, setOpen = _c[1];
    var toggleSelectBox = function () {
        open ? setOpen(false) : setOpen(true);
    };
    var select = function (option) {
        setSelectedOption(option);
    };
    return (_jsx(SelectProvider, __assign({ contextValues: { selectedOption: selectedOption, select: select, toggleSelectBox: toggleSelectBox, open: open } }, { children: children })));
}
function SelectTrigger(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var toggleSelectBox = SelectUseContext().toggleSelectBox;
    var handleClick = function (e) {
        var _a;
        e.preventDefault();
        if (asChild) {
            (_a = restProps.onTriggerClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
        toggleSelectBox();
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            onClick: handleClick,
        });
    }
    return (_jsx("button", __assign({ onClick: toggleSelectBox, className: restProps.className }, { children: children })));
}
function SelectOptionGroup(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var open = SelectUseContext().open;
    if (asChild) {
        return open
            ? getCustomElement(children, {
                className: restProps.className,
            })
            : null;
    }
    return open ? _jsx("ul", __assign({ className: restProps.className }, { children: children })) : null;
}
function SelectOption(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var _b = SelectUseContext(), selectedOption = _b.selectedOption, select = _b.select;
    var isSelected = restProps.id === selectedOption;
    var handleSelect = function (e) {
        var _a;
        (_a = restProps.onOptionClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        select(restProps.id);
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            onClick: handleSelect,
            isSelected: isSelected,
        });
    }
    return (_jsx("li", __assign({ onClick: function () { return select(restProps.id); }, className: restProps.className }, { children: children })));
}
function SelectValue(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var selectedOption = SelectUseContext().selectedOption;
    var selectedValue = selectedOption === null
        ? restProps.defautlValue
        : restProps.options[selectedOption];
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
        }, selectedValue);
    }
    return _jsx(_Fragment, { children: selectedValue });
}
var Select = Object.assign(SelectRoot, {
    Trigger: SelectTrigger,
    OptionGroup: SelectOptionGroup,
    Option: SelectOption,
    Value: SelectValue,
});
export default Select;
