import React, { useState } from "react";
import { PasswordInput, TextInput } from "@mantine/core";
import { useLoginMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("chitkoko1234@gmail.com");
  const [password, setPassword] = useState("123456789");

  const nav = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { email, password };
      const { data } = await login(user);
      dispatch(addUser({ user: data?.user, token: data?.token }));
      console.log(data);
        if (data?.success) nav("/");
    } catch (error) {}
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={loginHandler}
        className=" w-96 p-7 shadow flex flex-col gap-10 "
      >
        <h2 className=" text-2xl text-gray-500 font-semibold">Login</h2>

        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email..."
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {/* <div className=" flex gap-3 ">
          <h2 className=" select-none text-gray-700">
            Already have an account
          </h2>
          <Link to={"/login"}>
            <h2 className="cursor-pointer select-none text-blue-700">Login</h2>
          </Link>
        </div> */}
        <button type="submit" className=" bg-blue-500 text-white px-4 py-1 ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
