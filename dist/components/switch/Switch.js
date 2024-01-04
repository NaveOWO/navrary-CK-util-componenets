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
import { useExternalState } from "../../hooks/useExternalState";
import { getNarrowTypedProps, getCustomElement } from "../../utils/dom";
var switcheDefaultValue = {
    mode: "off",
    toggleMode: function () { },
};
var _a = createContext({
    defaultValue: switcheDefaultValue,
    contextName: "Switch",
}), SwitchProvider = _a.SwitchProvider, SwitchUseContext = _a.SwitchUseContext;
function SwitchRoot(props) {
    var children = props.children, externalMode = props.externalMode, defaultMode = props.defaultMode, onModeChange = props.onModeChange;
    var _a = useExternalState({
        prop: externalMode,
        defaultProp: defaultMode,
        handler: onModeChange,
    }), _b = _a[0], mode = _b === void 0 ? "off" : _b, setMode = _a[1];
    var toggleMode = function () {
        mode === "off" ? setMode("on") : setMode("off");
    };
    return (_jsx(SwitchProvider, __assign({ contextValues: { mode: mode, toggleMode: toggleMode } }, { children: children })));
}
function SwitchThumb(props) {
    var _a = getNarrowTypedProps(props), children = _a.children, asChild = _a.asChild, restProps = __rest(_a, ["children", "asChild"]);
    var _b = SwitchUseContext(), mode = _b.mode, toggleMode = _b.toggleMode;
    var handleClick = function (e) {
        var _a;
        if (asChild) {
            (_a = restProps.onThumbClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
        toggleMode();
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            mode: mode,
            onClick: handleClick,
        });
    }
    return (_jsx("div", __assign({ onClick: toggleMode, className: restProps.className }, { children: children })));
}
function SwitchBox(props) {
    var _a = getNarrowTypedProps(props), children = _a.children, asChild = _a.asChild, restProps = __rest(_a, ["children", "asChild"]);
    var _b = SwitchUseContext(), mode = _b.mode, toggleMode = _b.toggleMode;
    var handleClick = function (e) {
        var _a;
        if (asChild && restProps.clickable) {
            (_a = restProps.onBoxClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
            toggleMode();
        }
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            mode: mode,
            onClick: restProps.clickable ? handleClick : undefined,
        });
    }
    return _jsx("div", __assign({ className: restProps.className }, { children: children }));
}
var Switch = Object.assign(SwitchRoot, {
    Thumb: SwitchThumb,
    Box: SwitchBox,
});
export default Switch;
