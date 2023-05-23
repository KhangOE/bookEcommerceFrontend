import React from "react";
import { moneyFormatter } from "../../../helper/moneyFormatter";

export const ReleventProduct = () => {
  return (
    <div className="w-full">
      <div className="bg-[rgb(15,85,50)] text-white text-lg text-center px-4 py-2">
        SẢN PHẨM LIÊN QUAN
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <div className="w-[30%]">
            <img
              className="w-full"
              src="https://product.hstatic.net/200000510041/product/buc_tranh_dep_nhat_lich_su_hoi_hoa-03_403ca67c6cce4dee9bf223256e61190d_490a0ddb0ac5487db43d2dc83050cb18_small.jpg"
            ></img>
          </div>

          <div></div>
          <div className="flex-1 uppercase  font-bold text-sm p-2  gap-2">
            <div>1 năm bằng mười năm</div>
            <div>{moneyFormatter(399999)}</div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-[30%]">
            <img
              className="w-full"
              src="https://product.hstatic.net/200000510041/product/buc_tranh_dep_nhat_lich_su_hoi_hoa-03_403ca67c6cce4dee9bf223256e61190d_490a0ddb0ac5487db43d2dc83050cb18_small.jpg"
            ></img>
          </div>

          <div></div>
          <div className="flex-1 uppercase  font-bold text-sm p-2  gap-2">
            <div>1 năm bằng mười năm</div>
            <div>{moneyFormatter(399999)}</div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-[30%]">
            <img
              className="w-full"
              src="https://product.hstatic.net/200000510041/product/buc_tranh_dep_nhat_lich_su_hoi_hoa-03_403ca67c6cce4dee9bf223256e61190d_490a0ddb0ac5487db43d2dc83050cb18_small.jpg"
            ></img>
          </div>

          <div></div>
          <div className="flex-1 uppercase  font-bold text-sm p-2  gap-2">
            <div>1 năm bằng mười năm</div>
            <div>{moneyFormatter(399999)}</div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-[30%]">
            <img
              className="w-full"
              src="https://product.hstatic.net/200000510041/product/buc_tranh_dep_nhat_lich_su_hoi_hoa-03_403ca67c6cce4dee9bf223256e61190d_490a0ddb0ac5487db43d2dc83050cb18_small.jpg"
            ></img>
          </div>

          <div></div>
          <div className="flex-1 uppercase  font-bold text-sm p-2  gap-2">
            <div>1 năm bằng mười năm</div>
            <div>{moneyFormatter(399999)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
