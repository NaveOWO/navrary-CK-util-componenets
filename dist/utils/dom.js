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
import { Children, cloneElement, isValidElement, } from "react";
var getValidChild = function (children) {
    return Children.only(children);
};
var validateCustomChildren = function (children) {
    return isValidElement(children);
};
export var getCustomElement = function (children, props, innerChild) {
    if (validateCustomChildren(children)) {
        return innerChild
            ? cloneElement(getValidChild(children), props, innerChild)
            : cloneElement(getValidChild(children), props);
    }
    throw Error("Invalid React Element!");
};
export var getNarrowTypedProps = function (props) {
    if (props.asChild) {
        return __assign(__assign({}, props), { asChild: true, children: props.children });
    }
    return __assign(__assign({}, props), { asChild: false });
};
