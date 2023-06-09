import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getUserInfoApi, loginUserApi } from "../../api/authApi";
import { useSelector } from "react-redux";
//import { addUser } from "../../redux/slice/authSlice";
import { addUser } from "../../redux/slice/authSlide";
import setAuthToken from "../../utils/setAuthToken";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser) {
      return navigate("/");
    }
  }, [currentUser]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      setLoading(true);

      try {
        const res = await loginUserApi(value);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          setAuthToken(res.data.token);
          const userInfo = await getUserInfoApi();
          dispatch(addUser(userInfo.data.user));
          toast.success(res.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }

      setLoading(false);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Trường này là bắt buộc!")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email không đúng định dạng!"
        ),
      password: Yup.string()
        .max(10, "Mật khẩu không đc vượt quá 10 kí tự!")
        .required("Trường này là bắt buộc!")
        .min(6, "Mật khẩu có ít nhất 6 kí tự!"),
    }),
  });

  return (
    <div className="w-full flex justify-center items-center pt-8">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[500px] bg-white shadow-lg rounded-md p-4 max-w-[calc(100%-16px)]"
      >
        <h1 className="text-[20px] font-semibold">Đăng nhập</h1>
        <div className="w-full mt-4">
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">Enter your email</label>
            <input
              placeholder="Email"
              className="border border-gray-300  py-1 px-3 w-full text-[16px] outline-none rounded-sm"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="text-xs text-red-500 mt-2">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">
              Enter your password
            </label>
            <div className="relative">
              <input
                placeholder="Password"
                className=" border border-gray-300 py-1 px-3 w-full text-[16px] outline-none rounded-sm"
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                type={showPass ? "text" : "password"}
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] right-0"
              >
                <i
                  class={`${showPass ? "bx bx-hide" : "bx bx-show"} text-2xl`}
                ></i>
              </div>
            </div>

            {formik.errors.password && (
              <p className="text-xs text-red-500 mt-2">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="py-2 px-3 bg-red-500 text-white rounded-sm w-full"
            >
              Đăng nhập
            </button>
          </div>

          <p className="mt-4 text-right text-[14px]">
            Nếu bạn chưa có tài khoản hãy{" "}
            <Link className="text-blue-500" to="/register">
              Đăng ký
            </Link>
          </p>

          <div className="border-t border-red-500 mt-4 pt-4">
            <button>
              <Link to="/">Quay lại trang chủ!</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
