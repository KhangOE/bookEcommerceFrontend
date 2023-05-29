import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/slice/authSlide";
import { useDispatch } from "react-redux";
import { useCart } from "../../context/cartContext";
import { ThemeContext2 } from "../../context/themeContext";
import { SearchinhBar as SearchBar } from "./searchinhBar";
export const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  //const { cart } = useSelector((state) => state.cart);
  const { lengthCart, setCart } = useCart();
  const [showSearch, setShowShearch] = useState(false);
  useEffect(() => {
    if (currentUser) {
      const cart = JSON.parse(localStorage.getItem(currentUser?._id) || "[]");
      if (cart) {
        setCart(cart);
      }
    }
  }, [currentUser]);
  // useEffect(() => {
  //   console.log("cart 2 ", cart2);
  // }, [cart2]);
  // useEffect(() => {
  //   dispatch(getCart());
  // }, []);
  return (
    <>
      <div className="bg-white  relative z-[8]">
        <div className="w-full h-1 bg-violet-600"></div>
        <div className="flex min-h-[80px] items-center md:pl-16 pl-3 gap-6 ">
          <Link to="/" className="lg:mr-16">
            <img className="w-[135px]" src="/dinobb.png"></img>
          </Link>
          {showSearch && (
            <div className="flex  absolute  w-full h-[80px] bg-violet-300">
              <div
                className="w-[15%] text-white flex justify-center items-center"
                onClick={() => {
                  setShowShearch((state) => !state);
                }}
              >
                <span className=" text-4xl font-bold text-cyan-500 material-symbols-outlined">
                  arrow_back
                </span>
              </div>
              <div className="w-[70%]  flex items-center ">
                {" "}
                <SearchBar></SearchBar>
              </div>
            </div>
          )}

          <div className="hidden md:block lg:mr-96">
            <SearchBar></SearchBar>
          </div>

          <Link to="/cart" className="relative lg:mr-16">
            <span class="material-symbols-outlined text-violet-500 p-2 rounded-md hover:bg-violet-100 ">
              shopping_cart
            </span>
            <div className="absolute top-0 l-0 text-red-500 font-bold text-lg rounded-[50%]">
              <ThemeContext2>{lengthCart}</ThemeContext2>
            </div>
          </Link>
          <div
            onClick={() => {
              setShowShearch((state) => !state);
            }}
            className=" bg-[#22D3EE] font-bold text-xl flex items-center sm:ml-4 ml-2 sm:px-4 sm:py-2 p-2 text-white rounded-full md:hidden"
          >
            <span className="material-symbols-outlined">search</span>
          </div>
          {currentUser ? (
            <div className="lg:mr-16">
              <button class="peer px-2 py-2 ">
                <div className="items-center flex">
                  <div>{currentUser ? currentUser.name : ""}</div>
                  <img className="w-[20px] h-[20px] rounded-[50%] border border-violet-500"></img>
                </div>
              </button>

              <div
                class="hidden peer-hover:flex hover:flex
        
         flex-col bg-white drop-shadow-lg absolute z-10000  border border-gray-200  w-[100px]"
              >
                <Link class="   hover:bg-gray-200 py-2 px-2" href="#">
                  Profile
                </Link>

                <Link to="/oder" class="  hover:bg-gray-200 py-2 px-2" href="#">
                  oders
                </Link>

                <div
                  onClick={() => {
                    dispatch(logOut());
                  }}
                  class="  hover:bg-gray-200 py-2 px-2 cursor-pointer z-100000"
                >
                  Log out
                </div>
              </div>
            </div>
          ) : (
            <div className="flex  justify-self-auto">
              <Link
                to="/login"
                className="border-r border-gray-600 pr-2 mr-2 cursor-pointer"
              >
                Đăng nhập
              </Link>
              <Link to="/register">
                <p className="cursor-pointer">Đăng ký</p>
              </Link>
            </div>
          )}
        </div>

        <div className="w-full h-1 bg-violet-200"></div>
      </div>
    </>
  );
};
