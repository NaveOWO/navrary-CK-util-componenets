import {
  Attributes,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { DefaultProps } from "../components/common/type";

const getValidChild = (children: ReactElement) => {
  return Children.only(children);
};

const validateCustomChildren = (children: ReactElement) => {
  return isValidElement(children);
};

export const getCustomElement = <P extends Partial<P> & Attributes>(
  children: ReactElement,
  props: P,
  innerChild?: ReactNode
) => {
  if (validateCustomChildren(children)) {
    return innerChild
      ? cloneElement(getValidChild(children), props, innerChild)
      : cloneElement(getValidChild(children), props);
  }
  throw Error("Invalid React Element!");
};

export const getNarrowTypedProps = <T extends DefaultProps>(props: T) => {
  if (props.asChild) {
    return {
      ...props,
      asChild: true,
      children: props.children as ReactElement,
    };
  }

  return { ...props, asChild: false };
};
