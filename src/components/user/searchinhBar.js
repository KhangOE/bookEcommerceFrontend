import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchinhBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search && navigate("/search/" + search, { state: { query: search } });
    }
  };
  return (
    <div className="flex border border-gray-200 rounded-md p-2 mx-8">
      <div className="px-2 flex items-center">
        <span class="material-symbols-outlined ">search </span>
      </div>
      <input
        onKeyDown={_handleKeyDown}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="focus:outline-0 w-[450px]"
        placeholder="Bạn tìm kiếm gì hôm nay ?"
      ></input>
      <div className="border-l border-gray-300 pl-4"> Tìm kiếm</div>
    </div>
  );
};
