import api from "./interceptors";

/**
 * 쿠키 인증 api
 */
export const authenticate = () => {
  return api({
    url: "/auth/authenticate",
    method: "get",
  });
};
