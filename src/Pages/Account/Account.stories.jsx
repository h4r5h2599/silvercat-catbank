import { ContextProvider } from "../../MyContext";
import AccountStory from "./Account";

export default {
  title: "Pages/Account",
  component: AccountStory,
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
    <AccountStory {...args} />
  </ContextProvider>
);

export const Your_Account = Template.bind({});
Your_Account.args = {
  theme: "dark",
};
