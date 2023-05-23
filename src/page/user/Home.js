import React from "react";
import { SlideCategories } from "../../components/user/slideCategory";
import { useDispatch } from "react-redux";
import { SlideShow } from "../../components/user/slideHome";
import { useEffect } from "react";

import { getProductApi } from "../../api/productsApi";

import { Link } from "react-router-dom";
import { ProductSeenCard } from "../../components/user/product/productSeenCart";
import { useState } from "react";
import { TopAuthor } from "../../components/user/Home/topAuthor";

export const Home = (props) => {
  const [seens, setSeens] = useState([]);

  useEffect(() => {
    const seen = JSON.parse(localStorage.getItem("seen"));
    if (seen) {
      setSeens(seen);
    }
  }, []);
  return (
    <>
      <div className="w-full relative ">
        <div className="w-[92%] m-auto relative">
          <div className="border-b border-violet-600  bg-opacity-90 lg:absolute z-40 lg:w-[800px] w-full h-fit md:h-[40px] bg-gray-50 left-0 top-0 right-0 m-auto flex justify-between px-8 py-2 font-bold text-gray-600 flex-col md:flex-row">
            {/* <div onClick={add2} className="cursor-pointer">
              <div> SÁCH ĐÃ XEM</div>
            </div> */}
            <div>
              <button class="peer  ">SÁCH ĐÃ XEM</button>

              {/* <!-- the menu here --> */}
              <div
                class="hidden absolute peer-hover:flex hover:flex 
          bg-white drop-shadow-lg gap-4"
              >
                {seens.slice(0, 5).map((i) => {
                  return <ProductSeenCard id={i}></ProductSeenCard>;
                })}
              </div>
            </div>
            <Link to="/products">
              <div className="cursor-pointer">SÁCH MỚI PHÁT HÀNH</div>
            </Link>
            <Link to="/products">
              <div className="cursor-pointer">TẤT CẢ SẢN PHẨM</div>{" "}
            </Link>
          </div>

          <SlideShow></SlideShow>

          {/* banner */}
          <div className="w-full flex flex-col lg:flex-row  justify-center gap-8 my-8">
            <img
              alt="d"
              src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img1.png?v=228"
            ></img>
            <img
              alt="d"
              src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img2.png?v=228"
            ></img>
            <img
              alt="d"
              src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img3.png?v=228"
            ></img>
          </div>

          <SlideCategories></SlideCategories>

          {/* auther and top product */}
          <div className="flex mt-8 flex-col md:flex-row">
            {/* author */}
            <TopAuthor></TopAuthor>

            {/* top product  */}
            <div className="w-full md:w-[75%]">
              {/* header */}
              <div className=" flex justify-between">
                <div className="font-bold text-xl hidden lg:block">
                  {" "}
                  Được bán chạy nhiều nhất
                </div>
              </div>

              {/* content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-300 w-full min-h-[150px] flex p-2">
                  <img
                    className="w-[40%]"
                    alt="d"
                    src="https://product.hstatic.net/200000510041/product/21_bai_hoc_cho_the_ky_21-01_66601937afef4738a79c910a652933cd_20ba62fa945b491ea91a773390970d5b_medium.jpg"
                  ></img>
                  <div className="flex flex-col gap-2">
                    <div className="uppercase font-bold ">
                      {" "}
                      21 bài học cho thế kỉ 21
                    </div>
                    <div className="flex gap-4 ">
                      <div className="text-green-600 font-bold">200.000 đ</div>
                      <div className="text-gray-300 font-bold line-through">
                        280.000 đ
                      </div>
                    </div>
                    <div>
                      Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi
                      khám phá ra những điều khiến cuộc đời này đáng sống… một
                      tác phẩm kinh điển của Brazil.
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 w-full min-h-[150px] flex p-2 ">
                  <img
                    className="w-[40%] "
                    alt="d"
                    src="https://product.hstatic.net/200000510041/product/chi_tuong_la_minh_dang_rat_co_gang-01_e9ec59a08b814aaab952231f00ac036c_483c22c72fc54d768af4e19b0efaf5c9_compact.jpg"
                  ></img>
                  <div className="flex flex-col gap-2">
                    <div className="uppercase font-bold ">
                      {" "}
                      BẠN CHỈ TƯỞNG LÀ MÌNH ĐANG RẤT CỐ GẮNG
                    </div>
                    <div className="flex gap-4 ">
                      <div className="text-green-600 font-bold">200.000 đ</div>
                      <div className="text-gray-300 font-bold line-through">
                        98,400 đ
                      </div>
                    </div>
                    <div>
                      "Trông bề ngoài ngày nào cũng thức khuya, nhưng lại chỉ
                      cầm điện thoại like dạo; trông bề ngoài đi học thật sớm,
                      nhưng trong giảng đường lại chỉ ngủ bù giấc đêm qua, trông
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 w-full min-h-[150px] flex p-2">
                  <img
                    className="w-[40%]"
                    alt="d"
                    src="https://product.hstatic.net/200000510041/product/bi_quyet_ung_tuyen_vao_harvard-01_94e81f0c50284be2b009038da6d01e09_a8912a7779a1488ebc1b178a3520cf73_compact.jpg"
                  ></img>
                  <div className="flex flex-col gap-2">
                    <div className="uppercase font-bold ">
                      {" "}
                      BÍ QUYẾT ỨNG TUYỂN VÀO HARVARD
                    </div>
                    <div className="flex gap-4 ">
                      <div className="text-green-600 font-bold">72,000 đ</div>
                      <div className="text-gray-300 font-bold line-through">
                        72,000
                      </div>
                    </div>
                    <div>
                      Có phải mọi sinh viên Harvard đều là thiên tài? Cơ hội nào
                      dành cho các ứng viên “bình thường” nhưng có chí cầu tiến?
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 w-full min-h-[150px] flex p-2">
                  <img
                    className="w-[40%]"
                    alt="d"
                    src="https://product.hstatic.net/200000510041/product/18_phat_minh-01_93912a46d3e74530941bae4df678ace7_3b6a8d95011842aba6d720f1913bd77f_compact.jpg"
                  ></img>
                  <div className="flex flex-col gap-2">
                    <div className="uppercase font-bold ">
                      {" "}
                      18 PHÁT MINH VĨ ĐẠI
                    </div>
                    <div className="flex gap-4 ">
                      <div className="text-green-600 font-bold">200.000 đ</div>
                      <div className="text-gray-300 font-bold line-through">
                        380.000 đ
                      </div>
                    </div>
                    <div>
                      Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi
                      khám phá ra những điều khiến cuộc đời này đáng sống… một
                      tác phẩm kinh điển của Brazil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
