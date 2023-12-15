import api from "./interceptors";

/**
 * 이메일 인증코드 메일 전송
 * @param {string} email 입력한 이메일
 */
export const emailCode = (email) => {
  return api({
    url: "/signup/emailcode",
    method: "post",
    data: {
      email: email,
    },
  });
};
