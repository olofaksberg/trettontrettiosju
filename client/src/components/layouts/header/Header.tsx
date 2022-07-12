/** @format */

import { If } from "@/components/helpers";
import { useSmallScreen } from "@/components/helpers";

import "./header.style.scss";

export const Header = () => {
 const { isSmallScreen } = useSmallScreen();

 return (
  <header>
   <If condition={!isSmallScreen}>
    <h1>trettontrettio7</h1>
   </If>
   <If condition={isSmallScreen}>
    <h1>1337</h1>
   </If>
  </header>
 );
};
