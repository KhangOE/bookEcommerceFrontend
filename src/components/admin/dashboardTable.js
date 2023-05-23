import React from 'react'
import { ProductTabledb } from './dashboardTable1'
import { UsersContent } from './userscontent'
function DashboardTable() {
    return (
        <>
            <div className='flex gap-4 mt-4 md:flex-row flex-col'>

                <div className='w-full md:w-1/2'><ProductTabledb></ProductTabledb></div>

                {/* table2 */}

                <div className=' w-full md:w-[50%] border-b border-gray-300 bg-white rounded-md p-4 overflow-scroll'>
                    <div className='flex justify-between overflow-scoll'>
                        <div className='font-bold '>
                            NEW USER
                        </div>
                        <div className='flex text-sm items-end'>

                        </div>
                    </div>
                    {/* <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Product</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Sell</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">

                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                width={40}
                                                height={40}
                                                alt="Alex Shatov"
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className="font-medium text-gray-800">
                                                Alex Shatov
                                            </div>
                                            <div className='font-semi text-[12px] '>
                                                ID : 039232909ds2
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap font-semi text-80">
                                    <div className="text-left">1234.5$</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        780
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">
                                        out of st
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                width={40}
                                                height={40}
                                                alt="Alex Shatov"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Alex Shatov
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">alexshatov@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $2,890.66
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>

                        </tbody>
                    </table> */}
                    <UsersContent></UsersContent>
                </div>
            </div>
        </>
    )
}

export default DashboardTable