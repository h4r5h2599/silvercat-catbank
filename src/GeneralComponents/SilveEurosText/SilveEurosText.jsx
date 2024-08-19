import SilvEuroWhite from "../../Assets/SilveuroWhite.png";
import SilvEuroBlack from "../../Assets/SilveuroBlack.png";
import useMyContext from "../../useMyContext";
import { isCloserToBlack } from "../../util";

const SilveEurosText = ({ pre = "+", post = "100", size = 40, ...rest }) => {
  const { theme } = useMyContext();

  const color = rest.styles?.color || theme.pText;

  const styles = {
    silveuro: {
      color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: `${size}px`,
      fontWeight: 400,
      lineHeight: 1,
      whiteSpace: "nowrap",
      gap: `${size * 0.1}px`,
      ...rest.styles,
    },
  };

  return (
    <div style={styles.silveuro}>
      {pre}
      <img
        src={isCloserToBlack(color) ? SilvEuroBlack : SilvEuroWhite}
        alt="Silveuro"
        style={{
          height: `${size * 0.8}px`,
        }}
      />
      {post}
    </div>
  );
};

export default SilveEurosText;
