import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducByIdtApi } from "../../../api/productsApi";
import { useState } from "react";

export const ProductSeenCard = (props) => {
  const [item, setItem] = useState();
  useEffect(() => {
    getProducByIdtApi(props.id).then((res) => {
      setItem(res.data.product);
    });
  }, []);
  return (
    <>
      <Link to={"/products/" + item?._id} key={props.id}>
        <div className="w-[160px] p-2 flex flex-col border border-gray-200 justify-end bg-white rounded-sm h-full">
          <div className="w-full text-center flex justify-center ] overflow-hidden">
            <img className=" " src={item?.imageUrl}></img>
          </div>

          <div className="text-sm font-bold max-h-[42px] overflow-hidden">
            {item?.title}
          </div>
          <div className="flex justify-between">
            <div className="text-green-600 font-bold">{item?.price} </div>
            <div className="text-gray-300 font-bold line-through">
              {item?.price - 3000} đ
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
