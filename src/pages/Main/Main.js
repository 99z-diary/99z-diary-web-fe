import GroupList from "./GroupList";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { useEffect } from "react";
import { getUserInfo } from "api/userApi";
import { useRecoilState } from "recoil";
import { userSelector } from "recoil/userAtom";

const Main = () => {
  const [userInfo, setUserInfo] = useRecoilState(userSelector); // 유저 정보
  useEffect(() => {
    // 기본정보 조회
    getUserInfo()
      .then((response) => {
        console.log("정보조회 / 성공 : ", response.data);
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("정보조회 / 실패 : ", error.response);
      });
  }, []);
  return (
    <>
      <div className="w-[1140px] flex justify-between mx-auto pt-16">
        {userInfo.user_id < 0 ? <BeforeLogin /> : <AfterLogin />}
        <GroupList />
      </div>
    </>
  );
};

export default Main;
