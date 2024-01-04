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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export function createContext(props) {
    var _a;
    var defaultValue = props.defaultValue, contextName = props.contextName, children = props.children;
    var Context = React.createContext(defaultValue);
    function Provider(props) {
        var contextValues = props.contextValues, children = props.children;
        return (_jsx(Context.Provider, __assign({ value: contextValues }, { children: children })));
    }
    Context.displayName = contextName;
    function useContext() {
        var value = React.useContext(Context);
        if (!value) {
            throw Error("This function can only be used within ".concat(contextName, "context."));
        }
        return value;
    }
    return _a = {},
        _a["".concat(contextName, "Provider")] = Provider,
        _a["".concat(contextName, "UseContext")] = useContext,
        _a;
}
