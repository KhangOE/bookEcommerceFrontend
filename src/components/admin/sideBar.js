import { useState } from "react";

import { Link } from "react-router-dom";
//import { Link } from "react-router-dom"

const SideBarList = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    icon: "grid_view",
  },
  {
    name: "Orders",
    link: "/admin/orders",
    icon: "list_alt",
  },
  {
    name: "Customers",
    link: "/admin/users",
    icon: "person",
  },
  {
    name: "Products",
    link: "/admin/products",
    icon: "inventory",
  },
  {
    name: "Add Product",
    link: "/admin/addproduct",
    icon: "add",
  },

  {
    name: "category",
    link: "/admin/#",
    icon: "Category",
  },
];

export const AdminSide = (props) => {
  const [site, setSite] = useState("Products");

  return (
    <>
      <div
        className=" w-full h-screen bg-gray-800 fixed bg-opacity-50  translate-x-2 cursor-pointer lg:hidden"
        onClick={() => {
          props.setDside((state) => !state);
        }}
      ></div>
      <aside
        className="w-[250px] fixed z-100000 min-h-screen bg-white mr-[-115px] border-r border-slate-200"
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800 ">
          <ul className="space-y-2">
            <div className="p-2"></div>
            {SideBarList.map((item) => {
              return (
                <>
                  <Link to={item.link} z>
                    <div
                      className=""
                      onClick={() => {
                        setSite(item.name);
                        props.setDside((state) => !state);
                      }}
                    >
                      <div
                        href="/#"
                        className={` ${
                          site === item.name
                            ? " "
                            : `text-gray-[#6a6cd4] bg-[#6a6cd4] hover:text-gray-800`
                        }  text-sm flex flex-row justify-between items-center py-2 pl-4 pr-4 font-semibold  rounded-lg  bg-white `}
                      >
                        <div className=" flex flex-row gap-4 justify-between items-center">
                          <span class="material-symbols-outlined">
                            {item.icon}
                          </span>
                          <span className="min-w-[100px]"> {item.name}</span>
                        </div>

                        <span class="material-symbols-outlined">
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </aside>
      {/* <div className=" w-[230px] min-h-screen bg-red-300">

      </div> */}
    </>
  );
};
