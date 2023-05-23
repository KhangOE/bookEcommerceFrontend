import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/slice/authSlide";
import { useDispatch } from "react-redux";
import { useCart } from "../../context/cartContext";
import { ThemeContext2 } from "../../context/themeContext";
import { SearchinhBar } from "./searchinhBar";
export const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  //const { cart } = useSelector((state) => state.cart);
  const { lengthCart, setCart } = useCart();

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
        <div className="flex min-h-[80px] items-center md:pl-16 pl-3 gap-6">
          <Link to="/">
            <img className="w-[135px]" src="/dinobb.png"></img>
          </Link>
          <div className="hidden md:block">
            <SearchinhBar></SearchinhBar>
          </div>

          <Link to="/cart" className="relative">
            <span class="material-symbols-outlined text-violet-500 p-2 rounded-md hover:bg-violet-100 ">
              shopping_cart
            </span>
            <div className="absolute top-0 l-0 text-red-500 font-bold text-lg rounded-[50%]">
              <ThemeContext2>{lengthCart}</ThemeContext2>
            </div>
          </Link>
          {currentUser ? (
            <div className="md:ml-40">
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
            <div className="flex  ">
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
