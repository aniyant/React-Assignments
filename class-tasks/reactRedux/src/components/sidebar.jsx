import { useSelector } from "react-redux";
import actionType from "../redux/actionTypes";

function Sidebar() {
  let themeState = useSelector((state) => state.theme);
  let cartState = useSelector((state) => state.cart);
  let userState = useSelector((state) => state.user);
  return (
    <pre className="sidebar left-sidebar" id="userSidebar">
      {JSON.stringify(themeState, null, 2)}
      <hr />
      {JSON.stringify(cartState, null, 2)}
      <hr />
      {JSON.stringify(userState, null, 2)}
    </pre>
  );
}

export default Sidebar;
