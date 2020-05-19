import React from "react";

export const defaultPage = "Home";
export const defaultLocation = "About Me";
export const defaultIsNavBarLarge = true;
export const defaultIsDarkMode = true;
export const defaultIsMobile = false;

export const PageContext = React.createContext({
    page: defaultPage, setPage: (page: string) => {
    }
});
export const LocationContext = React.createContext(defaultLocation);
export const NavContext = React.createContext({isMobile: defaultIsMobile, isNavBarLarge: defaultIsNavBarLarge});
export const DarkModeContext = React.createContext(defaultIsDarkMode);