import { createContext, useEffect, useState } from "react";
import Site from "./Pages/Site/Site";
import SignUpLogIn from "./Pages/SignUpLogIn/SignUpLogIn";
import Account from "./Pages/Account/Account";

const MyContext = createContext();

function ContextProvider({
  children,
  defaultTheme = "dark",
  defaultRoute = "Home",
  forceMobile = false,
  accent = "#3ee6a5",
  defaultLoggedIn = false,
}) {
  const [isMobile, setIsMobile] = useState(true && forceMobile);

  useEffect(() => {
    const handleResize = () => {
      if (forceMobile) {
        setIsMobile(true);
        return;
      }
      setIsMobile(window.innerWidth < 850);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [route, setRoute] = useState(defaultRoute);

  const pageStore = {
    Home: <Site />,
    "Log In / Sign Up": <SignUpLogIn />,
  };

  const loggedInPageStore = {
    Account: <Account />,
  };

  const logoColours = {
    accent,
    support: "#d2d2d2",
    onAccentText: "#474747",
  };

  const themes = {
    dark: {
      ...logoColours,
      primary: "#474747",
      secondary: "#333333",
      pText: "#eeeeee",
      sText: "#bbbbbb",
    },
    light: {
      ...logoColours,
      primary: "#eeeeee",
      secondary: "#f2f2f2",
      pText: "#474747",
      sText: "#bbbbbb",
    },
  };

  const [themeName, setThemeName] = useState(defaultTheme);

  const theme = themes[themeName];

  useEffect(() => {
    setThemeName(defaultTheme);
    setRoute(defaultRoute);
    setIsMobile(true && forceMobile);
    setLoggedIn(defaultLoggedIn);
  }, [defaultRoute, defaultTheme, forceMobile, accent, defaultLoggedIn]);

  const [payTransfer, setPayTransfer] = useState(false);

  return (
    <MyContext.Provider
      value={{
        pageStore,
        route,
        setRoute,
        isMobile,
        theme,
        logoColours,
        loggedInPageStore,
        loggedIn,
        setLoggedIn,
        setThemeName,
        themeName,
        payTransfer,
        setPayTransfer,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { ContextProvider };
export default MyContext;
