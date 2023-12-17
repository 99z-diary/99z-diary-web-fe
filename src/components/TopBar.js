import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";

const TopBar = () => {
  const userInfo = useRecoilValue(userAtom); // user 정보
  const nav = useNavigate(); // nav 제어
  return (
    <>
      <div className="fixed top-0 z-30 flex items-center justify-center w-screen h-12 bg-gray-600">
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
                fill="white"
                d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z"
              />
            </svg>
            <span className="ml-3 text-lg font-bold text-white">99z diary</span>
          </div>
          {userInfo.user_id < 0 ? (
            <>
              {/* 로그인 전 = 환영 멘트 */}
              <span className="text-lg font-bold text-white">
                99z diary 에 오신 것을 환영합니다!!
              </span>
            </>
          ) : (
            <div className="flex">
              {/* 로그인 후 = 메뉴 버튼 */}
              <span className="mr-6 text-lg font-bold text-white">
                {userInfo.nickname}님 환영합니다!!
              </span>
              <button className="flex hover:shadow-figma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="white"
                    d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0M10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold text-white">
                  마이페이지
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
