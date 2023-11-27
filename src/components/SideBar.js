import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mainSelector } from "recoil/categoryAtom";

const SideBar = () => {
  const [main, setMain] = useRecoilState(mainSelector); // main category 제어
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      const target = document.getElementById(i); // 특정 버튼 선택
      target.className = ""; // className 초기화
      target.classList.add(
        "w-11/12",
        "h-[33px]",
        "border-b-2",
        "font-semibold",
        "mx-auto",
        "mt-4"
      ); // 공통 스타일
      if (i === main)
        target.classList.add("border-b-gray-600", "text-xl", "text-gray-600");
      // 선택된 경우의 style
      else target.classList.add("border-b-gray-400", "text-gray-300"); // 선택되지 않은 경우의 style
    }
  }, [main]);
  return (
    <div className="w-[250px] h-[350px] rounded-2xl flex flex-col sticky top-24 bg-white shadow-figma">
      {/* 타이틀 */}
      <div className="flex items-center justify-center h-10 font-bold text-white bg-gray-600 rounded-t-2xl">
        Menu
      </div>
      {/* 메인 화면 */}
      <button id={0} className="" onClick={() => setMain(0)}>
        메인 화면
      </button>
      {/* 전체 게시글 */}
      <button id={1} className="" onClick={() => setMain(1)}>
        전체 게시글
      </button>
      {/* 스케줄러 */}
      <button id={2} className="" onClick={() => setMain(2)}>
        스케줄러
      </button>
      {/* 마이페이지 */}
      <button id={3} className="" onClick={() => setMain(3)}>
        마이페이지
      </button>
    </div>
  );
};

export default SideBar;
