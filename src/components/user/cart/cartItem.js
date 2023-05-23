import React, { useEffect, useState } from "react";
import { getProducByIdtApi } from "../../../api/productsApi";
import { moneyFormatter } from "../../../helper/moneyFormatter";
import { useCart } from "../../../context/cartContext";

export const CartItem = (props) => {
  const [item, setItem] = useState();
  const { plustItem, deleteCartItem, reduceItem, cart2, oderItem } = useCart();

  useEffect(() => {
    console.log(oderItem);
  }, [cart2]);

  useEffect(() => {
    getProducByIdtApi(props.id).then((res) => {
      setItem(res.data);
      console.log("data", res.data);
    });
  }, []);
  return (
    <tr className="bg-white" key={props.id}>
      <td className="py-2">
        <div className="flex ">
          <img className="w-20" src={item?.product?.imageUrl}></img>
          <div className="font-semi text-sm flex items-center">
            Hành Trình Về Phương Đông (Tái Bản 2021)
          </div>
        </div>
      </td>
      <td>
        <div className="text-center">
          {item && moneyFormatter(item?.product?.price)}
        </div>
      </td>
      <td>
        <div className="w-full flex justify-center  ">
          <div className="flex border border-gray-400 text-lg m-auto">
            <div
              className="px-3 border-r border-black cursor-pointer"
              onClick={() => {
                reduceItem(props.id);
              }}
            >
              -
            </div>
            <div className="px-2">{props.sl}</div>{" "}
            <div
              className="px-3 border-l border-black cursor-pointer"
              onClick={() => {
                plustItem(props.id);
              }}
            >
              +
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className=" w-full text-center font-bold text-red-500">
          {moneyFormatter(item?.product?.price * props.sl)}
        </div>
      </td>
      <td>
        <div
          className="text-center"
          onClick={() => {
            deleteCartItem(props.id);
          }}
        >
          <span class="material-symbols-outlined">delete</span>
        </div>
      </td>
    </tr>
  );
};
