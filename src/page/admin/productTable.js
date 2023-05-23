import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Outstock } from "../../components/admin/outstock";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/loadProductSlice";
import { moneyFormatter } from "../../helper/moneyFormatter";

export const ProductTable = (props) => {
  const dispatch = useDispatch();
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
  // const [items, setitems] = useState()

  //   useEffect(() => {
  //     if (filter !== "All") {
  //       setFilteredData(
  //         book.filter((x) => {
  //           return x.category == filter;
  //         })
  //       );
  //     } else {
  //       setFilteredData(book);
  //     }
  //   }, [filter]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <>
      <div className=" w-full border-b border-gray-300 bg-white rounded-md p-4">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap w-[30%]">
                <div className="font-semibold text-left">Product </div>
              </th>
              <th className="p-2 whitespace-nowrap w-[25%] ">
                <div className="font-semibold text-center">category</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Price</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">rating</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-center">status</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {product?.slice(0, 8).map((item, index) => {
              return (
                <>
                  <tr>
                    <td className="p-2 whitespace-nowrap max-w-[159px] overflow-hidden">
                      <Link to="/orderDetail">
                        <div className="flex items-center ">
                          <div className=" h-12 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={`${
                                item.imageUrl ||
                                "https://product.hstatic.net/200000510041/product/1cm_giua_anh_va_em-01_ec9d8ac6c8d34b809a8786179d59154b_846151d3ff3248d29c542385953db6cd_compact.jpg"
                              }`}
                              width={40}
                              height={40}
                              alt="Alex Shatov"
                            />
                          </div>

                          <div className="flex flex-col">
                            <div className="font-medium text-gray-800 mr-8">
                              {item.title}
                            </div>
                            <div className="font-semi text-[12px] ">
                              ID : 039232909ds2
                            </div>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className=" whitespace-nowrap font-semi text-80 text-center  ">
                      <div className="text-center  overflow-hidden ">
                        {item.category[0].name}
                      </div>
                    </td>
                    <td className=" whitespace-nowrap">
                      <div className="text-center font-bold text-green-500">
                        {" "}
                        {moneyFormatter(item.price)}{" "}
                      </div>
                    </td>
                    <td className=" whitespace-nowrap">
                      <div className="text-center font-medium flex items-center justify-center  ">
                        <span class="material-icons text-yellow-300 ">
                          &#xe838;
                        </span>
                        <div className="font-bold"> {getRndInteger(1, 5)}</div>
                        <div className="font-bold text-gray-400">
                          ({getRndInteger(2, 300)})
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center flex items-center justify-center">
                        <div className="font-semibold text-md">
                          {getRndInteger(2, 300) % 3 == 0 ? (
                            <Outstock></Outstock>
                          ) : (
                            getRndInteger(100, 300) + "/300"
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div class="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul class="flex list-style-none">
              <li class="page-item disabled">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li class="page-item active">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                  href="#"
                >
                  2 <span class="visually-hidden"></span>
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
