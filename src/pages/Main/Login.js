import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" }); // 로그인 정보
  const nav = useNavigate(); // nav 제어
  return (
    <div className="w-[250px] h-[300px] rounded-2xl shadow-figma bg-white">
      <div className="flex items-center justify-center w-full h-10 font-bold text-white bg-gray-600 rounded-t-2xl text-bold">
        Login
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[260px]">
        {/* 로그인 이메일 */}
        <div className="flex items-center justify-between w-[220px] h-9 px-2 rounded-[10px] border-2 border-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="#4b5563"
              d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"
            />
          </svg>
          <input
            className="w-full h-full text-sm font-medium ml-[10px] focus:outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:font-medium"
            type="email"
            placeholder="이메일"
            onChange={(email) => {
              const tmp = { ...loginInfo, email: email.target.value };
              setLoginInfo(tmp);
            }}
          />
        </div>
        {/* 로그인 비밀번호 */}
        <div className="flex items-center justify-between w-[220px] h-9 px-2 mt-[10px] rounded-[10px] border-2 border-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4b5563"
              d="M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2l2-2l2 2l4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3z"
            />
          </svg>
          <input
            className="w-full h-full text-sm font-medium ml-[10px] focus:outline-none placeholder:text-sm placeholder:text-gray-500 placeholder:font-medium"
            type="password"
            placeholder="비밀번호"
            onChange={(password) => {
              const tmp = { ...loginInfo, password: password.target.value };
              setLoginInfo(tmp);
            }}
          />
        </div>
        {/* 로그인 버튼 */}
        <button
          className="w-[220px] h-9 font-bold text-sm text-white rounded-[10px] mt-5 bg-gray-600 hover:shadow-figma"
          onClick={() => console.log(loginInfo)}
        >
          로그인
        </button>
        {/* 회원가입 & 이메일/비밀번호 찾기 버튼 */}
        <div className="w-[220px] flex justify-between mt-2">
          <button
            className="text-sm font-medium text-gray-500 underline"
            onClick={() => nav("/signup")}
          >
            회원가입
          </button>
          <button
            className="text-sm font-medium text-gray-500 underline"
            onClick={() => nav("/find")}
          >
            이메일/비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
