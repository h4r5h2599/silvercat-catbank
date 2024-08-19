import TopBar from "./TopBar";
import { ContextProvider } from "../MyContext";

export default {
  title: "Functional Components/TopBar",
  component: TopBar,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    forceMobile: {
      control: "boolean",
    },
    accentColor: {
      control: "color",
    },
    loggedIn: {
      control: "boolean",
    },
    additionalTabs: {
      control: "array",
      description: "Array of strings representing the options in the top bar",
    },
  },
  tags: ["autodocs"],
};

const Template = ({ theme, forceMobile, accentColor, loggedIn, ...args }) => (
  <ContextProvider
    defaultTheme={theme}
    defaultRoute={loggedIn ? "Account" : "Home"}
    forceMobile={forceMobile}
    defaultLoggedIn={loggedIn}
    accent={accentColor}
  >
    <TopBar {...args} />
  </ContextProvider>
);

export const Bar = Template.bind({});
Bar.args = {
  additionalTabs: [],
};
