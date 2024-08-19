import "./Site.css";
import Hero from "./Strips/Hero/Hero";
import Promo from "./Strips/Promo/Promo";
import Info from "./Strips/Info/Info";
import Testimonials from "./Strips/Testimonials/Testimonials";
import SignUp from "./Strips/SignUp/SignUp";
import Footer from "./Strips/Footer/Footer";
import useMyContext from "../../useMyContext";

const Site = () => {
  const { theme } = useMyContext();

  const styles = {
    site: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.primary,
    },
    strip: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const strips = [
    <Hero />,
    <Promo />,
    <Info />,
    <Testimonials />,
    <SignUp />,
    <Footer />,
  ];

  return (
    <div style={styles.site}>
      {strips.map((strip, index) => (
        <div key={index} style={styles.strip}>
          {strip}
        </div>
      ))}
    </div>
  );
};

Site.propTypes = {};

export default Site;
