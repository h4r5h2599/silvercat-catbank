import { useContext } from "react";
import MyContext from "./MyContext";

function useMyContext() {
  return useContext(MyContext);
}

export default useMyContext;
