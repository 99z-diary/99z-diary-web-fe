import axios from "axios";

/**
 * 로그인 api
 * @param {*} info 유저의 아이디, 비밀번호
 * @returns {object} 유저 정보 or fail
 */
export const login = async (info) => {
  const result = await axios
    .post(`${process.env.REACT_APP_BACK_URL}/user/login`, {
      name: info.name,
      phone: info.phone,
    })
    .then((response) => {
      if (response) return response.data.uid;
      else return false;
    })
    .catch((error) => error);
  return result;
};
