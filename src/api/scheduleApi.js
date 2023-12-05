import api from "./interceptors";

/**
 * 최근 스케줄 조회 api
 */
export const getRecentSchedule = async () => {
  return api({
    url: "/schedule",
    method: "get",
    params: {
      cnt: 3,
    },
  });
};
