import { Route } from "react-router-dom";
import Application from "./Application";
import Login from "./Login";
import appConfig from "./config/AppConfig";

export const Authenticated = () => {
  return (
    <div
      style={{
        background: appConfig.app_colors.whiteCreamy,
        // marginBottom: "10vw",
      }}
    >
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "" ? (
        <Application />
      ) : (
        <Route path="/" component={Login} />
      )}
    </div>
  );
};

export default Authenticated;
