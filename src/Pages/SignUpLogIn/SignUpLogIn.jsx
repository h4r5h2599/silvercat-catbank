import { useState } from "react";
import useMyContext from "../../useMyContext";
import Hero from "../Site/Strips/Hero/Hero";
import Promo from "../Site/Strips/Promo/Promo";
import Toggle from "../../GeneralComponents/Toggles/Toggle";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../GeneralComponents/Inputs/Input";
import ButtonAccent from "../../GeneralComponents/Buttons/ButtonAccent";
import { validatePassword, validateUsername } from "./validation";

const SignUpLogIn = ({ defaultType = "Log In" }) => {
  const { theme, isMobile, setRoute, setLoggedIn } = useMyContext();

  const [type, setType] = useState(defaultType);
  const types = ["Log In", "Sign Up"];

  const [formDetails, setFormDetails] = useState({
    user: {
      value: "",
      error: "",
    },
    pass: {
      value: "",
      error: "",
    },
    conPass: {
      value: "",
      error: "",
    },
  });

  const styles = {
    SignUpLogIn: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: isMobile ? "center" : "stretch",
      backgroundColor: theme.primary,
    },
    form: {
      // border: "1px solid pink",
      width: isMobile ? "90%" : "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    confirmPassword: {
      overflow: "hidden",
      height: type === "Sign Up" ? "70px" : "0px",
      transition: "0.3s",
    },
    submit: {},
    divide: {
      border: `1px solid ${theme.accent}`,
    },
    brand: {
      width: "55%",
    },
    logoAndCompany: {},
    promo: {},
  };

  const submitForm = () => {
    const userError = validateUsername(formDetails.user.value);
    const passError = validatePassword(formDetails.pass.value);

    let conPassError = false;

    if (type === "Sign Up") {
      conPassError = formDetails.conPass.value !== formDetails.pass.value;
    }

    const error = userError || passError || conPassError;

    if (error) {
      setFormDetails({
        user: {
          value: formDetails.user.value,
          error: userError,
        },
        pass: {
          value: formDetails.pass.value,
          error: passError,
        },
        conPass: {
          value: formDetails.conPass.value,
          error: conPassError ? "Passwords do not match" : "",
        },
      });
      return;
    }

    setRoute("Account");
    setLoggedIn(true);
  };

  const updateForm = (type, value) => {
    setFormDetails({
      ...formDetails,
      [type]: {
        value: value,
        error: "",
      },
    });
  };

  return (
    <div style={styles.SignUpLogIn}>
      <div style={styles.form}>
        <Toggle selected={type} options={types} setType={setType} />
        <BsPersonCircle size={150} color={theme.accent} />
        <Input
          type="user"
          error={formDetails.user.error}
          value={formDetails.user.value}
          onChange={(e) => {
            updateForm("user", e.target.value);
          }}
          dataID="username"
        />
        <Input
          type="pass"
          error={formDetails.pass.error}
          value={formDetails.pass.value}
          onChange={(e) => {
            updateForm("pass", e.target.value);
          }}
          dataID="password"
        />
        <div style={styles.confirmPassword}>
          <Input
            type="conPass"
            error={formDetails.conPass.error}
            value={formDetails.conPass.value}
            onChange={(e) => {
              updateForm("conPass", e.target.value);
            }}
            dataID="confirmPassword"
          />
        </div>
        <div style={styles.submit}>
          <ButtonAccent
            text={`${type} Now`}
            onClick={submitForm}
            data-testid={"submitForm"}
          />
        </div>
      </div>
      {!isMobile && <div style={styles.divide}></div>}
      {!isMobile && (
        <div style={styles.brand}>
          <div style={styles.logoAndCompany}>
            <Hero signUp={false} dir="column" align="center" />
          </div>
          <div style={styles.promo}>
            <Promo size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpLogIn;
