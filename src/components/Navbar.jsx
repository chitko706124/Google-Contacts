import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeUser } from "../redux/services/authSlice";
import { TextInput } from "@mantine/core";
import { addSearch } from "../redux/services/search";

const Navbar = () => {
  //   const { user } = useSelector((state) => state.authSlice);
  //   const { token } = useSelector((state) => state.authSlice);
  //   const user = JSON.parse(Cookies.get("user"));
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");

  const { data: search } = addSearch();
  const dispatch = useDispatch();

  const nav = useNavigate();

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    if (data?.success) nav("/login");
  };

  return (
    <div className=" flex justify-between items-center p-7 shadow ">
      <h2 className=" text-2xl text-gray-700 font-semibold">MMS</h2>
      <TextInput
        value={search}
        onChange={(e) => dispatch(addSearch(e.target.value))}
        size="md"
        placeholder="search"
      />
      <div className=" flex gap-5 items-center">
        <div className=" flex flex-col gap-3">
          <p className=" text-gray-500 font-semibold">{user?.name}</p>
          <p className=" text-gray-500 font-semibold">{user?.email}</p>
        </div>
        <button
          onClick={logoutHandler}
          className=" bg-red-500 text-white px-4 py-1 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
