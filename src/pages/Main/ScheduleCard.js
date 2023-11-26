import dayjs from "dayjs";

const ScheduleCard = ({ target }) => {
  return (
    <div className="w-[180px] h-[180px] rounded-2xl border-[1px] border-gray-600 flex flex-col">
      {/* 타이틀 */}
      <div className="flex items-center justify-around h-10 border-b-[1px] border-b-gray-600">
        <div className="flex items-center">
          {target.type ? (
            <div className="w-[10px] h-[10px] rounded-[5px] bg-schedule-play"></div>
          ) : (
            <div className="w-[10px] h-[10px] rounded-[5px] bg-schedule-escape"></div>
          )}
          <span className="font-medium ml-[10px]">{target.title}</span>
        </div>
        {/* 남은 날짜 */}
        <span className="font-medium text-red-500">
          D{dayjs(new Date()).diff(dayjs(target.when), "day")}
        </span>
      </div>
      {/* 상세 정보 */}
      <div className="w-full h-[110px] flex flex-col justify-between my-auto px-4">
        {/* 장소 */}
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.04.61 2.86l.28.28V19c0 .5.2 1 .61 1.39S4.5 21 5 21h14c.5 0 1-.2 1.39-.61S21 19.5 21 19v-6.95l.28-.28c.66-.82.86-1.77.61-2.86L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3H5.06m13.83 1.97l1.08 4.41c.09.43 0 .82-.28 1.17c-.25.31-.56.45-.94.45c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5zM5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17zm3.99 0H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5zM13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.29 1.29 0 0 1 13 9.7zm-5.55 7.05c.63.62 1.41.95 2.35.95c.84 0 1.58-.33 2.2-.95c.69.62 1.45.95 2.3.95c.87 0 1.62-.33 2.25-.95c.56.62 1.31.95 2.25.95h.23v6H5v-6h.25c.91 0 1.64-.33 2.2-.95"
            />
          </svg>
          <span className="text-sm font-medium ml-[10px]">{target.place}</span>
        </div>
        {/* 시간 */}
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
            />
          </svg>
          <span className="text-sm font-medium ml-[10px]">
            {dayjs(target.when).format("HH:mm")}
          </span>
        </div>
        {/* 방탈이라면 소요시간 아니라면 집합장소 */}
        <div className="flex">
          {target.type ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2"
                />
              </svg>
              <span className="text-sm font-medium ml-[10px]">
                {target.where}
              </span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.298 7.298 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2zM4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2zm1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2zm-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2z"
                />
              </svg>
              <span className="text-sm font-medium ml-[10px]">
                {target.howlong}
              </span>
            </>
          )}
        </div>
        {/* 몇명 */}
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"
            />
          </svg>
          <span className="text-sm font-medium ml-[10px]">
            {target.howMany}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
