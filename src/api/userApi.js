import api from "./interceptors";

/**
 * 로그인 api
 * @param {*} info 유저의 아이디, 비밀번호
 */
export const login = (info) => {
  return api({
    url: "/user/login",
    method: "post",
    data: {
      email: info.email,
      password: info.password,
    },
  });
};

/**
 * 유저 기본정보 조회 api
 */
export const getUserInfo = () => {
  return api({
    url: "/user/profile",
    method: "get",
  });
};
