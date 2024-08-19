import useMyContext from "../useMyContext";
import "./TopBarElement.css";

const TopBarElement = ({
  option = "Home",
  click = () => {},
  pauseDefaultFunc = false,
}) => {
  const { theme, route, setRoute } = useMyContext();

  const styles = {
    TopBarElement: {
      padding: "10px",
      margin: "5px",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: route === option ? theme.pText : theme.sText,
      transition: "0.3s",
      ...(option === route
        ? { borderBottom: `2px solid ${theme.accent}` }
        : {}),
      "--underline": theme.pText,
    },
  };

  return (
    <div
      style={styles.TopBarElement}
      className="topBarElement"
      onClick={() => {
        click();
        if (!pauseDefaultFunc) {
          setRoute(option);
        }
      }}
    >
      {option}
    </div>
  );
};

export default TopBarElement;
