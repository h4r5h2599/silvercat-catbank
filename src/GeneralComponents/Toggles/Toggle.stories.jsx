import { ContextProvider } from "../../MyContext";
import ToggleComp from "./Toggle";

export default {
  title: "General Components/Toggle",
  component: ToggleComp,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "50px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      type: "select",
      options: ["dark", "light"],
      defaultValue: "dark",
    },
    accentColor: {
      control: "color",
    },
    selected: {
      type: "text",
      defaultValue: "Option 1",
    },
    options: {
      control: "array",
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    setType: {
      control: false,
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
    <ToggleComp {...args} />
  </ContextProvider>
);

export const SignUpLogIn = Template.bind({});
SignUpLogIn.args = {
  selected: "Log In",
  options: ["Sign Up", "Log In"],
};
