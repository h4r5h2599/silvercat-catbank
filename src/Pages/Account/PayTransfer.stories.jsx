import { ContextProvider } from "../../MyContext";
import PayTransferStory from "./PayTransfer";

export default {
  title: "Pages/Account/Pay and Transfer",
  component: PayTransferStory,
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
    <PayTransferStory {...args} />
  </ContextProvider>
);

export const Make_A_Payment = Template.bind({});
Make_A_Payment.args = {
  theme: "dark",
};
