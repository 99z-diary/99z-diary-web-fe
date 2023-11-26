import PostCard from "./PostCard";
import ScheduleCard from "./ScheduleCard";
import { postAtom } from "recoil/postAtom";
import { scheduleAtom } from "recoil/scheduleAtom";
import { useRecoilValue } from "recoil";

const Contents = () => {
  const post = useRecoilValue(postAtom); // 게시글 더미 데이터
  const schedule = useRecoilValue(scheduleAtom); // 스케줄 더미 데이터
  return (
    <div className="w-[840px] h-[800px] rounded-2xl flex flex-col sticky top-24 bg-white shadow-figma">
      {/* 타이틀 */}
      <div className="flex items-center justify-center h-10 font-bold text-white bg-gray-600 rounded-t-2xl">
        메인 화면
      </div>
      {/* 최근 글 */}
      <div className="flex flex-col mx-auto mt-10 w-[784px]">
        <span className="font-bold text-[28px] text-main-title mx-auto">
          최근 글
        </span>
        <div className="flex items-center justify-between w-full mt-4">
          {post.map((v, i) => {
            console.log(v);
            return <PostCard key={i} target={v} />;
          })}
        </div>
      </div>
      {/* 가까운 일정 */}
      <div className="flex flex-col mx-auto mt-9 w-[784px]">
        <span className="font-bold text-[28px] text-main-title mx-auto">
          디데이 (가까운 날의 방탈 or 놀 계획)
        </span>
        <div className="flex items-center justify-between w-full mt-4">
          {schedule.map((v, i) => {
            return <ScheduleCard key={i} target={v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
