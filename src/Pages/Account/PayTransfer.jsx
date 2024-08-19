import { useState } from "react";
import useMyContext from "../../useMyContext";
import payees from "../../Assets/payees.json";
import Payee from "./Payee";
import Input from "../../GeneralComponents/Inputs/Input";
import ButtonAccent from "../../GeneralComponents/Buttons/ButtonAccent";

const PayTransfer = () => {
  const { theme, setPayTransfer } = useMyContext();

  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const [confirmPage, setConfirmPage] = useState(false);

  const styles = {
    payTransfer: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.primary,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "20px",
      gap: "20px",
      border: "2px solid " + theme.accent,
    },
    payeesWithTitle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      height: "100%",
    },
    payeesTitle: {
      fontSize: "1.5em",
      color: theme.pText,
    },
    payees: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      height: "100%",
      width: "100%",
      overflow: "scroll",
      padding: "20px",
    },
    pay: {
      paddingTop: "40px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    confirm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    confirmMessage: {
      fontSize: "1.2em",
      color: theme.pText,
    },
  };

  if (confirmPage) {
    return (
      <div style={styles.payTransfer}>
        <div style={styles.confirm}>
          <div style={styles.confirmMessage}>
            You are about to pay {amount} Silveuros to {selected} with the
            reference: {reference}. Please confirm.
          </div>
          <ButtonAccent
            text="Confirm"
            onClick={() => {
              setPayTransfer(false);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.payTransfer}>
      <div style={styles.payeesWithTitle}>
        <div style={styles.payeesTitle}>Payees</div>
        <div style={styles.payees}>
          {payees.map((payee, index) => {
            return (
              <Payee
                key={payee.name + index}
                payee={payee}
                setSelected={setSelected}
                selected={selected}
              />
            );
          })}
        </div>
      </div>
      <div style={styles.pay}>
        <Input
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <Input
          placeholder="Reference"
          value={reference}
          onChange={(e) => {
            setReference(e.target.value);
          }}
        />
        {selected && (
          <ButtonAccent
            text="Make Payment"
            onClick={() => {
              setConfirmPage(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PayTransfer;
