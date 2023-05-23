import { useEffect, useState } from "react";

export const ProductTabledb = ({ itemsPerPage = 5 }) => {
  const [book, setBook] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const provider = ["Nhã Nam", "Nhi Đồng", "Tuổi Trẻ", "hafasa"];
  const random = Math.floor(Math.random() * provider.length);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // const [items, setitems] = useState()
  // const a = books.reverse()
  // useEffect(() => {
  //     setBook(a)
  //     //  setitems(books)
  // }, [])

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <tr>
              <td className="p-2 whitespace-nowrap max-w-[100px] overflow-hidden">
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
              </td>
              <td className="pl-12 whitespace-nowrap font-semi text-80">
                <div className="text-left">1234.5$</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">780</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">out of st</div>
              </td>
            </tr>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = book.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <>
      <div className=" w-full border-b border-gray-300 bg-white rounded-md p-4 overflow-scroll">
        <div className="flex justify-between ">
          <div className="font-bold ">TOP PRODUCT</div>
          <div className="flex text-sm items-end"></div>
        </div>

        <table className="table-auto w-full ">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap w-[30%]">
                <div className="font-semibold text-left">Product</div>
              </th>
              <th className="p-2 whitespace-nowrap w-[25%] ">
                <div className="font-semibold text-center">Provider</div>
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
            {/* {book.slice(0, 10).map((item, index) => {
                        return (<>
                            <tr>
                                <td className="p-2 whitespace-nowrap max-w-[159px] overflow-hidden">
                                    <Link to='/orderDetail'>
                                        <div className="flex items-center ">
                                            <div className=" h-12 flex-shrink-0 mr-2 sm:mr-3">
                                                <img
                                                    className="rounded-full"
                                                    src={`${item.img || 'https://product.hstatic.net/200000510041/product/1cm_giua_anh_va_em-01_ec9d8ac6c8d34b809a8786179d59154b_846151d3ff3248d29c542385953db6cd_compact.jpg'}`}
                                                    width={40}
                                                    height={40}
                                                    alt="Alex Shatov"
                                                />
                                            </div>

                                            <div className='flex flex-col'>
                                                <div className="font-medium text-gray-800 mr-8">
                                                    {item.name}
                                                </div>
                                                <div className='font-semi text-[12px] '>
                                                    ID : 039232909ds2
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </td>
                                <td className=" whitespace-nowrap font-semi text-80 text-center ">
                                    <div className="text-center  overflow-hidden">{provider[Math.floor(Math.random() * provider.length)]}</div>
                                </td>
                                <td className=" whitespace-nowrap">
                                    <div className="text-center font-bold text-green-500">
                                        {getRndInteger(200, 600)}$
                                    </div>
                                </td>
                                <td className=" whitespace-nowrap">
                                    <div className="text-center font-medium flex items-center justify-center  ">
                                        <span class="material-icons text-yellow-300 ">&#xe838;</span>
                                        <div className='font-bold'> {getRndInteger(1, 5)}</div>
                                        <div className='font-bold text-gray-400'>({getRndInteger(2, 300)})</div>

                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center flex items-center justify-center">
                                        <div className='font-semibold text-md'>
                                            {getRndInteger(2, 300) % 3 == 0 ? <Outstock></Outstock> : getRndInteger(100, 300) + '/300'}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </>)
                    })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};
