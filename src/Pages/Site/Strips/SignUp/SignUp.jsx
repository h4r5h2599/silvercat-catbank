import ButtonAccent from "../../../../GeneralComponents/Buttons/ButtonAccent";
import useMyContext from "../../../../useMyContext";

const SignUp = () => {
  const { setRoute } = useMyContext();

  const styles = {
    signUp: {
      marginTop: "30px",
      marginBottom: "50px",
    },
  };

  return (
    <div style={styles.signUp}>
      <ButtonAccent
        text="Sign Up Now"
        onClick={() => {
          setRoute("Log In / Sign Up");
        }}
      />
    </div>
  );
};

export default SignUp;
