import { ContextProvider } from "../../../../MyContext";
import HeroStory from "./Hero";

export default {
  title: "Pages/Website/Strips/Hero",
  component: HeroStory,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
    },
    signUp: {
      control: "boolean",
    },
    dir: {
      type: "select",
      options: ["row", "column"],
      defaultValue: "column",
    },
    align: {
      type: "select",
      options: ["center", "left", "right"],
      defaultValue: "left",
    },
    isMobile: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

const Template = ({ theme, accentColor, isMobile, ...args }) => (
  <ContextProvider
    defaultTheme={theme}
    defaultRoute={"Home"}
    forceMobile={isMobile}
    defaultLoggedIn={false}
    accent={accentColor}
  >
    <HeroStory {...args} />
  </ContextProvider>
);

export const MainSite = Template.bind({});
MainSite.args = {
  theme: "dark",
  signUp: true,
  dir: "row",
  align: "left",
};

export const SignUp = Template.bind({});
SignUp.args = {
  signUp: false,
  dir: "column",
  align: "center",
};
