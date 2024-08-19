import { ContextProvider } from "../../MyContext";
import SignUpLogInStory from "./SignUpLogIn";

export default {
  title: "Pages/Log In and Sign Up",
  component: SignUpLogInStory,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
    },
    defaultType: {
      type: "select",
      options: ["Log In", "Sign Up"],
      defaultValue: "Log In",
    },
  },
  tags: ["autodocs"],
};

const Template = ({ theme, accentColor, ...args }) => (
  <ContextProvider
    defaultTheme={theme}
    defaultRoute={"Home"}
    forceMobile={true}
    defaultLoggedIn={false}
    accent={accentColor}
  >
    <SignUpLogInStory {...args} />
  </ContextProvider>
);

export const Sign_Up_Form = Template.bind({});
Sign_Up_Form.args = {
  theme: "dark",
  defaultType: "Sign Up",
};

export const Log_In_Form = Template.bind({});
Log_In_Form.args = {
  theme: "dark",
  defaultType: "Log In",
};
