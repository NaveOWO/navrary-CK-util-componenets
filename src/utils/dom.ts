import {
  Attributes,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
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
  props: P
) => {
  if (validateCustomChildren(children)) {
    return cloneElement(getValidChild(children), props);
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
