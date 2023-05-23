import React from 'react'

export default function DashboardHeader() {
    return (
        <div>
            <div className='flex lg:flex-row flex-col  gap-8 justify-between w-full' >

                <div className='shadow-md border-gray-300 rounded-md lg:flex-1 w-full h-[160px] bg-white p-4 flex flex-col  justify-between'>
                    <div className='flex justify-between '>
                        <div className='font-bold text-[14px] text-gray-500'>TOTAL EARNINGS </div>
                        <div className='font-bold text-sm text-[#2ABDC2]'>10%</div>
                    </div>

                    <div className='font-bold text-2xl text-gray-700  pt-6'> $592.200k</div>
                    <div className='flex justify-between items-end  mb-2'>
                        <div className='text-semi underline text-[12px] '>VIEW DETAIl</div>
                        <span class="material-symbols-outlined text-4xl bg-sky-100 text-sky-400 p-2 rounded-lg items-center ">
                            shopping_bag
                        </span>

                    </div>

                </div>
                <div className='shadow-md border-gray-300 rounded-md lg:flex-1 w-full h-[160px] bg-white p-4 flex flex-col  justify-between'>
                    <div className='flex justify-between '>
                        <div className='font-bold text-[14px] text-gray-500'>   ORDER </div>
                        <div className='font-bold text-sm text-[#2ABDC2]'>10%</div>
                    </div>

                    <div className='font-bold text-2xl text-gray-700  pt-6'> 9999</div>
                    <div className='flex justify-between items-end  mb-2'>
                        <div className='text-semi underline text-[12px] '>VIEW DETAIl</div>
                        <span class="material-symbols-outlined text-4xl bg-green-100 text-green-400 p-2 rounded-lg items-center ">

                            attach_money

                        </span>

                    </div>

                </div>
                <div className='shadow-md border-gray-300 rounded-md lg:flex-1 w-full h-[160px] bg-white p-4 flex flex-col  justify-between'>
                    <div className='flex justify-between '>
                        <div className='font-bold text-[14px] text-gray-500'>CUSTOMER</div>
                        <div className='font-bold text-sm text-[#2ABDC2]'>10%</div>
                    </div>

                    <div className='font-bold text-2xl text-gray-700  pt-6'> 123513</div>
                    <div className='flex justify-between items-end  mb-2'>
                        <div className='text-semi underline text-[12px] '>VIEW DETAIl</div>
                        <span class="material-symbols-outlined text-4xl bg-amber-100 text-amber-400 p-2 rounded-lg items-center ">
                            account_circle
                        </span>

                    </div>

                </div>
                <div className='shadow-md border-gray-300 rounded-md lg:flex-1 w-full h-[160px] bg-white p-4 flex flex-col  justify-between'>
                    <div className='flex justify-between '>
                        <div className='font-bold text-[14px] text-gray-500'>RETURN </div>
                        <div className='font-bold text-sm text-[#2ABDC2]'>10%</div>
                    </div>

                    <div className='font-bold text-2xl text-gray-700  pt-6'> $52.200k</div>
                    <div className='flex justify-between items-end  mb-2'>
                        <div className='text-semi underline text-[12px] '>VIEW DETAIl</div>
                        <span class="material-symbols-outlined text-4xl bg-indigo-100 text-indigo-400 p-2 rounded-lg items-center ">
                            account_balance_wallet
                        </span>

                    </div>

                </div>



            </div>
        </div>
    )
}
