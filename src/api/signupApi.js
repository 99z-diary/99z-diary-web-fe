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

/**
 * 인증코드 인증
 * @param {number} code 입력한 인증코드
 */
export const sendCode = (email, code) => {
  return api({
    url: "/signup/verifycode",
    method: "put",
    params: {
      code: code,
    },
    data: {
      email: email,
    },
  });
};

/**
 * 닉네임 중복 확인
 * @param {string} nickname 입력한 닉네임
 */
export const checkNickname = (nickname) => {
  return api({
    url: "/signup/nickname",
    method: "post",
    data: {
      nickname: nickname,
    },
  });
};

/**
 * 최종 회원가입
 * @param {object} info 회원가입할 사용자 정보
 */
export const signup = (info) => {
  return api({
    url: "/signup",
    method: "post",
    data: {
      email: info.email,
      name: info.name,
      password: info.password,
      nickname: info.nickname,
      phone: info.phone,
    },
  });
};
