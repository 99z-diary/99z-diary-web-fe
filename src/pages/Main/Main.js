import SideBar from "components/SideBar";
import Contents from "./Contents";

const Main = () => {
  return (
    <div className="w-[1140px] flex justify-between mx-auto pt-20">
      <SideBar />
      <Contents />
    </div>
  );
};

export default Main;
