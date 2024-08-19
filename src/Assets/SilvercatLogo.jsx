import useMyContext from "../useMyContext";

const SilvercatLogo = ({ size = 500 }) => {
  const { logoColours } = useMyContext();

  const styles = {
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `${size}px`,
      height: `${size}px`,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gap: "12%",
      width: "65%",
      height: "65%",
      rotate: "45deg",
    },
    greenDot: {
      borderRadius: "50%",
      backgroundColor: logoColours.accent,
    },
    greyDot: {
      borderRadius: "50%",
      backgroundColor: logoColours.support,
    },
  };

  return (
    <div style={styles.logo}>
      <div style={styles.grid}>
        <div style={styles.greenDot}></div>
        {[...Array(8)].map((_, i) => {
          return <div key={"greyDot: " + (i + 1)} style={styles.greyDot}></div>;
        })}
      </div>
    </div>
  );
};

export default SilvercatLogo;
