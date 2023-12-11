import { alertAtom } from "recoil/alertAtom";
import { useRecoilValue } from "recoil";

const Alert = () => {
  const alertMsg = useRecoilValue(alertAtom).msg; // 알림창 메세지
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-20 z-50 flex items-center justify-center w-[900px] h-10 rounded-full bg-gray-600 text-white font-bold mx-auto">
      {alertMsg}
    </div>
  );
};

export default Alert;
