import { useState } from "react";

/**
 * 로그인 페이지
 */
const Login = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
  });
  return (
    <>
      <div className="flex flex-col items-center w-[300px] h-fit">
        {/* 타이틀 */}
        <span className="text-4xl font-bold">99z diary</span>
        {/* 이름 */}
        <input
          className="w-full h-12 rounded-[10px] px-4 text-base font-semibold placeholder:text-sm"
          placeholder="이름을 입력해주세요"
        />
        {/* 전화번호*/}
        <input
          className="w-full h-12 rounded-[10px] px-4 text-base font-semibold placeholder:text-sm"
          placeholder="전화번호를 입력해주세요 (010-1234-5678)"
        />
        {/* 로그인 버튼 */}
        <button className="w-full h-12 bg-gray-600 rounded-[10px] font-semibold text-white">
          로그인
        </button>
      </div>
    </>
  );
};

export default Login;
