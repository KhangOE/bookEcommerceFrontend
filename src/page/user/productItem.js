import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductById } from "../../redux/slice/productSlice";
import { moneyFormatter } from "../../helper/moneyFormatter";
import { Block } from "../../components/user/product/block";
import { ReleventProduct } from "../../components/user/product/releventProduct";
import { useCart } from "../../context/cartContext";
export const ProductItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { addCartItem, reduceItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const seen = JSON.parse(localStorage.getItem("seen"));
    if (seen) {
    }
    if (seen) {
      if (!seen.includes(id)) {
        localStorage.setItem("seen", JSON.stringify([id, ...seen]));
      }
    } else {
      localStorage.setItem("seen", JSON.stringify([id]));
    }
  }, []);

  useEffect(() => {
    dispatch(getProductById(id)).then(() => {});
  }, []);

  return (
    <>
      <div className=" bg-white z-[100] min-h-screen ">
        <div className=" bg-bo w-full min-h-[400px] z-[2] top-[0px] fixed"></div>

        <div className="w-full h-[200px] bg-gray-800/60 text-white   relative z-[10] flex items-center justify-center text-2xl font-bold uppercase">
          {product?.product?.title}
        </div>

        <div className=" gap-6 py-8 px-20 z-[8] bg-white relative h-fit ">
          <div className="flex gap-6">
            <div className=" flex gap-4 ">
              <div>
                <img
                  alt="#"
                  src={product?.product?.imageUrl}
                  className="w-[80px] "
                ></img>
              </div>
              <div>
                <img
                  alt="#"
                  src={product?.product?.imageUrl}
                  className="h-[400px] "
                ></img>
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="uppercase text-2xl font-bold">
                {product?.product?.title}
              </div>
              <div className="text-sm">
                Tác giả:{" "}
                {product?.product?.author.map((a) => {
                  return a;
                })}
              </div>

              <div className="text-green-600 font-bold text-2xl border-y border-gray-300 py-2 pl-5">
                <div>
                  {product?.product?.price &&
                    moneyFormatter(product.product.price)}
                </div>
              </div>

              <div className="border-b border-gray-300 py-2">
                <div className="flex gap-4">
                  {product?.product?.category.map((c) => {
                    return <div className="text-indigo-500">{c} </div>;
                  })}
                </div>
                <div>
                  Hotline hỗ trợ giờ hành chính:
                  <span className="font-bold">0903244248 </span>
                </div>
              </div>

              <div className="flex items-end  gap-6 text-lg">
                <div>
                  <div>số lượng</div>
                  <div className="flex gap-2 flex items-center">
                    <div
                      className={"cursor-pointer p-2"}
                      onClick={() => {
                        quantity > 1 && setQuantity((state) => state - 1);
                      }}
                    >
                      -
                    </div>
                    <div className="border border-gray-600 px-4 ">
                      {quantity}
                    </div>
                    <div
                      className="cursor-pointer p-2"
                      onClick={() => {
                        setQuantity((state) => state + 1);
                      }}
                    >
                      {" "}
                      +{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="px-4 py-1 text-white text-lg font-bold bg-green-800 cursor-pointer"
                  onClick={() => {
                    addCartItem({
                      id: id,
                      sl: quantity,
                    });
                  }}
                >
                  Thêm vào giỏ hàng
                </div>
                <div
                  className="px-4 py-1 text-white text-lg font-bold bg-green-800"
                  onClick={() => {
                    reduceItem(id);
                  }}
                >
                  mua ngay
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-[80%]">
              {" "}
              <Block product={product.product} id={id}></Block>
            </div>
            <div className="flex-1 ">
              <ReleventProduct></ReleventProduct>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
