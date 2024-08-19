import useMyContext from "../../useMyContext";
import { hexToRgb } from "../../util";

const Option = ({ option = "", selected = "", setType = () => {} }) => {
  const { theme } = useMyContext();

  const styles = {
    option: {
      padding: "10px 20px",
      borderRadius: "1000px",
      color: option === selected ? theme.pText : theme.sText,
      transition: "0.3s",
      cursor: "pointer",
      boxShadow:
        option === selected
          ? `0px 0px 10px 0px rgba(${hexToRgb(theme.accent).r}, ${hexToRgb(theme.accent).g}, ${hexToRgb(theme.accent).b}, 1)`
          : "",
    },
  };

  return (
    <div
      style={styles.option}
      onClick={() => {
        setType(option);
      }}
    >
      {option}
    </div>
  );
};

export default Option;
