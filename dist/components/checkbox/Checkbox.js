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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "../../utils/createContext";
import { getNarrowTypedProps, getCustomElement } from "../../utils/dom";
import { useExternalState } from "../../hooks/useExternalState";
var checkboxDefaultValue = {
    checked: false,
    toggleCheckBox: function () { },
    id: null,
};
var _a = createContext({
    defaultValue: checkboxDefaultValue,
    contextName: "CheckBox",
}), CheckBoxProvider = _a.CheckBoxProvider, CheckBoxUseContext = _a.CheckBoxUseContext;
function CheckBoxRoot(props) {
    var children = props.children, externalCheck = props.externalCheck, _a = props.defaultCheck, defaultCheck = _a === void 0 ? false : _a, onCheckChange = props.onCheckChange, id = props.id;
    var _b = useExternalState({
        prop: externalCheck,
        defaultProp: defaultCheck,
        handler: onCheckChange,
    }), _c = _b[0], checked = _c === void 0 ? false : _c, setChecked = _b[1];
    var toggleCheckBox = function () {
        console.log(checked);
        checked ? setChecked(false) : setChecked(true);
    };
    return (_jsx(CheckBoxProvider, __assign({ contextValues: { checked: checked, toggleCheckBox: toggleCheckBox, id: id } }, { children: children })));
}
function CheckBoxIndicator(props) {
    var _a = getNarrowTypedProps(props), children = _a.children, asChild = _a.asChild, restProps = __rest(_a, ["children", "asChild"]);
    var _b = CheckBoxUseContext(), checked = _b.checked, toggleCheckBox = _b.toggleCheckBox, id = _b.id;
    var handleClick = function (e) {
        var _a;
        if (asChild) {
            (_a = restProps.onIndicatorClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
        toggleCheckBox();
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            checked: checked,
            onClick: handleClick,
            type: "checkbox",
            id: id,
        });
    }
    return (_jsx("input", __assign({ type: "checkbox", id: "checkbox-".concat(id), onClick: toggleCheckBox, checked: checked, className: restProps.className }, { children: children })));
}
function CheckBoxLabel(props) {
    var _a = getNarrowTypedProps(props), children = _a.children, asChild = _a.asChild, restProps = __rest(_a, ["children", "asChild"]);
    var _b = CheckBoxUseContext(), checked = _b.checked, id = _b.id;
    var handleClick = function (e) {
        var _a;
        if (asChild) {
            (_a = restProps.onLabelClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            htmlFor: "checkbox-".concat(id),
            checked: checked,
            onClick: handleClick,
        });
    }
    return (_jsx("label", __assign({ htmlFor: "checkbox-".concat(id), className: restProps.className }, { children: children })));
}
var CheckBox = Object.assign(CheckBoxRoot, {
    Indicator: CheckBoxIndicator,
    Label: CheckBoxLabel,
});
export default CheckBox;
