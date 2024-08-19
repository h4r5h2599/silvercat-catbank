import useMyContext from "../../useMyContext";
import { hexToRgb } from "../../util";
import "./Payee.css";

const Payee = ({ payee, selected, setSelected }) => {
  const { theme } = useMyContext();

  const styles = {
    payee: {
      width: "100%",
      padding: "10px",
      paddingLeft: "30px",
      paddingRight: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: theme.secondary,
      color: theme.pText,
      borderRadius: "10px",
      cursor: "pointer",
      gap: "5px",
      transition: "0.3s",
      "--pText": `rgba(${hexToRgb(theme.pText).r}, ${hexToRgb(theme.pText).g}, ${hexToRgb(theme.pText).b}, 1)`,
      boxShadow:
        selected === payee.name
          ? `0px 0px 10px rgba(${hexToRgb(theme.accent).r}, ${hexToRgb(theme.accent).g}, ${hexToRgb(theme.accent).b}, 1)`
          : "",
    },
    name: {
      fontSize: "1.2em",
    },
    info: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
    },
    accNum: {
      fontSize: "0.8em",
      color: theme.sText,
    },
    sortCode: {
      fontSize: "0.8em",
      color: theme.sText,
    },
  };

  return (
    <div
      style={styles.payee}
      onClick={() => {
        setSelected(payee.name);
      }}
      className="payee"
    >
      <div style={styles.name}>{payee.name}</div>
      <div style={styles.info}>
        <div style={styles.accNum}>{payee.accountNumber}</div>
        <div style={styles.sortCode}>{payee.sortCode}</div>
      </div>
    </div>
  );
};

export default Payee;
