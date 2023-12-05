import Alert from "popup/Alert";
import { login } from "api/authApi";
import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userSelector } from "recoil/userAtom";
import { alertAtom } from "recoil/alertAtom";
import { useAlert } from "utils/useAlert";

const Login = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
  }); // 입력 정보
  const [userInfo, setUserInfo] = useRecoilState(userSelector); // 유저 정보
  const alert = useAlert(); // alert 제어
  return (
    <>
      <div className="flex flex-col items-center w-[300px] h-fit mx-auto pt-60">
        {/* 타이틀 */}
        <span className="text-4xl font-semibold">99z diary</span>
        {/* 이름 */}
        <input
          className="w-full h-12 rounded-[10px] px-4 text-base font-semibold border-2 border-black mt-12 placeholder:text-sm"
          placeholder="이름을 입력해주세요"
          value={info.name}
          onChange={(e) => {
            // 입력된 이름 저장
            const tmp = {
              ...info,
              name: e.target.value,
            };
            setInfo(tmp);
          }}
        />
        {/* 전화번호 */}
        <input
          className="w-full h-12 rounded-[10px] px-4 text-base font-semibold border-2 border-black mt-4 placeholder:text-sm"
          placeholder="전화번호를 입력해주세요 (010-1234-5678)"
          value={info.phone}
          onChange={(e) => {
            // 입력된 전화번호 저장
            const tmp = {
              ...info,
              phone: e.target.value,
            };
            setInfo(tmp);
          }}
        />
        {/* 로그인 버튼 */}
        <button
          className="w-full h-12 bg-gray-600 rounded-[10px] font-semibold text-white mt-4"
          onClick={async () => {
            await login(info)
              .then((response) => {
                console.log("로그인 : ", response.data);
                setUserInfo({ ...response.data });
              })
              .catch((error) => alert.onAndOff(error.response.data.message));
          }}
        >
          로그인
        </button>
      </div>
      {useRecoilValue(alertAtom).state && <Alert />}
    </>
  );
};

export default Login;
