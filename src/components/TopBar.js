import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";

const TopBar = () => {
  const userInfo = useRecoilValue(userAtom); // 유저 정보
  return (
    <>
      <div className="fixed top-0 z-30 flex items-center justify-center w-screen bg-gray-600 h-14">
        <div className="flex w-[1140px] justify-between items-center">
          {/* 로고, 타이틀 */}
          <div className="flex items-center">
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
          {/* 아이콘, 환영 멘트 */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
            <span className="ml-3 text-lg font-bold text-white">
              {userInfo.name} 님 와줘서 고마워요!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
