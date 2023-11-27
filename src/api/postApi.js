import axios from "axios";

/**
 * 최근 게시글 조회 api
 * @returns {promise} 게시글 리스트 or 빈 리스트
 */
export const getRecentPost = async () => {
  return await axios.get(`${process.env.REACT_APP_BACK_URL}/posts/recent/3`);
};
