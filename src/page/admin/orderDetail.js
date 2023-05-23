import { OrderTable } from "./orderTable"


export const OrderDetail = () => {
    return <>
        <div className=" m-4 lg:p-4 p-1 rounded-md">

            <h1 className="text-2xl font-bold pb-4 border-b border-gray-200">
                Order Details: #Order-78414
            </h1>


            <div className="flex justify-between gap-4 mt-4 flex-col lg:flex-row">
                <div className="w-full rounded-lg border border-green-300 flex bg-green-100 p-4 gap-4">
                    <div className="p-2 bg-green-300 rounded-md items-center">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="">
                            Order Created at
                        </span>
                        <span className="font-semi text-sm">
                            16/03/2021 at 04:23 PM
                        </span>

                    </div>
                </div>

                <div className="w-full rounded-lg border border-red-300 flex bg-red-100 p-4 gap-4">
                    <div className="p-2 bg-red-300 rounded-md items-center">
                        <span class="material-symbols-outlined">
                            Person
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="">
                            Name
                        </span>
                        <span className="font-semi text-sm">
                            Gabrielle
                        </span>

                    </div>
                </div>

                <div className="w-full rounded-lg border border-yellow-300 flex bg-yellow-100 p-4 gap-4">
                    <div className="p-2 bg-yellow-300 rounded-md items-center">
                        <span class="material-symbols-outlined">

                            Email
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="">
                            Email
                        </span>
                        <span className="font-semi text-sm">
                            gabrielle.db@gmail.com
                        </span>

                    </div>
                </div>
                <div className="w-full rounded-lg border border-blue-300 flex bg-blue-100 p-4 gap-4">
                    <div className="p-2 bg-blue-300 rounded-md items-center">
                        <span class="material-symbols-outlined">
                            Phone
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="">
                            Contact No
                        </span>
                        <span className="font-semi text-sm">
                            202-906-12354
                        </span>

                    </div>
                </div>
            </div>

            <div className="w-f flex gap-4 mt-4 flex-col lg:flex-row">
                <div className="flex-1 bg-white rounded-sm border border-gray-200 p-4">
                    <h1 className="text-lg font-bold">Billing Address</h1>
                    <div className="flex flex-col gap-4 mt-6 mx-2">
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Block Numder:</span>
                            <span className="font-bold"> A12</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Address:</span>
                            <span className="font-bold">  81 Fulton London</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Pincode:</span>
                            <span className="font-bold">  385467</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Phone:</span>
                            <span className="font-bold">  202-458-4568</span>
                        </div>

                    </div>
                </div>
                <div className="flex-1 bg-white rounded-sm border border-gray-200 p-4">
                    <h1 className="text-lg font-bold">Delivery Address</h1>
                    <div className="flex flex-col gap-4 mt-6 mx-2">
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Block Numder:</span>
                            <span className="font-bold"> A12</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Address:</span>
                            <span className="font-bold">  81 Fulton London</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Pincode:</span>
                            <span className="font-bold">  385467</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Phone:</span>
                            <span className="font-bold">  202-458-4568</span>
                        </div>

                    </div>
                </div>

                <div className="flex-1 bg-white rounded-sm border border-gray-200 p-4">
                    <h1 className="text-lg font-bold">Invoice Deatil</h1>
                    <div className="flex flex-col gap-4 mt-6 mx-2">
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Number:</span>
                            <span className="font-bold">  #78414</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Seller GST :</span>
                            <span className="font-bold">  AFQWEPX17390VJ</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold min-w-[120px]">Purchase GST :</span>
                            <span className="font-bold">   NVFQWEPX1730VJ</span>
                        </div>


                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-4 flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-white rounded-md w-full">
                    <div className="bg-white rounded-sm border border-gray-200 p-4">
                        <h1 className="font-bold text-lg">
                            Customer Order
                        </h1>

                        <div className="flex justify-between px-6 flex-col lg:flex-row gap-4">
                            <div className="">
                                <span >show</span>
                                <select className=" mx-4 px-2 border border-gray-200">
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        10
                                    </option>
                                    <option>
                                        25
                                    </option>
                                    <option>
                                        50
                                    </option>
                                </select>
                            </div>

                            <div className="flex gap-4 ">
                                <span className="text-gray-500">Search</span>
                                <div className="lg:w-[25%] w-full border border-gray-200 min-h-[30px] items-center rounded-sm">

                                </div>
                            </div>
                        </div>

                        <div className="">
                            <OrderTable show={7}></OrderTable>
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

                <div className="flex-1 bg-white rounded-md p-4">
                    <h1 className="fonst-bold text-lg">
                        Status Orders
                    </h1>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <span className='font-semibold '>Order Id</span>
                            <span className="min-h-[30px] w-full border border-gray-150 rounded-sm text-gray-500"> </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <span className='font-semibold '>Order Status:</span>
                            <select className="min-h-[30px] w-full border border-gray-150 rounded-sm text-gray-500">
                                <option>Pending</option>
                                <option>Progress</option>
                                <option>Complete</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <span className='font-semibold '>Quanity</span>
                            <span className="min-h-[30px] w-full border border-gray-150 rounded-sm text-gray-500"> </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <span className='font-semibold '>Order Transaction:</span>
                            <select className="min-h-[30px] w-full border border-gray-150 rounded-sm text-gray-500">
                                <option>Completed</option>
                                <option>Failed</option>

                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <span className='font-semibold '>Comment:</span>
                            <area></area>
                            <span className="min-h-[30px] w-full border border-gray-150 rounded-sm text-gray-500"> </span>
                        </div>
                    </div>
                    <div className='px-2 py-1 bg-[#5153C7] rounded-md font-bold text-white mt-4 w-fit cursor-pointer'>
                        SUBMIT
                    </div>
                </div>


            </div>




        </div>
    </>
}