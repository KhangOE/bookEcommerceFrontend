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
    <div className="flex border border-gray-200 rounded-md p-2 w-full bg-white z-20">
      <input
        onKeyDown={_handleKeyDown}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="focus:outline-0 w-full bg-white px-8"
        placeholder="Bạn tìm kiếm gì hôm nay ?"
      ></input>
      <div className="px-2 flex items-center">
        <span class="material-symbols-outlined ">search </span>
      </div>
    </div>
  );
};
