/** @format */

import { IifProps } from "./if.types";

export const If = (props: IifProps) => {
 const { condition, children } = props;
 return <>{condition && children}</>;
};
