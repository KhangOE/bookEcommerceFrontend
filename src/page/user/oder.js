import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getOdersApi } from "../../api/oderApi";
import { moneyFormatter } from "../../helper/moneyFormatter";

export const Oder = () => {
  const [oder, setOder] = useState([]);
  useEffect(() => {
    const call = async () => {
      await getOdersApi().then((res) => {
        setOder(res.data.Oders);
      });
    };
    call();
  }, []);
  return (
    <div className="sm:w-[50%] w-full m-auto flex flex-col gap-6">
      {oder.map((o, index) => {
        return (
          <>
            <div className="bg-white border border-gray-300 rounded-lg p-4 ">
              <div>
                #{index} {o.createdAt}
              </div>
              <div className="flex flex-col gap-4">
                {o.oderItems.map((i) => {
                  return (
                    <>
                      <div className="flex w-full h-[100px] justify-between border-b border-gray-400 pb-4">
                        <div className="flex gap-4">
                          <img alt="a" src={i.productId.imageUrl}></img>
                          <div> {i.productId.title}</div>
                        </div>
                        <div>{moneyFormatter(i.price)}</div>
                      </div>
                    </>
                  );
                })}
                <div className="w-full text-end font-bold text-lg text-red-500">
                  {" "}
                  {moneyFormatter(o.total)}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
