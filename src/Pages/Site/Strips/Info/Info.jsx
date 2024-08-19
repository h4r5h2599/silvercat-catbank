import graph from "../../../../Assets/graph.jpeg";
import useMyContext from "../../../../useMyContext";

const Info = ({ reverse = false, stack = false }) => {
  const { theme, isMobile } = useMyContext();

  const styles = {
    infoStrip: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "100px",
      marginBottom: "100px",
      flexDirection: isMobile ? "column" : stack ? "column" : "row",
      backgroundColor: theme.primary,
    },
    image: {
      width: isMobile ? "80%" : stack ? "80%" : "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      width: "60%",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "30px",
    },
    title: {
      color: theme.pText,
      fontSize: "1.5em",
    },
    body: {
      color: theme.sText,
      fontSize: "1em",
    },
  };

  const imageDiv = (
    <div style={styles.image}>
      <img
        src={graph}
        alt="graph"
        style={{
          width: "100%",
          maxWidth: `600px`,
          border: `2px solid ${theme.accent}`,
          borderRadius: "10px",
        }}
      />
    </div>
  );

  const textDiv = (
    <div style={styles.text}>
      <div style={styles.title}>CATBANK is the way of modern banking</div>
      <div style={styles.body}>
        Catbank is driving the next generation of banking. With its state of the
        art digital system, Catbank allows you to manage your money easier than
        ever before whether you're at home or on the move.
      </div>
      <div style={styles.body}>
        Create a free account today to secure 100 free silveuros. View your
        transactions, manage your accounts and send money to and from your
        account with the click of just a few buttons. Gain insight into your
        spending habits to empower your to make informed decisions. Grow your
        wealth today with transparent and secure banking.
      </div>
      <div style={styles.body}>
        Join the ever expanding Catbank community today!
      </div>
    </div>
  );

  const elements = [imageDiv, textDiv];

  if (reverse) elements.reverse();

  return <div style={styles.infoStrip}>{elements}</div>;
};

export default Info;
