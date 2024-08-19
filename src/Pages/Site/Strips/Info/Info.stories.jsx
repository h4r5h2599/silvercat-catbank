import { ContextProvider } from "../../../../MyContext";
import InfoStory from "./Info";

export default {
  title: "Pages/Website/Strips/Information Strip",
  component: InfoStory,
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
    reverse: {
      control: "boolean",
    },
    stack: {
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
    <InfoStory {...args} />
  </ContextProvider>
);

export const LeftToRight = Template.bind({});
LeftToRight.args = {
  theme: "dark",
  isMobile: false,
  reverse: false,
  stack: false,
};

export const RightToLeft = Template.bind({});
RightToLeft.args = {
  theme: "dark",
  isMobile: false,
  reverse: true,
  stack: false,
};

export const Stacked = Template.bind({});
Stacked.args = {
  theme: "dark",
  isMobile: false,
  reverse: true,
  stack: true,
};

export const Mobile = Template.bind({});
Mobile.args = {
  theme: "dark",
  isMobile: true,
  reverse: true,
  stack: false,
};
