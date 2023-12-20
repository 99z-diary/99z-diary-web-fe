import { useNavigate } from "react-router-dom";

const BeforeTopBar = () => {
  const nav = useNavigate(); // nav 제어
  return (
    <>
      <div className="fixed top-0 z-30 flex flex-col items-center justify-center w-screen h-12 bg-bg-base border-b-[1px] border-b-border-999999 border-opacity-30">
        <div className="flex w-[1140px] justify-between items-center">
          {/* 로고, 타이틀 */}
          <div className="flex items-center" onClick={() => nav("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5c54a8"
                d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z"
              />
            </svg>
            <span className="ml-3 text-xl font-bold text-purple-600">
              99z diary
            </span>
          </div>
          {/* 로그인 전 = 환영 멘트 */}
          <span className="text-lg font-bold text-primary">
            <span className="mr-1 text-purple-600">99z diary</span>에 오신 것을
            환영합니다!!
          </span>
        </div>
      </div>
    </>
  );
};

export default BeforeTopBar;
