import { usePopup } from "utils/usePopup";

const Password = ({ email }) => {
  const popUpPassword = usePopup("Find/Password"); // 팝업 제어
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="w-[350px] h-[250px] rounded-2xl flex flex-col justify-center items-center bg-white">
        <div className="flex text-2xl font-bold">
          <span className="text-9a8c98">{email}</span> 로
        </div>
        <span className="text-2xl font-bold">
          임시 비밀번호를 전송하였습니다
        </span>
        <button
          className="w-[230px] h-10 rounded-2xl bg-gray-600 font-bold text-white mt-10"
          onClick={() => popUpPassword.toggle()}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Password;
