var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { cloneElement, useEffect, } from "react";
import styled from "styled-components";
import { useContextScope, useSelect } from "./hook";
import { combineStates, getCustomElement } from "./utils";
import { SelectContext } from "./context";
var DefaultLabel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.title_large;
});
var DefaultDescription = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fonts.description5;
});
var DefaultTrigger = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 2rem;\n  height: 2rem;\n"], ["\n  width: 2rem;\n  height: 2rem;\n"])));
var DefaultIndicator = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 0.2rem;\n  height: 0.2rem;\n"], ["\n  width: 0.2rem;\n  height: 0.2rem;\n"])));
var DefaultOptionGroup = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 2rem;\n"], ["\n  width: 2rem;\n"])));
var DefaultOption = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 8rem;\n  height: 2rem;\n"], ["\n  width: 8rem;\n  height: 2rem;\n"])));
// select컴포넌트가 context를 공유할 수 있게 하는 provider컴포넌트
var SelectBox = function (props) {
    var children = props.children, defaultOpen = props.defaultOpen, externalSelectState = props.externalSelectState;
    var _a = useSelect(defaultOpen), selectedId = _a.selectedOption, innerSelectState = _a.selectOption, isSelecBoxOpen = _a.isSelecBoxOpen, toggleBoxOpen = _a.toggleBoxOpen;
    var selectOption = combineStates(externalSelectState, innerSelectState);
    return (_jsx(SelectContext.Provider, __assign({ value: { isSelecBoxOpen: isSelecBoxOpen, toggleBoxOpen: toggleBoxOpen, selectedId: selectedId, selectOption: selectOption } }, { children: children })));
};
// select컴포넌트의 라벨
var Label = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    if (asChild) {
        return getCustomElement(children, __assign({}, restProps));
    }
    return _jsx(DefaultLabel, { children: children });
};
// select컴포넌트에 대한 설명
var Description = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    if (asChild) {
        return getCustomElement(children, __assign({}, restProps));
    }
    return _jsx(DefaultDescription, { children: children });
};
// 클릭하면 selectBox를 보여줄 수 있는 trigger 버튼
var Trigger = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    var toggleBoxOpen = useContextScope(SelectContext).toggleBoxOpen;
    if (asChild) {
        return getCustomElement(children, __assign(__assign({}, restProps), { onClick: function (e) {
                e.preventDefault();
                toggleBoxOpen();
            } }));
    }
    return (_jsx(DefaultTrigger, __assign({ onClick: function (e) {
            e.preventDefault();
            toggleBoxOpen();
        } }, { children: children })));
};
var Value = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    console.log(restProps);
    var selectedId = useContextScope(SelectContext).selectedId;
    return cloneElement(children({ selectedId: selectedId }));
};
// Option들을 담는 컨테이너 컴포넌트
var OptionGroup = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    var isSelecBoxOpen = useContextScope(SelectContext).isSelecBoxOpen;
    if (asChild) {
        return isSelecBoxOpen
            ? getCustomElement(children, __assign({}, restProps))
            : null;
    }
    return isSelecBoxOpen ? (_jsx(DefaultOptionGroup, { children: children })) : null;
};
// Option이 선택되었는지 나타내는 indicator
var Indicator = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    var selectedId = useContextScope(SelectContext).selectedId;
    var isSelected = restProps.id === selectedId;
    if (asChild) {
        return getCustomElement(children, __assign(__assign({}, restProps), { isSelected: isSelected }));
    }
    return (_jsx(DefaultIndicator, __assign({ isSelected: isSelected }, { children: children })));
};
// select의 각 Option
var Option = function (props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children, restProps = __rest(props, ["asChild", "children"]);
    var _b = useContextScope(SelectContext), selectOption = _b.selectOption, selectedId = _b.selectedId, toggleBoxOpen = _b.toggleBoxOpen;
    var isSelected = restProps.id === selectedId;
    useEffect(function () {
        if (restProps.defaultSelected) {
            selectOption(restProps.id);
        }
    }, []);
    if (asChild) {
        return getCustomElement(children, __assign(__assign({}, restProps), { isSelected: isSelected, onClick: function (e) {
                e.preventDefault();
                selectOption(restProps.id);
                if (!restProps.defaultOpen) {
                    toggleBoxOpen();
                }
            } }));
    }
    return (_jsx(DefaultOption, __assign({ isSelected: isSelected, onClick: function (e) {
            e.preventDefault();
            selectOption(restProps.id);
        } }, { children: children })));
};
var Select = Object.assign(SelectBox, {
    Label: Label,
    Description: Description,
    Trigger: Trigger,
    Value: Value,
    OptionGroup: OptionGroup,
    Indicator: Indicator,
    Option: Option,
});
export default Select;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
