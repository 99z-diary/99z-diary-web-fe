import axios from "axios";

/**
 * 가까운 스케줄 조회 api
 * @returns {promise} 스케줄 리스트 or 빈 리스트
 */
export const getRecentSchedule = async () => {
  return await axios.get(
    `${process.env.REACT_APP_BACK_URL}/schedules/recent/3`
  );
};
