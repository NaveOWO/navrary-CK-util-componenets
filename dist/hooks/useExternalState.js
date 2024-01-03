import { useState } from "react";
export function useExternalState(_a) {
    var prop = _a.prop, defaultProp = _a.defaultProp, handler = _a.handler;
    var _b = useState(defaultProp), innerState = _b[0], setInnerState = _b[1];
    var isControlledByExternal = prop !== undefined;
    var value = isControlledByExternal ? prop : innerState;
    var setValue = function (handledValue) {
        if (isControlledByExternal) {
            var setter = handledValue;
            var value_1 = typeof handledValue === "function" ? setter(prop) : handledValue;
            handler === null || handler === void 0 ? void 0 : handler(value_1);
        }
        else {
            setInnerState(handledValue);
        }
    };
    return [value, setValue];
}
