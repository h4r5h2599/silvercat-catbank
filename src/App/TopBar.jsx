import { useState } from "react";
import SilvercatLogo from "../Assets/SilvercatLogo";
import TopBarElement from "./TopBarElement";
import PropTypes from "prop-types";
import { MdOutlineMenu } from "react-icons/md";
import { Dialog } from "@mui/material";
import useMyContext from "../useMyContext";
import { hexToRgb } from "../util";

const TopBar = ({ additionalTabs = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    isMobile,
    pageStore,
    loggedInPageStore,
    loggedIn,
    setRoute,
    setLoggedIn,
    setThemeName,
    themeName,
    theme,
    setPayTransfer,
  } = useMyContext();

  const styles = {
    topBar: {
      width: "100%",
    },
    fade: {
      width: "100%",
      height: "10px",
      background: `linear-gradient(to bottom, rgba(${hexToRgb(theme.primary).r}, ${hexToRgb(theme.primary).g}, ${hexToRgb(theme.primary).b}, 1) 0%, rgba(0, 0, 0, 0) 100%)`,
    },
    bar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      width: "100%",
      backgroundColor: theme.primary,
    },
    options: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      alignItems: "center",
      flex: 1,
    },
    mobileMenuIcon: {
      padding: "10px",
      cursor: "pointer",
      color: theme.pText,
    },
    mobilePopUpBar: {
      padding: "20px",
      overflow: "scroll",
      maxHeight: "70vh",
      backgroundColor: theme.primary,
    },
  };

  const topBarElements = Object.keys(
    loggedIn ? loggedInPageStore : pageStore
  ).map((option) => {
    return (
      <TopBarElement
        key={option}
        option={option}
        click={
          isMobile
            ? () => {
                setMobileMenuOpen(false);
              }
            : () => {}
        }
      />
    );
  });

  const nonNavTopBarOptions = [
    {
      loggedIn: false,
      name: "About Silvercat",
      onClick: () => {},
    },
    {
      loggedIn: false,
      name: "Contact Us",
      onClick: () => {},
    },
    {
      loggedIn: true,
      name: "Switch Account",
      onClick: () => {},
    },
    {
      loggedIn: true,
      name: "My Profile",
      onClick: () => {},
    },
    {
      loggedIn: true,
      name: "Switch Theme",
      onClick: () => {
        setThemeName(themeName === "dark" ? "light" : "dark");
      },
    },
    {
      loggedIn: false,
      name: "Switch Theme",
      onClick: () => {
        setThemeName(themeName === "dark" ? "light" : "dark");
      },
    },
    {
      loggedIn: true,
      name: "Pay / Transfer",
      onClick: () => {
        setPayTransfer(true);
      },
    },
    {
      loggedIn: true,
      name: "Log Out",
      onClick: () => {
        setLoggedIn(false);
        setRoute("Home");
      },
    },
  ];

  const nonNavTopBarElements = nonNavTopBarOptions.map((option) => {
    if (loggedIn === option.loggedIn) {
      return (
        <TopBarElement
          key={option.name}
          option={option.name}
          click={option.onClick}
          pauseDefaultFunc={true}
        />
      );
    } else return null;
  });

  const storybookOptions = additionalTabs.map((option) => {
    return (
      <TopBarElement
        key={option}
        option={option}
        click={() => {}}
        pauseDefaultFunc={true}
      />
    );
  });

  return (
    <div style={styles.topBar}>
      <div style={styles.bar}>
        <SilvercatLogo size={50} />
        {isMobile ? (
          <div style={styles.mobileMenuIcon}>
            <MdOutlineMenu
              size={30}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
            <Dialog
              open={mobileMenuOpen}
              onClose={() => {
                setMobileMenuOpen(false);
              }}
            >
              <div style={styles.mobilePopUpBar}>
                {[
                  ...nonNavTopBarElements,
                  ...topBarElements,
                  ...storybookOptions,
                ]}
              </div>
            </Dialog>
          </div>
        ) : (
          <div style={styles.options}>
            {[...nonNavTopBarElements, ...topBarElements, ...storybookOptions]}
          </div>
        )}
      </div>
      <div style={styles.fade}></div>
    </div>
  );
};

export default TopBar;
