import GroupList from "./GroupList";
import Login from "./Login";

const Main = () => {
  return (
    <>
      <div className="w-[1140px] flex justify-between mx-auto pt-16">
        <Login />
        <GroupList />
      </div>
    </>
  );
};

export default Main;
