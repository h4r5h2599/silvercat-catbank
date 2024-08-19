import { ContextProvider } from "../MyContext";
import App from "./App";

export default {
  title: "Complete App",
  component: App,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    route: {
      type: "select",
      options: ["Home", "Log In / Sign Up", "Account"],
      defaultValue: "Home",
    },
    forceMobile: {
      control: "boolean",
    },
    accentColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
};

const Template = ({ theme, route, forceMobile, accentColor, ...args }) => (
  <ContextProvider
    defaultTheme={theme}
    defaultRoute={route}
    forceMobile={forceMobile}
    defaultLoggedIn={route === "Account"}
    accent={accentColor}
  >
    <App {...args} />
  </ContextProvider>
);

export const CompleteApp = Template.bind({});
CompleteApp.args = {};
