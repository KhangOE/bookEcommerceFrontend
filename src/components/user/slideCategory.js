import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slideCategory.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import useWindowDimensions from "../../hook/useDemension";
import SwiperCore from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/loadProductSlice";
import { moneyFormatter } from "../../helper/moneyFormatter";
import { Link } from "react-router-dom";

export function SlideCategories() {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [slideView, setSlideView] = useState(width / 550 + 2);
  const { product } = useSelector((state) => state.loadProduct);
  useEffect(() => {
    dispatch(
      getProduct({
        author: [],
        rating: 1,
        category: [],
        priceFrom: null,
        priceTo: null,
        sorting: 2,
      })
    );
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);
  useEffect(() => {
    console.log(width);
    if (width < 500) {
      setSlideView(3);
    } else if (width >= 500 && width < 1000) {
      setSlideView(4);
      console.log(width);
    } else if (width > 1000) {
      setSlideView(5);
    }
  }, [width]);

  useEffect(() => {
    console.log(width);
    if (width < 500) {
      setSlideView(1);
    } else if (width >= 500 && width < 1000) {
      setSlideView(2);
      console.log(width);
    } else {
      setSlideView(5);
    }
  }, []);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={slideView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={false}
        loop={true}
        speed={5000}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {product?.slice(0, 15).map((p) => {
          return (
            <SwiperSlide>
              <Link to={"/products/" + p._id}>
                <div className="w-full p-4 flex flex-col border border-gray-300 justify-end h-[300px] w-full">
                  <div className=" overflow-hidden flex items-center ">
                    <img className=" w-[full]" src={p.imageUrl}></img>
                  </div>

                  <div>{p.title}</div>
                  <div className="flex justify-between">
                    <div className="text-green-600 font-bold">
                      {moneyFormatter(p.price)}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
