import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { ContextProvider } from "./MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      height: "100vh",
      width: "100vw",
      overflow: "scroll",
    }}
  >
    <ContextProvider>
      <App />
    </ContextProvider>
  </div>
);
