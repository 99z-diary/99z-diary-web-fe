import PostCard from "./PostCard";
import ScheduleCard from "./ScheduleCard";
import Alert from "popup/Alert";
import { getRecentPost } from "api/postApi";
import { getRecentSchedule } from "api/scheduleApi";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import { useAlert } from "utils/useAlert";

const Contents = () => {
  const [posts, setPosts] = useState([]); // 최근 게시글 리스트
  const [schedules, setSchedules] = useState([]); // 가까운 스케줄 리스트
  const alert = useAlert(); // alert 제어
  useEffect(() => {
    // 최근 게시글 조회
    getRecentPost()
      .then((response) => {
        const tmp = [...response.data];
        setPosts(tmp);
      })
      .catch((error) => {
        alert.onAndOff("최근 게시글 조회에 실패했습니다");
        console.log(error);
      });
    // 가까운 스케줄 조회
    getRecentSchedule()
      .then((response) => {
        const tmp = [...response.data];
        setSchedules(tmp);
      })
      .catch((error) => {
        alert.onAndOff("디데이 스케줄 조회에 실패했습니다");
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-[840px] h-[800px] rounded-2xl flex flex-col sticky top-24 bg-white shadow-figma">
        {/* 타이틀 */}
        <div className="flex items-center justify-center h-10 font-bold text-white bg-gray-600 rounded-t-2xl">
          메인 화면
        </div>
        {/* 최근 글 */}
        <div className="flex flex-col mx-auto mt-5 w-[784px]">
          <span className="font-bold text-[28px] text-main-title mx-auto">
            최근 글
          </span>
          <div className="grid w-full grid-cols-3 mt-4 gap-x-8">
            {!posts.length ? (
              <div className="col-span-3 w-full h-[320px] flex justify-center items-center font-bold text-3xl">
                최근 게시글이 없습니다
              </div>
            ) : (
              posts.map((v, i) => <PostCard key={i} target={v} />)
            )}
          </div>
        </div>
        {/* 가까운 스케줄 */}
        <div className="flex flex-col mx-auto mt-9 w-[784px]">
          <span className="font-bold text-[28px] text-main-title mx-auto">
            디데이
          </span>
          <div className="grid w-full grid-cols-3 mt-4 gap-x-5">
            {!schedules.length ? (
              <div className="col-span-3 w-full h-[180px] flex justify-center items-center font-bold text-3xl">
                디데이 스케줄이 없습니다
              </div>
            ) : (
              schedules.map((v, i) => <ScheduleCard key={i} target={v} />)
            )}
          </div>
        </div>
      </div>
      {useRecoilValue(alertAtom).state && <Alert />}
    </>
  );
};

export default Contents;
