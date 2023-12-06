import { ReactElement } from "react";

type PropsWithAsChildType = {
  asChild: true;
  children: ReactElement;
};

type PropsWhithoutAsChildType = {
  asChild?: false;
  children?: ReactElement | ReactElement[] | undefined;
};

export type DefaultProps = PropsWithAsChildType | PropsWhithoutAsChildType;
