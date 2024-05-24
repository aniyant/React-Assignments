// components/Main.jsx
import TopMain from "./TopMain";
import BottomMain from "./BottomMain";

function Main({ isLoggedIn }) {
  return (
    <div>
      <TopMain />
      <BottomMain isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export {Main};
