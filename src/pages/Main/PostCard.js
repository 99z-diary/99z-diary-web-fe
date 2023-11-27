import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const PostCard = ({ target }) => {
  return (
    <div className="w-[240px] h-[320px] rounded-[10px] border-[1px] border-gray-600 flex flex-col hover:shadow-figma">
      {/* 썸네일 사진 */}
      <img
        src=""
        alt="사진"
        className="w-full h-[140px] object-cover border-b-[1px] border-b-gray-600"
      />
      {/* 간단 내용 */}
      <div className="flex flex-col justify-between w-[220px] h-[160px] mx-auto mt-[10px]">
        {/* 날짜 */}
        <span className="text-lg font-bold text-postcard-else">
          {dayjs(target.updated).format("YY.MM.DD(ddd) HH:mm")}
        </span>
        {/* 내용 */}
        <p className="-mt-6 text-sm font-semibold break-all text-postcard-contents line-clamp-4">
          {target.contents}
        </p>
        {/* 상세 보기 버튼 */}
        <div className="flex justify-end">
          <button className="flex items-center mr-2">
            <span className="mr-1 text-xs font-semibold text-postcard-else">
              상세 보기
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <g transform="rotate(90 12 12)">
                <path
                  fill="none"
                  stroke="#4a4e69"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v14m6-8l-6-6m-6 6l6-6"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
