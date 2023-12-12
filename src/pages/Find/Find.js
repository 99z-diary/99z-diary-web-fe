import { useState, useEffect } from "react";

const Find = () => {
  const [type, setType] = useState("email"); // 찾기 타입
  const [emailInfo, setEmailInfo] = useState({
    name: "",
    phone: "",
  }); // 이메일 찾기 정보
  const [passInfo, setPassInfo] = useState({
    email: "",
    name: "",
    phone: "",
  }); // 비밀번호 찾기 정보
  useEffect(() => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (type === "email") {
      email.classList.remove("bg-f2e9e4");
      email.classList.add("text-white", "bg-gray-600");
      password.classList.remove("text-white", "bg-gray-600");
      password.classList.add("bg-f2e9e4");
    } else if (type === "password") {
      password.classList.remove("bg-f2e9e4");
      password.classList.add("text-white", "bg-gray-600");
      email.classList.remove("text-white", "bg-gray-600");
      email.classList.add("bg-f2e9e4");
    }
  }, [type]);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-[500px] h-[400px] border-[1px] border-t-0 rounded-t-2xl border-gray-600 flex flex-col">
        {/* 찾기 타입 선택 버튼 */}
        <div className="flex w-full">
          <button
            id="email"
            className="w-[250px] h-[60px] rounded-t-2xl font-bold"
            onClick={() => setType("email")}
          >
            이메일 찾기
          </button>
          <button
            id="password"
            className="w-[250px] h-15 rounded-t-2xl font-bold"
            onClick={() => setType("password")}
          >
            비밀번호 찾기
          </button>
        </div>
        {type === "email" ? (
          <>
            {/* 이메일 찾기 */}
            <div className="w-full h-[340px] flex flex-col justify-center items-center">
              {/* 이름 */}
              <input
                id="email_name"
                className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="이름을 입력해주세요"
                value={emailInfo.name}
                onChange={(e) => {
                  // 입력된 이름 저장
                  const tmp = {
                    ...emailInfo,
                    name: e.target.value,
                  };
                  setEmailInfo(tmp);
                }}
              />
              {/* 전화번호 */}
              <input
                id="email_phone"
                className="w-[300px] h-12 rounded-2xl px-4 mt-[10px] font-medium border-[1px] text-sm border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="전화번호를 입력해주세요"
                value={emailInfo.phone}
                onChange={(e) => {
                  // 입력된 전화번호 저장
                  const tmp = {
                    ...emailInfo,
                    phone: e.target.value,
                  };
                  setEmailInfo(tmp);
                }}
              />
              {/* 이메일 찾기 버튼 */}
              <button
                id="email_find"
                className="w-[300px] h-12 mt-10 font-semibold text-white bg-gray-600 rounded-2xl hover:shadow-figma"
              >
                이메일 찾기
              </button>
            </div>
          </>
        ) : (
          <>
            {/* 비밀번호 찾기 */}
            <div className="w-full h-[340px] flex flex-col justify-center items-center">
              {/* 이메일 */}
              <input
                id="password_email"
                className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="이메일을 입력해주세요"
                value={passInfo.email}
                onChange={(e) => {
                  // 입력된 이메일 저장
                  const tmp = {
                    ...passInfo,
                    email: e.target.value,
                  };
                  setPassInfo(tmp);
                }}
              />
              {/* 이름 */}
              <input
                id="password_name"
                className="w-[300px] h-12 rounded-2xl px-4 mt-[10px] font-medium border-[1px] text-sm border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="이름을 입력해주세요"
                value={passInfo.name}
                onChange={(e) => {
                  // 입력된 이름 저장
                  const tmp = {
                    ...passInfo,
                    name: e.target.value,
                  };
                  setPassInfo(tmp);
                }}
              />
              {/* 전화번호 */}
              <input
                id="password_phone"
                className="w-[300px] h-12 rounded-2xl px-4 mt-[10px] font-medium border-[1px] text-sm border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="전화번호를 입력해주세요"
                value={passInfo.phone}
                onChange={(e) => {
                  // 입력된 전화번호 저장
                  const tmp = {
                    ...passInfo,
                    phone: e.target.value,
                  };
                  setPassInfo(tmp);
                }}
              />
              {/* 비밀번호 찾기 버튼 */}
              <button
                id="password_find"
                className="w-[300px] h-12 mt-10 font-semibold text-white bg-gray-600 rounded-2xl hover:shadow-figma"
              >
                비밀번호 찾기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Find;
