import useMyContext from "../../../../useMyContext";
import Testimonial from "./Testimonial";

const Testimonials = ({
  testimonials = [
    "I love how straightforward and user-friendly this online bank is. From setting up an account to making transfers, everything is seamless. Plus, the security features give me peace of mind knowing my money is safe.",
    "This online bank has revolutionized the way I handle my finances. The real-time updates and easy-to-use mobile app make tracking my spending and saving goals a breeze. Highly recommended for anyone looking for a hassle-free banking experience!",
    "I was skeptical about switching to an online bank, but I'm so glad I did! The services are incredibly efficient, and I love the transparency in fees and transactions. It's convenient, reliable, and exactly what I needed.",
    "The best part about this online bank is the convenience. No more long waits in line or dealing with complicated processes. Everything is at my fingertips, and the customer service is always responsive. It's truly a game-changer for modern banking.",
    "Switching to this online bank was the best decision I've made this year! The interface is intuitive, and managing my finances has never been easier. The customer support is top-notch and always ready to help with any issues I have.",
  ],
}) => {
  const { isMobile, theme } = useMyContext();

  const styles = {
    testimonials: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: isMobile ? "center" : "stretch",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      flexWrap: "wrap",
      padding: "50px",
      backgroundColor: theme.primary,
    },
  };

  return (
    <div style={styles.testimonials}>
      {testimonials.map((testimonial, i) => {
        return <Testimonial key={i} text={testimonial} />;
      })}
    </div>
  );
};

export default Testimonials;
