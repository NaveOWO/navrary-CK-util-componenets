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
import { useEffect } from "react";
import { createContext } from "../../utils/createContext";
import { useExternalState } from "../../hooks/useExternalState";
import { getCustomElement, getNarrowTypedProps } from "../../utils/dom";
var dialogDefalutValues = {
    open: false,
    toggleDialog: function () { },
    openDialog: function () { },
    closeDialog: function () { },
};
var _a = createContext({
    defaultValue: dialogDefalutValues,
    contextName: "Dialog",
}), DialogProvider = _a.DialogProvider, DialogUseContext = _a.DialogUseContext;
function DialogRoot(props) {
    var children = props.children, externalOpen = props.externalOpen, onOpenChange = props.onOpenChange, _a = props.defaultOpen, defaultOpen = _a === void 0 ? false : _a;
    var _b = useExternalState({
        prop: externalOpen,
        defaultProp: defaultOpen,
        handler: onOpenChange,
    }), _c = _b[0], open = _c === void 0 ? false : _c, setOpen = _b[1];
    var toggleDialog = function () {
        open ? setOpen(false) : setOpen(true);
    };
    var openDialog = function () {
        setOpen(true);
    };
    var closeDialog = function () {
        setOpen(false);
    };
    return (_jsx(DialogProvider, __assign({ contextValues: { open: open, toggleDialog: toggleDialog, openDialog: openDialog, closeDialog: closeDialog } }, { children: children })));
}
function DialogTrigger(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var toggleDialog = DialogUseContext().toggleDialog;
    var handleClick = function (e) {
        var _a;
        if (asChild) {
            (_a = restProps.onTriggerClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
        toggleDialog();
    };
    if (asChild) {
        return getCustomElement(children, {
            className: restProps.className,
            onClick: handleClick,
        });
    }
    return (_jsx("button", __assign({ onClick: toggleDialog, className: restProps.className }, { children: children })));
}
function DialogBackDrop(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var _b = DialogUseContext(), open = _b.open, closeDialog = _b.closeDialog;
    useEffect(function () {
        var _a;
        (_a = document
            .getElementById("navrary-dialog-backdrop")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", closeDialog);
        return function () {
            window.removeEventListener("click", closeDialog);
        };
    });
    var handleClick = function (e) {
        var _a;
        (_a = restProps.onBackDropClick) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        closeDialog();
    };
    if (asChild) {
        return open
            ? getCustomElement(children, {
                className: restProps.className,
                onClick: handleClick,
                id: "navrary-dialog-backdrop",
            })
            : null;
    }
    return (_jsx("button", __assign({ id: "navrary-dialog-backdrop", onClick: closeDialog, className: restProps.className }, { children: children })));
}
function DialogContent(props) {
    var _a = getNarrowTypedProps(props), asChild = _a.asChild, children = _a.children, restProps = __rest(_a, ["asChild", "children"]);
    var _b = DialogUseContext(), open = _b.open, closeDialog = _b.closeDialog;
    var closeWithEscapeKey = function (e) {
        if (!restProps.closeOnEsc || e.key !== "Escape")
            return;
        closeDialog();
    };
    useEffect(function () {
        window.addEventListener("keydown", closeWithEscapeKey);
        return function () {
            window.removeEventListener("keydown", closeWithEscapeKey);
        };
    });
    if (asChild) {
        return open
            ? getCustomElement(children, {
                className: restProps.className,
            })
            : null;
    }
    return open ? (_jsx("article", __assign({ className: restProps.className }, { children: children }))) : null;
}
var Dialog = Object.assign(DialogRoot, {
    Trigger: DialogTrigger,
    BackDrop: DialogBackDrop,
    Content: DialogContent,
});
export default Dialog;
