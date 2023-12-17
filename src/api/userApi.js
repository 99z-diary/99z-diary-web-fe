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

/**
 * 이메일 찾기
 * @param {object} info 찾아볼 유저의 정보
 */
export const findEmail = (info) => {
  return api({
    url: "/user/find/email",
    method: "get",
    params: {
      name: info.name,
      phone: info.phone,
    },
  });
};

/**
 * 비밀번호 찾기
 * @param {object} info 찾아볼 유저의 정보
 */
export const findPassword = (info) => {
  return api({
    url: "/user/find/password",
    method: "post",
    data: {
      email: info.email,
      name: info.name,
      phone: info.phone,
    },
  });
};
