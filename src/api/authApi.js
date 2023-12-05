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
      name: info.name,
      phone: info.phone,
    },
  });
};
