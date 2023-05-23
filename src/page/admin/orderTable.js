import { useEffect, useState } from "react";

import { Complete } from "../../components/admin/complete";
import { Progress } from "../../components/admin/progress";
import { Link } from "react-router-dom";

export const OrderTable = (props) => {
  //   const [book, setBook] = useState([]);

  //   function getRndInteger(min, max) {
  //     return Math.floor(Math.random() * (max - min)) + min;
  // }
  return (
    <>
      {/* <div className=" w-full border-b border-gray-300 bg-white rounded-md p-4 overflow-scroll">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Product</div>
              </th>
              <th className="p-2 whitespace-nowrap w-[25%]">
                <div className="font-semibold text-center">Customer Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Price</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-center">status</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {book.slice(0, props.show ? props.show : 10).map((item, index) => {
              return (
                <>
                  <tr>
                    <td className="p-2 whitespace-nowrap max-w-[159px] overflow-hidden">
                      <Link to="/orderDetail">
                        <div className="flex items-center ">
                          <div className=" h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={`${
                                item.img ||
                                "https://product.hstatic.net/200000510041/product/1cm_giua_anh_va_em-01_ec9d8ac6c8d34b809a8786179d59154b_846151d3ff3248d29c542385953db6cd_compact.jpg"
                              }`}
                              width={40}
                              height={40}
                              alt="Alex Shatov"
                            />
                          </div>

                          <div className="flex flex-col">
                            <div className="font-medium text-gray-800 mr-8">
                              {item.name}
                            </div>
                            <div className="font-semi text-[12px] ">
                              ID : 039232909ds2
                            </div>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className=" whitespace-nowrap font-semi text-80 text-center ">
                      <div className="text-center max-w-[200px] pl-8 overflow-hidden">
                        {item.author}
                      </div>
                    </td>
                    <td className=" whitespace-nowrap">
                      <div className="text-center font-medium text-green-500">
                        {getRndInteger(200, 600)}$
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center flex items-center justify-center">
                        {item.status == "conplete" ? (
                          <Complete></Complete>
                        ) : (
                          <Progress></Progress>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
};
