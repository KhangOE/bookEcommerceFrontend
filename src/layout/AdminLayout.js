import { useState } from "react";
import {
    Outlet
} from "react-router-dom";

import { Footer } from "../components/admin/footer";
import { Header } from "../components/admin/header";
import { AdminSide } from "../components/admin/sideBar";
export const AdminLayout = (props) => {
    const [dside, setDside] = useState(false)

    return <>
        <Header setDside={setDside} />
        <div className="w-full h-[60px]"></div>
        <div className='flex w-full'>
            <div className={`${dside ? 'block' : 'hidden'} lg:block`}>
                <AdminSide setDside={setDside} />
            </div>
            <div className='flex-1 flex flex-col bg-[#F5F7FF] min-h-screen justify-between lg:pl-[250px] w-full'>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer />
    </>
}