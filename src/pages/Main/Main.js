import Contents from "./Contents";
import Login from "./Login";

const Main = () => {
  return (
    <div className="w-[1140px] flex justify-between mx-auto pt-20">
      <Login />
      <Contents />
    </div>
  );
};

export default Main;
