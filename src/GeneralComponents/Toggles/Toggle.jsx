import useMyContext from "../../useMyContext";
import Option from "./Option";

const Toggle = ({ selected = "", options = [], setType = () => {} }) => {
  const { theme } = useMyContext();

  const styles = {
    toggle: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.secondary,
      padding: "10px",
      borderRadius: "1000px",
      gap: "10px",
    },
  };

  return (
    <div style={styles.toggle}>
      {options.map((option) => {
        return (
          <Option
            key={option}
            option={option}
            selected={selected}
            setType={setType}
          />
        );
      })}
    </div>
  );
};

export default Toggle;
