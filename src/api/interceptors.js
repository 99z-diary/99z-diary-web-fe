import axios from "axios";

/* axios 기본 세팅 (인스턴스 이름 api) */
export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/* request interceptor */
api.interceptors.request.use(
  /* request 보내기 전 axios (추가) 설정 가능 */
  (config) => config,
  /* request 오류 발생 */
  (error) => Promise.reject(error)
);

/* response interceptor */
api.interceptors.response.use(
  /* response 수신 성공 */
  (response) => response,
  /* response 수신 실패 */
  (error) => Promise.reject(error)
);

export default api;
