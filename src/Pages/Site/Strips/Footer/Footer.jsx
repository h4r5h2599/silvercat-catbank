import useMyContext from "../../../../useMyContext";

const Footer = () => {
  const { theme, isMobile } = useMyContext();

  const styles = {
    footer: {
      width: "100%",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      minHeight: "200px",
      backgroundColor: theme.secondary,
    },
    text: {
      width: isMobile ? "80%" : "30%",
      color: theme.sText,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.text}>LO3 5DE London</div>
      <div style={styles.text}>Catbank (Silvercat)</div>
      <div style={styles.text}>catbank_support@email.com</div>
    </div>
  );
};

export default Footer;
