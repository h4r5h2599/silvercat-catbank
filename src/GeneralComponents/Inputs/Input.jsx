import { useState } from "react";
import useMyContext from "../../useMyContext";

import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Input = ({
  type = "general",
  error = false,
  value = "",
  onChange = () => {},
  placeholder = "",
  dataID = "",
}) => {
  const { theme } = useMyContext();
  const [hide, setHide] = useState(type === "pass" || type === "conPass");

  const styles = {
    wholeInput: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      width: "300px",
    },
    inputArea: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    input: {
      backgroundColor: theme.secondary,
      padding: "10px",
      borderRadius: "10px",
      border: error ? "1px solid red" : `1px solid ${theme.secondary}`,
      fontSize: "1.2em",
      outline: "none",
      caretColor: theme.accent,
      transition: "0.3s",
      color: theme.pText,
      flex: 1,
      userSelect: "none",
    },
    hideButton: {
      cursor: "pointer",
    },
    error: {
      maxHeight: error ? "100px" : "0px",
      transition: "0.3s",
      color: "red",
      fontSize: "0.8em",
      fontWeight: 600,
      width: "100%",
      textAlign: "left",
    },
  };

  const placeholders = {
    user: "Username",
    pass: "Password",
    conPass: "Confirm Password",
  };

  return (
    <div style={styles.wholeInput}>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          placeholder={placeholder ? placeholder : placeholders[type]}
          type={hide ? "password" : "text"}
          value={value}
          onChange={onChange}
          data-testid={dataID + "Input"}
        />
        <div style={styles.hideButton}>
          {(type === "pass" || type === "conPass") &&
            (hide ? (
              <FaRegEye
                size={25}
                color={theme.accent}
                onClick={() => setHide(false)}
              />
            ) : (
              <FaRegEyeSlash
                size={25}
                color={theme.accent}
                onClick={() => setHide(true)}
              />
            ))}
        </div>
      </div>
      <div style={styles.error} data-testid={dataID + "Error"}>
        {error}
      </div>
    </div>
  );
};

export default Input;
