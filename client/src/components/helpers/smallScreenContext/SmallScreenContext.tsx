/** @format */

import { createContext, useContext } from "react";

import { IsmallScreen } from "./smallScreenContext.types";

export const SmallScreenContext = createContext<IsmallScreen>({
 isSmallScreen: null,
});
export const useSmallScreen = () => useContext(SmallScreenContext);
