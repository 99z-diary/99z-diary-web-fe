import api from "./interceptors";

/**
 * 최근 게시글 조회 api
 */
export const getRecentPost = async () => {
  return api({
    url: "/post",
    method: "get",
    params: {
      cnt: 3,
    },
  });
};
