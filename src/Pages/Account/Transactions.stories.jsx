import { ContextProvider } from "../../MyContext";
import TransactionsStories from "./Transactions";

export default {
  title: "Pages/Account/Transactions Table",
  component: TransactionsStories,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "50px",
          height: "500px",
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
    <TransactionsStories {...args} />
  </ContextProvider>
);

export const Table = Template.bind({});
Table.args = {
  theme: "dark",
};
