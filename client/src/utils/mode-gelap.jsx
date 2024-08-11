import { createContext } from "react";

export const ModeGelap = createContext(null);

export const ModeGelapProvider = ({ children }) => {
  return <ModeGelap.Provider value="dark">{children}</ModeGelap.Provider>;
};