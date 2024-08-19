import useMyContext from "../useMyContext";

const Router = () => {
  const { pageStore, route, loggedIn, loggedInPageStore } = useMyContext();

  const styles = {
    page: {
      width: "100%",
    },
  };

  return (
    <div style={styles.page}>
      {loggedIn ? loggedInPageStore[route] : pageStore[route]}
    </div>
  );
};

export default Router;
