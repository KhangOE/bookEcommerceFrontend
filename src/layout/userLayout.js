import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../components/user/header";
import { Footer } from "../components/user/footer";

export const Layout = (props) => {
  const navigate = useNavigate();
  // if (props.role == "admin") {
  //   return navigate("/admin");
  // }
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-between bg-[#F5F5FA] z-10 ">
        <div className="w-full relative">
          <Header />
          <div className="w-full min-h-screen  m-auto bg-[#F5F5FA] ">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
