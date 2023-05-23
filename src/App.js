import React, { useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/user/Home";
import { Cart } from "./page/user/Cart";
import { Layout } from "./layout/userLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { ListUser } from "./page/admin/listUser";
import { ProfileUSer } from "./page/admin/profileuser";
import { Login } from "./page/user/login";
import { Addproduct } from "./page/admin/addproduct";
import { Products } from "./page/admin/listProduct";
import { Dashboard } from "./page/admin/dashboard";
import { UserDetail } from "./page/admin/userDetail";
import { OrderDetail } from "./page/admin/orderDetail";
import { OrderList } from "./page/admin/listOrder";
import { Editproduct } from "./page/admin/editProduct";
import { UProducts } from "./page/user/Products";
import { logOut } from "./redux/slice/authSlide";
import { addUser } from "./redux/slice/authSlide";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoApi } from "./api/authApi";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import { ProductItem } from "./page/user/productItem";
import { ThemeContext } from "./context/cartContext";
import { Register } from "./page/user/register";
import { Profile } from "./page/user/profile";
import { Search } from "./page/user/searching";
import { Oder } from "./page/user/oder";
import { ProtectedRouteAdmin, ProtectedRouteAuth } from "./utils/protectRoute";

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem("token") === "null") {
      dispatch(logOut());
    } else {
      setAuthToken(localStorage.getItem("token"));
      (async () => {
        try {
          const res = await getUserInfoApi();
          if (res.data.success) {
            dispatch(addUser(res.data.user));
          }
        } catch (error) {
          dispatch(logOut());
        }
      })();
    }
  }, [dispatch]);
  return (
    <div>
      <ThemeContext>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouteAdmin
                user={currentUser?.role.name}
              ></ProtectedRouteAdmin>
            }
          >
            <Route path="admin" element={<AdminLayout />}>
              <Route path="use" element={<ProfileUSer />} />
              <Route path="users" element={<ListUser />} />
              <Route path="products" element={<Products />} />
              <Route path="addproduct" element={<Addproduct />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users/:id" element={<UserDetail />} />
              <Route path="orderDetail" element={<OrderDetail />} />
              <Route path="orders" element={<OrderList />} />
              <Route path="editProduct" element={<Editproduct />} />
              <Route index element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="products" element={<UProducts />} />
            <Route path="search/:query" element={<Search />} />
            <Route path="products/:id" element={<ProductItem />} />
            <Route path="login" element={<Login />} />
            <Route
              path="cart"
              element={
                <ProtectedRouteAuth user={currentUser} redirectPath={"/login"}>
                  <Cart />
                </ProtectedRouteAuth>
              }
            />
            <Route path="register" element={<Register></Register>}></Route>
            <Route
              path="profile"
              element={
                <ProtectedRouteAuth user={currentUser} redirectPath={"/login"}>
                  <Profile></Profile>
                </ProtectedRouteAuth>
              }
            ></Route>
            <Route path="oder" element={<Oder></Oder>}></Route>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeContext>
    </div>
  );
}

export default App;
