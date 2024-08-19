import "./App.css";
// import SilvEuro from "../Assets/SilveuroWhite.png";
import TopBar from "./TopBar";
import Router from "./Router";
import useMyContext from "../useMyContext";

function App() {
  const { theme } = useMyContext();

  const styles = {
    app: {
      backgroundColor: theme.primary,
      textAlign: "center",
      position: "relative",
      width: "100%",
      minHeight: "100%",
    },
    topBar: {
      position: "sticky",
      zIndex: 100,
      top: 0,
      left: 0,
      width: "100%",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.topBar}>
        <TopBar />
      </div>
      <Router />
    </div>
  );
}

export default App;
