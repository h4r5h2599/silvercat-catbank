import ButtonAccent from "../../../../GeneralComponents/Buttons/ButtonAccent";
import SilveEurosText from "../../../../GeneralComponents/SilveEurosText/SilveEurosText";
import useMyContext from "../../../../useMyContext";

const Promo = ({ size = 0 }) => {
  const { theme, isMobile } = useMyContext();

  return (
    <ButtonAccent
      text={
        <SilveEurosText
          size={size ? size : isMobile ? 20 : 40}
          pre=""
          post="100 Free Silveuros on Sign Up"
          styles={{
            color: theme.onAccentText,
          }}
        />
      }
      disableHover
      styles={{
        backgroundColor: theme.accent,
        margin: "50px",
      }}
    />
  );
};

export default Promo;
