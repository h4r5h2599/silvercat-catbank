import { ContextProvider } from "../../../../MyContext";
import FooterStory from "./Footer";

export default {
  title: "Pages/Website/Strips/Footer",
  component: FooterStory,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
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
    <FooterStory {...args} />
  </ContextProvider>
);

export const Full_Screen = Template.bind({});
Full_Screen.args = {
  theme: "dark",
  isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
  theme: "dark",
  isMobile: true,
};
