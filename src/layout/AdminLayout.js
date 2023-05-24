import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Footer } from "../components/admin/footer";
import { Header } from "../components/admin/header";
import { AdminSide } from "../components/admin/sideBar";
import { useSelector } from "react-redux";
export const AdminLayout = (props) => {
  const navigate = useNavigate();
  const [dside, setDside] = useState(false);
  const currentUser = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(props.role);
    console.log(currentUser, "admin123");
  }, [currentUser]);
  useEffect(() => {
    console.log("admin123", currentUser);
  }, []);
  if (props.role != "admin") {
    return navigate("/");
  }

  return (
    <>
      <Header setDside={setDside} />
      <div className="w-full h-[60px]"></div>
      <div className="flex w-full">
        <div className={`${dside ? "block" : "hidden"} lg:block`}>
          <AdminSide setDside={setDside} />
        </div>
        <div className="flex-1 flex flex-col bg-[#F5F7FF] min-h-screen justify-between lg:pl-[250px] w-full">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </>
  );
};
