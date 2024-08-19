import useMyContext from "../../useMyContext";
import { hexToRgb } from "../../util";
import "./ButtonAccent.css";

const ButtonAccent = ({
  onClick = () => {},
  text = "Button",
  disableHover = false,
  ...rest
}) => {
  const { theme } = useMyContext();

  const styles = {
    button: {
      backgroundColor: theme.secondary,
      color: theme.pText,
      border: `2px solid ${theme.accent}`,
      cursor: disableHover ? "default" : "pointer",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "1em",
      fontWeight: 600,
      outline: "none",
      "--accent": `rgba(${hexToRgb(theme.accent).r}, ${hexToRgb(theme.accent).g}, ${hexToRgb(theme.accent).b}, 1)`,
      transition: "0.3s",
      ...rest.styles,
    },
  };

  return (
    <button
      style={styles.button}
      onClick={onClick}
      className={disableHover ? "" : "buttonAccent"}
      {...rest}
    >
      {text}
    </button>
  );
};

export default ButtonAccent;
