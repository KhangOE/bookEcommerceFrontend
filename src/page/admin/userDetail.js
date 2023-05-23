import { OrderTable } from "./orderTable";

export const UserDetail = () => {
  return (
    <>
      <div className="flex lg:p-2 p-1 gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-[34%] bg-white rounded-sm p-2 border border-gray-200">
          <h1 className="text-lg font-semibold">Profile</h1>
          <div className=" p-2">
            <div className="w-24 bg-red m-auto mt-4">
              <img
                alt="a"
                src="data:image/jpeg;base64,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"
              ></img>
            </div>
            <div className="flex flex-col m-auto  items-center my-4">
              <span className="text-gray-500 font-semi">ID : #CS-00002</span>
              <span className="font-bold text-lg">Joan Dylan</span>
              <span className="text-sm font-bold text-gray-500">
                24 years, ll
              </span>
            </div>

            <span className="">
              Duis felis ligula, pharetra at nisl sit amet, ullamcorper
              fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed
              tristique scelerisque arcu id dignissim.
            </span>

            <div className="flex flex-col px-2 py-4">
              <div className="flex gap-3">
                <span class="material-symbols-outlined">smartphone</span>
                <span> 0123456789</span>
              </div>
              <div className="flex gap-3">
                <span class="material-symbols-outlined">drafts</span>
                <span>adrianallan@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <span class="material-symbols-outlined">cake</span>
                <span>19/03/1980</span>
              </div>

              <div className="flex gap-3">
                <span class="material-symbols-outlined">Home</span>
                <span>2734 West Fork Street,EASTON 02334.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-4 w-full flex-col lg:flex-row">
            <div className="lg:w-[50%] w-full bg-white rounded-sm border border-gray-200 p-4">
              <h1 className="text-lg font-bold">Billing Address</h1>
              <div className="flex flex-col gap-4 mt-6 mx-2">
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">
                    Block Numder:
                  </span>
                  <span className="font-bold"> A12</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Address:</span>
                  <span className="font-bold"> 81 Fulton London</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Pincode:</span>
                  <span className="font-bold"> 385467</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Phone:</span>
                  <span className="font-bold"> 202-458-4568</span>
                </div>
              </div>
            </div>
            <div className=" w-full lg:w-[50%] bg-white rounded-sm border border-gray-200 p-4">
              <h1 className="text-lg font-bold">Delivery Address</h1>
              <div className="flex flex-col gap-4 mt-6 mx-2">
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">
                    Block Numder:
                  </span>
                  <span className="font-bold"> A12</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Address:</span>
                  <span className="font-bold"> 81 Fulton London</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Pincode:</span>
                  <span className="font-bold"> 385467</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-semibold min-w-[120px]">Phone:</span>
                  <span className="font-bold"> 202-458-4568</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm border border-gray-200 p-4">
            <h1 className="font-bold text-lg">Customer Order</h1>

            <div className="flex justify-between lg:px-6 flex-col flex-row gap-2 px-2">
              <div className="">
                <span>show</span>
                <select className=" mx-4 px-2 border border-gray-200">
                  <option>5</option>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>

              <div className="flex gap-4">
                <span className="text-gray-500">Search</span>
                <div className="w-[180px] border border-gray-200 min-h-[30px] items-center rounded-sm"></div>
              </div>
            </div>

            <div className="">
              <OrderTable show={5}></OrderTable>
              {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Google Pixel Phone
                                    </th>
                                    <td className="px-6 py-4">
                                        Gray
                                    </td>
                                    <td className="px-6 py-4">
                                        Phone
                                    </td>
                                    <td className="px-6 py-4">
                                        $799
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch 5
                                    </th>
                                    <td className="px-6 py-4">
                                        Red
                                    </td>
                                    <td className="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td className="px-6 py-4">
                                        $999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
