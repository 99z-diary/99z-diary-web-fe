import { emailCode } from "api/signupApi";
import { useState } from "react";
import { useAlert } from "utils/useAlert";

const SignUp = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    nickname: "",
    phone: "",
  }); // 회원가입 입력 정보
  const [code, setCode] = useState(-1); // 인증코드 저장
  const [passCheck, setPassCheck] = useState(""); // 확인용 비밀번호
  const alert = useAlert(); // alert 제어
  const [step, setStep] = useState(1); // 현재 진행 단계
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  ); // 이메일 정규표현식
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* 타이틀 */}
        <span className="text-4xl font-semibold">회원가입</span>
        {/* 이름 */}
        <input
          id="name"
          className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 mt-12 placeholder:text-gray-500 placeholder:text-sm"
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
        {/* 이메일 */}
        <div className="flex w-[300px] h-12 items-center mt-[10px]">
          <input
            id="email"
            className="w-[200px] h-full rounded-l-2xl px-4 font-medium text-sm border-[1px] border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
            placeholder="이메일을 입력해주세요"
            value={info.email}
            onChange={(e) => {
              // 입력된 이메일 저장
              const tmp = {
                ...info,
                email: e.target.value,
              };
              setInfo(tmp);
            }}
          />
          <button
            id="send_btn"
            className="w-[100px] h-full font-semibold text-white text-sm rounded-r-2xl border-gray-600 border-[1px] border-l-0 bg-gray-400 hover:shadow-figma hover:bg-gray-600"
            onClick={async () => {
              setStep(1); // 이메일 인증 단계로 초기화
              // 비어있는 이름 or 이메일
              if (info.name.trim() === "" || info.email.trim() === "")
                alert.onAndOff("모든 항목을 입력해주세요!!");
              // 아이디는 이메일
              else if (!emailRegex.test(info.email))
                alert.onAndOff("이메일 형식으로 입력해주세요!!");
              else {
                await emailCode(info.email)
                  .then((response) => {
                    // 이메일 전송 성공
                    console.log("이메일 / 성공 : ", response.data);
                    alert.onAndOff("메일을 전송했습니다");
                    setStep(2); // 다음 단계로
                  })
                  .catch((error) => {
                    // 전송 실패
                    console.log("이메일 / 실패 : ", error.response);
                    alert.onAndOff(error.response.data.message);
                  });
              }
            }}
          >
            인증번호 전송
          </button>
        </div>
        {step === 2 ? (
          <>
            {/* 인증번호 */}
            <div className="flex w-[300px] h-12 items-center mt-[10px]">
              <input
                id="code"
                className="w-[200px] h-full rounded-l-2xl px-4 font-medium text-sm border-[1px] border-gray-600 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="인증코드를 입력해주세요"
                value={code < 0 ? "" : code}
                type="number"
                onChange={(e) => {
                  // 입력된 인증번호 저장
                  const tmp =
                    Number(e.target.value) < 0
                      ? 0
                      : Number(e.target.value) >= 1000000
                      ? 999999
                      : Number(e.target.value);
                  setCode(tmp);
                }}
              />
              <button
                id="code_btn"
                className="w-[100px] h-full font-semibold text-white text-sm rounded-r-2xl border-gray-600 border-[1px] border-l-0 bg-gray-400 hover:shadow-figma"
                onClick={() => console.log("code check btn")}
              >
                인증번호 확인
              </button>
            </div>
            {/* 인증 유효 시간 */}
            <div
              id="remain"
              className="w-[300px] mt-1 pl-2 font-medium text-red-500"
            >
              5:00
            </div>
          </>
        ) : null}
        {step === 3 ? (
          <>
            {/* 비밀번호 */}
            <input
              id="password"
              className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 mt-[10px] placeholder:text-gray-500 placeholder:text-sm"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={info.password}
              onChange={(e) => {
                // 입력된 비밀번호 저장
                const tmp = {
                  ...info,
                  password: e.target.value,
                };
                setInfo(tmp);
              }}
            />
            {/* 비밀번호 유효성 검사 */}
            <div
              id="password_validation"
              className="w-[300px] mt-1 pl-2 text-sm font-medium text-red-500"
            >
              소문자 + 숫자 + 6자 이상
            </div>
            {/* 비밀번호 재입력 */}
            <input
              id="password_check"
              className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 mt-1 placeholder:text-gray-500 placeholder:text-sm"
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
              value={passCheck}
              onChange={(e) => {
                // 입력된 비밀번호 재입력 저장
                setPassCheck(e.target.value);
              }}
            />
            {/* 비밀번호 재입력 검사 */}
            <div
              id="password_check_validation"
              className="w-[300px] mt-1 pl-2 text-sm font-medium text-red-500"
            >
              입력한 비밀번호와 동일하지 않습니다
            </div>
            {/* 닉네임 */}
            <input
              id="nickname"
              className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 mt-1 placeholder:text-gray-500 placeholder:text-sm"
              placeholder="닉네임을 입력해주세요 (최대 6자)"
              maxLength={6}
              value={info.nickname}
              onChange={(e) => {
                // 입력된 닉네임 저장
                const tmp = {
                  ...info,
                  nickname: e.target.value,
                };
                setInfo(tmp);
              }}
            />
            {/* 전화번호 */}
            <input
              id="phone"
              className="w-[300px] h-12 rounded-2xl px-4 font-medium border-[1px] text-sm border-gray-600 mt-[10px] placeholder:text-gray-500 placeholder:text-sm"
              placeholder="전화번호를 입력해주세요"
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
            {/* 회원가입 버튼 */}
            <button
              className="w-[300px] h-12 bg-gray-600 rounded-2xl font-semibold text-white mt-4 hover:shadow-figma"
              onClick={() => console.log("signup btn")}
            >
              회원가입
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SignUp;
