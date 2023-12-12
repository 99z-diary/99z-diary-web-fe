import { useAlert } from "utils/useAlert";

const GroupCard = ({ group }) => {
  const alert = useAlert(); // alert 제어
  return (
    <div className="w-[240px] h-[320px] rounded-[10px] border-[1px] border-gray-600 flex flex-col hover:shadow-figma">
      {/* 그룹 사진 */}
      <img
        src=""
        alt="그룹 사진"
        className="w-full h-[140px] object-cover border-b-[1px] border-b-gray-600"
      />
      {/* 그룹 정보 */}
      <div className="flex flex-col justify-between h-[180px] w-60 pt-2 pb-1">
        {/* 그룹 이름 */}
        <div className="flex items-center w-full pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="#4b5563"
                d="M10.537 2.164a3 3 0 0 1 2.244.727l.15.14l7.822 7.823a3 3 0 0 1 .135 4.098l-.135.144l-5.657 5.657a3 3 0 0 1-4.098.135l-.144-.135L3.03 12.93a3 3 0 0 1-.878-2.188l.011-.205l.472-5.185a3 3 0 0 1 2.537-2.695l.179-.021l5.185-.472Zm.308 1.989l-.127.003l-5.185.472a1 1 0 0 0-.888.787l-.017.118l-.472 5.185a1 1 0 0 0 .206.703l.083.095l7.823 7.823a1 1 0 0 0 1.32.083l.094-.083l5.657-5.657a1 1 0 0 0 .083-1.32l-.083-.094l-7.823-7.823a1 1 0 0 0-.671-.292ZM7.317 7.318a3 3 0 1 1 4.243 4.243a3 3 0 0 1-4.243-4.243Zm2.829 1.414a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414Z"
              />
            </g>
          </svg>
          <span className="ml-[10px] text-sm font-bold text-9a8c98">
            {group.name}
          </span>
        </div>
        {/* 그룹 장 */}
        <div className="flex items-center w-full pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="#4b5563"
              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
            />
          </svg>
          <span className="ml-[10px] text-sm font-bold text-9a8c98">
            {group.owner}
          </span>
        </div>
        {/* 그룹 인원 수 */}
        <div className="flex items-center w-full pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="#4b5563"
              d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.508 5.508 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05A3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018a5.01 5.01 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.752.752 0 0 1-.549-.514a3.507 3.507 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
            />
          </svg>
          <span className="ml-[10px] text-sm font-bold text-9a8c98">
            {group.participants}명 / {group.max_patricipants}명
          </span>
        </div>
        {/* 그룹 소개 */}
        <div className="flex w-full px-4 items-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4b5563"
              fillRule="evenodd"
              d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14ZM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="w-full">
            <span className="ml-[10px] text-sm font-bold break-all text-9a8c98 line-clamp-3">
              {group.introduce}
            </span>
          </div>
        </div>
        {/* 가입 신청 버튼 */}
        <div className="flex justify-end">
          <button
            className="flex items-center mr-2"
            onClick={() => {
              alert.onAndOff("로그인 후에 신청해주세요!!");
            }}
          >
            <span className="mr-1 text-xs font-semibold text-postcard-else">
              가입 신청
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

export default GroupCard;
