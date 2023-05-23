

export const ProductDetail = () => {
    return <>
        <div className="flex p-2 gap-4">
            <div className=" w-[34%] bg-white rounded-sm p-2 border border-gray-200">
                <h1 className="text-lg font-semibold">Profile</h1>
                <div className=" p-2">
                    <div className="w-24 bg-red m-auto mt-4">
                        <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"></img>
                    </div>
                    <div className="flex flex-col m-auto  items-center my-4">
                        <span className="text-gray-500 font-semi">
                            ID : #CS-00002
                        </span>
                        <span className="font-bold text-lg">
                            Joan Dylan
                        </span>
                        <span className="text-sm font-bold text-gray-500">
                            24 years, ll
                        </span>
                    </div>

                    <span className="">
                        Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed tristique scelerisque arcu id dignissim.
                    </span>

                    <div className="flex flex-col px-2 py-4">
                        <div className="flex gap-3">
                            <span class="material-symbols-outlined">
                                smartphone
                            </span>
                            <span> 0123456789</span>
                        </div>
                        <div className="flex gap-3">
                            <span class="material-symbols-outlined">
                                drafts
                            </span>
                            <span>
                                adrianallan@gmail.com
                            </span>

                        </div>

                        <div className="flex gap-3">
                            <span class="material-symbols-outlined">
                                cake
                            </span>
                            <span>
                                19/03/1980
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span class="material-symbols-outlined">
                                Home
                            </span>
                            <span>
                                2734 West Fork Street,EASTON 02334.
                            </span>
                        </div>


                    </div>
                </div>

            </div>

            <div className="flex-1 flex flex-col gap-4">
                <div className="flex gap-4 w-full">


                    <div className="w-[50%] bg-white rounded-sm border border-gray-200 p-4">
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
                    <div className="w-[50%] bg-white rounded-sm border border-gray-200 p-4">
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
                </div>

                <div className="bg-white rounded-sm border border-gray-200 p-4">
                    <h1 className="font-bold text-lg">
                        Customer Order
                    </h1>

                    <div className="flex justify-between px-6">
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

                        <div className="flex gap-4">
                            <span className="text-gray-500">Search</span>
                            <div className="w-[180px] border border-gray-200 min-h-[30px] items-center rounded-sm">

                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </>
}