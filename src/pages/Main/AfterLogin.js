import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";

const AfterLogin = () => {
  return (
    <div className="w-[250px] h-[300px] rounded-2xl shadow-figma bg-white">
      <div className="flex items-center justify-center w-full h-10 font-bold text-white bg-gray-600 rounded-t-2xl text-bold">
        Login
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[260px]">
        {useRecoilValue(userAtom).nickname} 님 환영합니다!!
      </div>
    </div>
  );
};

export default AfterLogin;
