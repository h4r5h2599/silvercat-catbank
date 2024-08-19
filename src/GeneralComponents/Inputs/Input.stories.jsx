import { ContextProvider } from "../../MyContext";
import InputComp from "./Input";

export default {
  title: "General Components/Input",
  component: InputComp,
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
    },
    placeholder: {
      control: "text",
      defaultValue: "Placeholder",
    },
    error: {
      control: "text",
      defaultValue: "",
    },
    value: {
      control: "text",
      defaultValue: "",
    },
    type: {
      type: "select",
      options: ["user", "pass", "conPass", "general"],
      defaultValue: "general",
    },
    onChange: {
      action: "changed",
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
    <InputComp {...args} />
  </ContextProvider>
);

export const Username = Template.bind({});
Username.args = {
  type: "user",
  onChange: () => {},
  value: "",
  placeholder: "Username",
};

export const Error = Template.bind({});
Error.args = {
  type: "general",
  onChange: () => {},
  value: "",
  placeholder: "Error",
  error: "There is an error in this field",
};

export const Password = Template.bind({});
Password.args = {
  type: "pass",
  onChange: () => {},
  value: "",
  placeholder: "Password",
};
