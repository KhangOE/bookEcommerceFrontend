import React from 'react'
import { VerticalChart } from './verticalChart'
import { PieChart } from './pieChart'
export const Earningchart = () => {
    return (<>
        <div className='flex gap-6 mt-4 md:flex-row  flex-col'>
            <div className='md:w-[80%] bg-white shadow-md p-4 rounded-lg w-full'>
                <div className='font-bold px-4 py-2 flex justify-between'>
                    <div>Revenue</div>
                    <select className='border border-gray-300 rounded-md px-2 py-2 text-sm font-semi text-gray-500'>
                        <option>This month</option>
                    </select>
                </div>
                <VerticalChart></VerticalChart>
            </div>

            <div className='flex-1 bg-white  items-center shadow-lg rounded-lg '>
                <div className='w-full border-b border-gray-300 px-4 py-2 font-semibold text-lg mb-6'> Earning Reports</div>
                <div><PieChart></PieChart></div>

                <div className='bg-gray-50 font-bold text-[12px] px-4 py-2 m-2'> 01 January 2020 to 31 December 2020</div>

            </div>

        </div>
    </>

    )
}
