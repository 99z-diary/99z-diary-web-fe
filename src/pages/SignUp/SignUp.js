import { useEffect, useState, useRef } from "react";
import { useAlert } from "utils/useAlert";
import { emailCode, sendCode, checkNickname, signup } from "api/signupApi";
import { useLoading } from "utils/useLoading";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  /* 회원가입 정보 */
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    nickname: "",
    phone: "",
  }); // 회원가입 입력 정보
  const alert = useAlert(); // alert 제어
  const loading = useLoading(); // loading 제어
  const nav = useNavigate(); // nav 제어
  const [step, setStep] = useState(1); // 현재 진행 단계

  /* 이메일 인증 관련 */
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  ); // 이메일 정규표현식
  const [remain, setRemain] = useState(300); // 남은 인증 유효 시간
  const intervalRef = useRef(null); // 타이머
  const countdown = () => setRemain((r) => r - 1); // 카운트다운 함수
  const startTimer = () => (intervalRef.current = setInterval(countdown, 1000)); // 타이머 시작
  // 타이머 종료
  const finishTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  // 타이머 종속성 추가
  useEffect(() => {
    if (remain === 0) {
      finishTimer();
    }
  }, [remain]);
  const [code, setCode] = useState(0); // 인증코드 저장

  /* 비밀번호 관련 */
  const passwordRegex = new RegExp("((?=.*[a-z])(?=.*\\d).{6,})");
  const [passCheck, setPassCheck] = useState(""); // 확인용 비밀번호
  const [passState, setPassState] = useState(false); // 비밀번호 입력 검증
  useEffect(() => {
    const password = document.getElementById("password_validation");
    if (password) {
      if (passwordRegex.test(info.password)) {
        password.classList.remove("text-red-500");
        password.classList.add("text-green-600");
        setPassState(false);
      } else {
        password.classList.remove("text-green-600");
        password.classList.add("text-red-500");
        setPassState(false);
      }
    }
  }, [info.password]);
  useEffect(() => {
    const check = document.getElementById("password_check_validation");
    if (check) {
      if (info.password === passCheck) {
        check.classList.remove("text-red-500");
        check.classList.add("text-green-600");
        check.innerText = "입력한 비밀번호와 동일합니다";
        setPassState(true);
      } else {
        check.classList.remove("text-green-600");
        check.classList.add("text-red-500");
        check.innerText = "입력한 비밀번호와 동일하지 않습니다";
        setPassState(false);
      }
    }
  }, [passCheck]);

  /* 닉네임 관련 */
  const [nickState, setNickState] = useState(false);
  useEffect(() => {
    const nickname = document.getElementById("nickname_validation");
    if (nickname) {
      if (info.nickname.length > 6) {
        nickname.classList.remove("text-green-600");
        nickname.classList.add("text-red-500");
        nickname.innerText = "닉네임은 최대 6자 가능합니다";
        setNickState(false);
      } else {
        nickname.classList.remove("text-red-500");
        nickname.classList.add("text-green-600");
        nickname.innerText = "입력가능한 닉네임입니다";
        setNickState(true);
      }
    }
  }, [info.nickname]);

  /* 전화번호 관련 */
  const phoneRegex = new RegExp("(^(\\d{2,3})-(\\d{3,4})-(\\d{4})$)");
  const [phoneState, setPhoneState] = useState(false);
  useEffect(() => {
    const phone = document.getElementById("phone_validation");
    if (phone) {
      if (phoneRegex.test(info.phone)) {
        phone.classList.remove("text-red-500");
        phone.classList.add("text-green-600");
        phone.innerText = "올바른 형식의 전화번호가 입력되었습니다";
        setPhoneState(true);
      } else {
        phone.classList.remove("text-green-600");
        phone.classList.add("text-red-500");
        phone.innerText = "맞지 않은 형식의 전화번호입니다";
        setPhoneState(false);
      }
    }
  }, [info.phone]);
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
            onClick={() => {
              setStep(1); // 이메일 인증 단계로 초기화
              // 비어있는 이름 or 이메일
              if (info.name.trim() === "" || info.email.trim() === "")
                alert.onAndOff("모든 항목을 입력해주세요!!");
              // 아이디는 이메일
              else if (!emailRegex.test(info.email))
                alert.onAndOff("이메일 형식으로 입력해주세요!!");
              else {
                loading.onAndOff(true); // 로딩 시작
                emailCode(info.email)
                  .then((response) => {
                    // 이메일 전송 성공
                    console.log("이메일 / 성공 : ", response.data);
                    alert.onAndOff("메일을 전송했습니다");
                    loading.onAndOff(false); // 로딩 종료
                    setStep(2); // 다음 단계로
                    setRemain(300); // 타이머 시간 초기화
                    startTimer(); // 타이머 시작
                  })
                  .catch((error) => {
                    // 전송 실패
                    console.log("이메일 / 실패 : ", error.response);
                    alert.onAndOff(error.response.data.message);
                    loading.onAndOff(false);
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
                onClick={() => {
                  // 비어있는 이메일
                  if (info.email.trim() === "")
                    alert.onAndOff("모든 항목을 입력해주세요!!");
                  // 유효 시간 종료
                  else if (remain === 0)
                    alert.onAndOff("유효하지 않은 인증코드입니다!!");
                  else {
                    sendCode(info.email, code) // 코드 인증
                      .then((response) => {
                        console.log("인증 / 성공 : ", response.data);
                        document.getElementById("email").readOnly = true;
                        document.getElementById("send_btn").disabled = true;
                        alert.onAndOff("이메일 인증에 성공했습니다");
                        loading.onAndOff(false);
                        setStep(3);
                      })
                      .catch((error) => {
                        console.log("인증 / 실패 : ", error.response);
                        alert.onAndOff(error.response.data.message);
                      });
                  }
                }}
              >
                인증번호 확인
              </button>
            </div>
            {/* 인증 유효 시간 */}
            <div
              id="remain"
              className="w-[300px] mt-1 pl-2 font-medium text-red-500"
            >
              {Math.floor(remain / 60)}:{remain % 60}
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
            {/* 닉네임 입력 검사 */}
            <div
              id="nickname_validation"
              className="w-[300px] mt-1 pl-2 text-sm font-medium text-red-500"
            >
              닉네임은 최대 6자만 가능합니다
            </div>
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
            {/* 전화번호 입력 검사 */}
            <div
              id="phone_validation"
              className="w-[300px] mt-1 pl-2 text-sm font-medium text-red-500"
            >
              맞지 않은 형식의 전화번호입니다
            </div>
            {/* 회원가입 버튼 */}
            <button
              className="w-[300px] h-12 bg-gray-600 rounded-2xl font-semibold text-white mt-4 hover:shadow-figma"
              onClick={async () => {
                // 비어있는 항목 확인
                if (
                  info.name.trim() === "" ||
                  info.email.trim() === "" ||
                  info.password.trim() === "" ||
                  passCheck.trim() === "" ||
                  info.nickname.trim() === "" ||
                  info.phone.trim() === ""
                )
                  alert.onAndOff("모든 항목을 입력해주세요!!");
                else if (!passState)
                  alert.onAndOff("비밀번호의 검증이 완료되지 않았습니다!!");
                else if (!nickState)
                  alert.onAndOff("닉네임의 검증이 완료되지 않습니다!!");
                else if (!phoneState)
                  alert.onAndOff("전화번호의 검증이 완료되지 않았습니다!!");
                else {
                  loading.onAndOff(true);
                  await checkNickname(info.nickname)
                    .then(async (cn_response) => {
                      console.log("중복 / 성공 : ", cn_response.data);
                      await signup(info)
                        .then((su_response) => {
                          console.log("회원가입 / 성공 : ", su_response.data);
                          loading.onAndOff(false);
                          alert.onAndOff(
                            "회원가입에 성공했습니다. 로그인해주세요"
                          );
                          nav("/");
                        })
                        .catch((error) => {
                          console.log("회원가입 / 실패 : ", error.response);
                          alert.onAndOff(error.response.data.message);
                          loading.onAndOff(false);
                        });
                    })
                    .catch((error) => {
                      console.log("중복 / 실패 : ", error.response);
                      alert.onAndOff(error.response.data.message);
                      loading.onAndOff(false);
                    });
                }
              }}
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
