import { Children, cloneElement, isValidElement, } from "react";
export var combineStates = function (externalState, innerState) {
    return function (params) {
        externalState === null || externalState === void 0 ? void 0 : externalState(params);
        innerState === null || innerState === void 0 ? void 0 : innerState(params);
    };
};
var getValidChild = function (children) {
    return Children.only(children);
};
var validateCustomChildren = function (children) {
    return isValidElement(children);
};
export var getCustomElement = function (children, props) {
    if (validateCustomChildren(children)) {
        return cloneElement(getValidChild(children), props);
    }
    throw Error("Invalid React Element!");
};
