import React from "react";
import { Link } from "react-router-dom";

export const TopAuthor = () => {
  return (
    <div className="flex flex-col gap-4 md:w-[25%] w-full">
      <Link to="/products">
        <div className="flex items-center gap-6 ">
          <img
            alt="#"
            src="https://file.hstatic.net/200000510041/collection/yuval_noah_harari_57d4d5b0a63d42b7a9f57fdd57300925_thumb.jpg"
            className="w-15 h-15 border border-gray-400 rounded-full"
          ></img>
          <div className=" font-semi">Yuval Noal Harari</div>
        </div>

        <div className="flex items-center gap-6 ">
          <img
            alt="#"
            src="https://file.hstatic.net/200000510041/collection/murakami__1__63db976a5b954b42ac6daaa89dfa1634_thumb.jpg"
            className="w-15 h-15 border border-gray-400 rounded-full"
          ></img>
          <div className=" font-semi">Haruki Murakami</div>
        </div>

        <div className="flex items-center gap-6 ">
          <img
            alt="#"
            src="https://file.hstatic.net/200000510041/collection/musso__1__49c379d348a34745b34c2968da6e5f79_thumb.jpg"
            className="w-15 h-15 border border-gray-400 rounded-full"
          ></img>
          <div className=" font-semi">Guilaume Musso</div>
        </div>

        <div className="flex items-center gap-6 ">
          <img
            alt="#"
            src="https://file.hstatic.net/200000510041/collection/keigo-higashino__1__a1f0d7d9ac4b472080bf504855065714_thumb.jpeg"
            className="w-15 h-15 border border-gray-400 rounded-full"
          ></img>
          <div className=" font-semi">Higashino Keygo</div>
        </div>

        <div className="flex items-center gap-6 ">
          <img
            alt="#"
            src="https://file.hstatic.net/200000510041/collection/rosie_nguyen_101591907a2e4ed58f025f24287895a0_thumb.jpg"
            className="w-15 h-15 border border-gray-400 rounded-full"
          ></img>
          <div className=" font-semi">Rosie Nguyen</div>
        </div>
      </Link>
    </div>
  );
};
