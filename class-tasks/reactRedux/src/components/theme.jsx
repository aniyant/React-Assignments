import { useDispatch } from "react-redux";
import actionType from "../redux/actionTypes";

function changeThemeToLightAction() {
  return { type: actionType.SET_THEME, payload: "light-mode" };
}

function changeThemeToDarkAction() {
  return { type: actionType.SET_THEME, payload: "dark-mode" };
}

function ThemeSwitch() {
  let dispatch = useDispatch();

  return (
    <div className="theme-switcher">
      <button
        id="lightModeBtn"
        onClick={() => dispatch(changeThemeToLightAction())}
      >
        Light Mode
      </button>
      <button
        id="darkModeBtn"
        onClick={() => dispatch(changeThemeToDarkAction())}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default ThemeSwitch;
