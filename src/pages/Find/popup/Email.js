import { usePopup } from "utils/usePopup";

const Email = ({ name, email }) => {
  const popUpEmail = usePopup("Find/Email"); // 팝업 제어
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="w-[350px] h-[250px] rounded-2xl flex flex-col justify-center items-center bg-white">
        <div className="flex text-2xl font-bold">
          <span className="text-9a8c98">{name}</span> 님의 이메일은
        </div>
        <span className="text-2xl font-bold text-9a8c98">{email}</span>
        <button
          className="w-[230px] h-10 rounded-2xl bg-gray-600 font-bold text-white mt-10"
          onClick={() => popUpEmail.toggle()}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Email;
