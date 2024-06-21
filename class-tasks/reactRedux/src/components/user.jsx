import { useDispatch } from "react-redux";
import actionType from "../redux/actionTypes";

function User() {
  const dispatch = useDispatch();

  const login = (username) => {
    if (username) {
      dispatch({
        type: actionType.UPDATE_USER,
        payload: { username, loggedIn: true },
      });
    }
  };

  const logout = () => {
    dispatch({
      type: actionType.UPDATE_USER,
      payload: { username: null, loggedIn: false },
    });
  };

  return (
    <div className="login-logout">
      <input type="text" id="userName" placeholder="Username" />
      <button onClick={() => login(document.getElementById("userName").value)}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default User;
