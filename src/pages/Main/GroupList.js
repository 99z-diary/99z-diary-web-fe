import GroupCard from "./GroupCard";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  MdArrowBackIosNew,
  MdSearch,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import { useState } from "react";
import { pageUtil } from "utils/pageUtil";

const GroupList = () => {
  const [filterMenu, setFilterMenu] = useState([
    "그룹 이름",
    "그룹 장",
    "최대 인원",
  ]); // 검색 필터
  const [group, setGroup] = useState({
    name: "group name",
    owner: "group owner",
    participants: 9,
    max_patricipants: 100,
    introduce:
      "this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce this is group introduce",
  }); // 그룹 더미 데이터
  const [page, setPage] = useState(1); // 현재 page
  const [maxPage, setMaxPage] = useState(6); // 최대 page
  const util = pageUtil(); // page 관련 util

  return (
    <>
      <div className="w-[840px] h-[850px] rounded-2xl flex flex-col sticky top-24 bg-white shadow-figma">
        {/* 타이틀 */}
        <div className="flex items-center justify-center h-10 font-bold text-white bg-gray-600 rounded-t-2xl">
          그룹 목록
        </div>
        {/* 그룹 검색 */}
        <div className="flex items-center justify-center w-full mt-4">
          <div className="w-[300px] h-10 relative">
            <input className="w-full h-full px-2 pr-10 border-2 border-gray-600 rounded-full focus:outline-none" />
            <button>
              <MdSearch className="absolute w-6 h-6 text-gray-600 right-3 top-2" />
            </button>
          </div>
          {/* 검색할 필터 선택 */}
          <Menu>
            <MenuHandler>
              <button className="flex items-center justify-around px-3 ml-[10px] text-sm font-bold text-white bg-gray-600 rounded-full w-[120px] h-10">
                <span id="sort">{filterMenu[0]}</span>
                <MdArrowBackIosNew className="-rotate-90" />
              </button>
            </MenuHandler>
            <MenuList>
              {filterMenu.map((v, i) => {
                return (
                  <MenuItem
                    className="flex items-center justify-center font-semibold"
                    onClick={() => {
                      document.getElementById("sort").innerText = filterMenu[i];
                    }}
                    key={i}
                  >
                    {v}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
        {/* 그룹 리스트 */}
        <div className="grid w-full grid-cols-3 px-10 gap-y-[10px] mt-6">
          {Array(6)
            .fill(0)
            .map((v, i) => (
              <GroupCard key={i} group={group}></GroupCard>
            ))}
        </div>
        {/* 페이지 */}
        <div className="w-[280px] flex justify-between items-center mx-auto mt-6">
          <MdArrowBack
            className="text-2xl text-gray-600"
            onClick={() => {
              if (page === 1) return;
              util.getPageItems(group, page - 1);
              setPage(page - 1);
            }}
          />
          <div className="text-lg text-gray-600">
            page <span className="text-xl">{page}</span> of{" "}
            <span className="text-xl">{maxPage}</span>
          </div>
          <MdArrowForward
            className="text-2xl text-gray-600"
            onClick={() => {
              if (page === maxPage) return;
              util.getPageItems(group, page + 1);
              setPage(page + 1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GroupList;
