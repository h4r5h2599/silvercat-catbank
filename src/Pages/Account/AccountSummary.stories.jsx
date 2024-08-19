import { ContextProvider } from "../../MyContext";
import AccountSummaryStory from "./AccountSummary";

export default {
  title: "Pages/Account/Account Summary",
  component: AccountSummaryStory,
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
    isMobile: {
      control: "boolean",
    },
    balance: {
      control: "number",
    },
    day: {
      control: "number",
    },
    week: {
      control: "number",
    },
    month: {
      control: "number",
    },
    year: {
      control: "number",
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
    <AccountSummaryStory {...args} />
  </ContextProvider>
);

export const Summary = Template.bind({});
Summary.args = {
  theme: "dark",
  balance: 100,
  day: 6,
  week: 35,
  month: 101,
  year: 844,
};
