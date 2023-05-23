import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./cart.css";
import { CartItem } from "../../components/user/cart/cartItem";
import { useCart } from "../../context/cartContext";
import { moneyFormatter } from "../../helper/moneyFormatter";
import { createOderApi } from "../../api/oderApi";
import { NotificationComplete } from "../../components/user/cart/notificationComplete";
export const Cart = () => {
  const { cart2, totalCart, oderItem, clearCart } = useCart();
  const { currentUser } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const buy = async () => {
    const res = await createOderApi({
      userId: currentUser._id,
      payment: "12332",
      total: totalCart,
      orderItems: oderItem,
    });
    setShow(true);
    clearCart();

    console.log(res);
  };
  // const [oder, setOder] = useState({
  //   userId: currentUser?._id,
  //   total: 0,
  //   orderItem: [],
  // });
  // useEffect(() => {});
  return (
    <>
      <div className="w-[92%] m-auto  p-2 ">
        <div className="font-bold text-2xl">GIỎ HÀNG </div>
        <NotificationComplete
          show={show}
          setShow={setShow}
        ></NotificationComplete>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="w-[75%] rounded-sm">
            <table className="w-full  border-separate border-spacing-y-4">
              <tr className="bg-white py-2 mb-8 hidden md: block">
                <th className="w-[25%] "> tất cả sản phẩm</th>
                <th> Đơn giá</th>
                <th> số lượng</th>
                <th> thành tiền</th>
                <th>
                  <span class="material-symbols-outlined">delete</span>
                </th>
              </tr>

              {cart2 &&
                cart2?.map((i) => {
                  return (
                    <>
                      {" "}
                      <CartItem
                        //  setOder={setOder}
                        id={i.id}
                        sl={i.sl}
                      ></CartItem>{" "}
                    </>
                  );
                })}
            </table>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full bg-white p-2 flex flex-col gap-2">
              <div className="flex justify-between  items-center  mb-2 ">
                <div className="text-lg text-gray-600 font-semibold">
                  Giao tới
                </div>
                <div className="text-sky-600  "> thây đổi</div>
              </div>

              <div className="flex font-bold text-sm">
                <div className="border-r border-gray-400 pr-4 mr-4">
                  {" "}
                  Khang Nguyen
                </div>
                <div>01234123123</div>
              </div>

              <div className="text-sm font-semibold text-gray-600">
                Ký túc xá ĐHQG Thành phố HCM khu B, Phường Linh Trung, Quận Thủ
                Đức, Hồ Chí Minh
              </div>
            </div>

            <div className="w-full bg-white p-2 flex-col gap-2 mb-4">
              <div className="flex justify-between mb-4">
                <div> Khuyến mãi</div>
                <div className="text-gray-500 text-sm"> có thể chọn 2</div>
              </div>
              <div className="font-semi text-sm text-sky-500 flex items-center">
                <span class="material-icons">&#xebc9;</span>
                <div> Chọn hoặc nhập Khuyến mãi khác </div>
              </div>
            </div>

            <div className="w-full bg-white p-2 flex-col gap-4 text-sm">
              <div className="flex justify-between mb-4">
                <div className="font-semi text-gray-500"> Tạm tính : </div>
                <div>{moneyFormatter(totalCart)}</div>
              </div>

              {/* <div className="flex justify-between">
                <div className="font-semi text-gray-500"> Giảm giá :</div>
                <div>{moneyFormatter(oder.total)}</div>
              </div> */}
              <div className="flex justify-between pt-4 mt-4 border-t border-gray-400">
                <div>Tổng tiền : </div>
                <div className="text-red-400 font-bold text-xl">
                  {/* {moneyFormatter(oder.total)} */}
                  {moneyFormatter(totalCart)}
                </div>
              </div>
              <div
                onClick={() => {
                  buy();
                }}
                className=" cursor-pointer w-full h-[40px] bg-red-600 text-white font-semibold rounded-md flex items-center justify-center mt-4"
              >
                MUA HÀNG
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
