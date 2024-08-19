import { Dialog } from "@mui/material";
import ButtonAccent from "../../GeneralComponents/Buttons/ButtonAccent";
import useMyContext from "../../useMyContext";
import AccountSummary from "./AccountSummary";
import Transactions from "./Transactions";
import PayTransfer from "./PayTransfer";

const Account = () => {
  const { theme, payTransfer, setPayTransfer } = useMyContext();

  const styles = {
    account: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      padding: "20px",
      backgroundColor: theme.primary,
      textAlign: "center",
    },
    accountName: {
      fontSize: "2em",
      color: theme.pText,
    },
    accountButtons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    transactions: {
      width: "100%",
      height: "500px",
      backgroundColor: theme.secondary,
    },
  };

  const buttons = [
    {
      name: "Pay using this account",
      onClick: () => {
        setPayTransfer(true);
      },
    },
    {
      name: "View account statements",
      onClick: () => {},
    },
    {
      name: "Manage direct debits",
      onClick: () => {},
    },
    {
      name: "Manage standing orders",
      onClick: () => {},
    },
    {
      name: "View Card",
      onClick: () => {},
    },
  ];

  return (
    <div style={styles.account}>
      <div style={styles.accountName}>Personal Account 1</div>
      <AccountSummary />

      <div style={styles.accountButtons}>
        {buttons.map((button) => {
          return <ButtonAccent text={button.name} onClick={button.onClick} />;
        })}
      </div>
      <div style={styles.transactions}>
        <Transactions />
      </div>
      <Dialog
        open={payTransfer}
        onClose={() => {
          setPayTransfer(false);
        }}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              // width: "100%",
              minWidth: "20vw",
              maxWidth: "60vw", // Set your width here
              //   minHeight: "20vh",
              //   maxHeight: "60vh",
              height: "60vh",
            },
          },
        }}
      >
        <PayTransfer />
      </Dialog>
    </div>
  );
};

export default Account;
