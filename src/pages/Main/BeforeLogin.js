import { login } from "api/userApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "utils/useAlert";

const BeforeLogin = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" }); // 로그인 정보
  const nav = useNavigate(); // nav 제어
  const alert = useAlert(); // alert 제어
  return (
    <div className="w-[270px] h-[320px] rounded-15 shadow-figma-044 bg-white flex flex-col items-center">
      <span className="font-bold text-primary text-lg mt-[30px]">로그인</span>
      {/* 로그인 이메일 */}
      <input
        className="w-[220px] h-10 rounded-full border-1 border-brown-200 px-4 mt-7 focus:border-brown-600 focus:outline-none placeholder:text-placeholder placeholder:font-medium"
        placeholder="이메일"
        onChange={(email) => {
          const tmp = { ...loginInfo, email: email.target.value };
          setLoginInfo(tmp);
        }}
      />
      {/* 로그인 비밀번호 */}
      <input
        className="w-[220px] h-10 rounded-full border-1 border-brown-200 px-4 mt-[10px] focus:border-brown-600 focus:outline-none placeholder:text-placeholder placeholder:font-medium"
        type="password"
        placeholder="비밀번호"
        onChange={(password) => {
          const tmp = { ...loginInfo, password: password.target.value };
          setLoginInfo(tmp);
        }}
      />
      {/* 로그인 버튼 */}
      <button
        className="w-[220px] h-10 font-bold text-primary rounded-full mt-7 bg-purple-200 hover:shadow-figma-044 hover:bg-purple-600 hover:text-white"
        onClick={async () => {
          if (loginInfo.email.trim() === "" || loginInfo.password.trim() === "")
            alert.onAndOff("정보를 모두 입력해주세요!!");
          else
            await login(loginInfo)
              .then((response) => {
                console.log("로그인 / 성공 : ", response.data);
              })
              .catch((error) => {
                console.log("로그인 / 실패 : ", error.response);
                alert.onAndOff(error.response.data.message);
              });
        }}
      >
        로그인
      </button>
      {/* 회원가입 & 이메일/비밀번호 찾기 버튼 */}
      <div className="w-[220px] flex justify-between mt-2 px-2">
        <button
          className="text-sm font-medium text-gray-600 underline"
          onClick={() => nav("/signup")}
        >
          회원가입
        </button>
        <button
          className="text-sm font-medium text-gray-600 underline"
          onClick={() => nav("/find")}
        >
          이메일/비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default BeforeLogin;
