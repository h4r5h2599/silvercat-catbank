import { ContextProvider } from "../../MyContext";
import ButtonAccent from "./ButtonAccent";

export default {
  title: "General Components/Accent Button",
  component: ButtonAccent,
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
    disableHover: {
      control: "boolean",
    },
    text: {
      control: "text",
      defaultValue: "Button",
    },
    onClick: {
      action: "clicked",
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
    <ButtonAccent {...args} />
  </ContextProvider>
);

export const Button = Template.bind({});
Button.args = {};
