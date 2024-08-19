import { ContextProvider } from "../../MyContext";
import SiteComp from "./Site";

export default {
  title: "Pages/Website",
  component: SiteComp,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
};

const Template = ({ theme, accentColor, ...args }) => (
  <ContextProvider
    defaultTheme={theme}
    defaultRoute={"Home"}
    forceMobile={false}
    defaultLoggedIn={false}
    accent={accentColor}
  >
    <SiteComp {...args} />
  </ContextProvider>
);

export const MainWebsite = Template.bind({});
MainWebsite.args = {
  theme: "dark",
};
