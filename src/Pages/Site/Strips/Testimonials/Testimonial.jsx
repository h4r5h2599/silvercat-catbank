import useMyContext from "../../../../useMyContext";
import { hexToRgb } from "../../../../util";
import "./Testimonial.css";

const Testimonial = ({ text = "" }) => {
  const { theme, isMobile } = useMyContext();

  const styles = {
    testimonial: {
      color: theme.pText,
      fontSize: "1.2em",
      textAlign: "center",
      padding: "40px",
      backgroundColor: theme.secondary,
      flex: 1,
      width: isMobile ? "80%" : "",
      minWidth: "400px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexDirection: "column",
      alignItems: "center",
      transition: "0.3s",
      "--accent": `rgba(${hexToRgb(theme.accent).r}, ${hexToRgb(theme.accent).g}, ${hexToRgb(theme.accent).b}, 1)`,
    },
    speech: {
      fontSize: "1.2em",
      fontFamily: "Georgia, serif",
    },
    sign: {
      fontStyle: "italic",
      color: theme.sText,
    },
  };

  return (
    <div style={styles.testimonial} className="testimonial">
      <div style={styles.text}>
        <span style={styles.speech}>“{"  "}</span>
        {text}
        <span style={styles.speech}> ”</span>
      </div>
      <div style={styles.sign}>-Person Name</div>
    </div>
  );
};

export default Testimonial;
