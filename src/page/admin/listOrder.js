import { useState } from "react";
import { OrderTable } from "./orderTable";

export const OrderList = () => {
  const [table, setTable] = useState(true);
  return (
    <>
      <div>
        <div className=" px-1 py-2 lg:p-6">
          <h1 className="m-0 font-bold text-3xl">Orders</h1>
          <div className="flex flex-row gap-2 lg:gap-8 mt-2 flex-wrap">
            <div>
              <span className="font-semibold text-sm">All</span>
              <span className="font-semibold text-sm text-gray-400">
                (68817)
              </span>
            </div>

            <div>
              <span className="font-semibold text-sm text-[#2D5DCC]">
                Published
              </span>
              <span className="font-semibold text-sm text-gray-400">
                (908817)
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm text-[#2D5DCC]">
                Drafts
              </span>
              <span className="font-semibold text-sm text-gray-400">
                (908817)
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm text-[#2D5DCC]">
                On discounts
              </span>
              <span className="text-sm text-gray-400">(908817)</span>
            </div>
          </div>
          <div className="flex  flex-row flex-wrap  mt-2 gap-4 mb-2">
            <div class="w-full md:w-[350px]">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class=" w-full">
                  <div class="inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md lg:round-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5 "
                    placeholder="Search"
                    required
                  ></input>
                </div>
              </form>
            </div>
            <div className="flex flex-row font-bold">
              <div className="text-center min-w-[100px] items-center py-1 border border-gray-300  rounded-l-lg">
                Category
              </div>
              <div className="text-center min-w-[100px] items-center py-1 border border-gray-300 ">
                Vendor
              </div>
              <div className="text-center min-w-[100px] items-center py-1 border border-gray-300  rounded-r-lg">
                More filt
              </div>
            </div>
          </div>
          <OrderTable></OrderTable>

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
      </div>
    </>
  );
};
