import SilvercatLogo from "../../../../Assets/SilvercatLogo";
import ButtonAccent from "../../../../GeneralComponents/Buttons/ButtonAccent";
import useMyContext from "../../../../useMyContext";

const Hero = ({ signUp = true, dir = "row", align = "left" }) => {
  const { theme, isMobile, setRoute } = useMyContext();

  const alignToJustify = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  const text = {
    width: "100%",
    lineHeight: 1,
    textAlign: isMobile ? "center" : align,
  };

  const styles = {
    hero: {
      width: "100%",
      minHeight: "500px",
      display: "flex",
      flexDirection: isMobile ? "column" : dir,
      justifyContent: "center",
      alignItems: "center",
      columnGap: "50px",
      backgroundColor: theme.primary,
    },
    text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      ...text,
      fontSize: isMobile ? "3em" : "6em",
      fontWeight: "bold",
      color: theme.pText,
    },
    tagline: {
      ...text,
      fontSize: "2em",
      color: theme.sText,
      paddingLeft: "10px",
    },
    signUp: {
      display: "flex",
      justifyContent: isMobile ? "center" : alignToJustify[align],
      marginTop: "20px",
      paddingLeft: "10px",
    },
  };

  return (
    <div style={styles.hero}>
      <SilvercatLogo size={isMobile ? 200 : 300} />
      <div style={styles.text}>
        <div style={styles.title}>CATBANK</div>
        <div style={styles.tagline}>The modern way to bank</div>
        {signUp && (
          <div style={styles.signUp}>
            <ButtonAccent
              text="Sign Up Now"
              onClick={() => {
                setRoute("Log In / Sign Up");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
