import { useDispatch } from "react-redux";
import { resetUser, UserKey } from "@lab/state";
import { clearLocalStorage } from "../../utilities";
import { navigateToUrl } from "single-spa";

function Logout() {
    const dispatch = useDispatch();
    const logOut = () => {
      clearLocalStorage(UserKey);
      dispatch(resetUser());
      navigateToUrl('/auth')
    };
    return <button onClick={logOut}>Log Out</button>;
  }
  export default Logout;
  