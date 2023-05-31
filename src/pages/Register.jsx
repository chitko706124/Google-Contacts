import React, { useState } from "react";
import { PasswordInput, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");


  const nav = useNavigate();

  const [register] = useRegisterMutation();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const { data } = await register(user);
      if (data?.success) nav("/login");
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={submitHandler}
        className=" w-96 p-7 shadow flex flex-col gap-10 "
      >
        <h2 className=" text-2xl text-gray-500 font-semibold">Register</h2>

        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name..."
        />
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
        <PasswordInput
          value={password_confirmation}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm password"
        />
        <div className=" flex gap-3 ">
          <h2 className=" select-none text-gray-700">
            Already have an account
          </h2>
          <Link to={"/login"}>
            <h2 className="cursor-pointer select-none text-blue-700">Login</h2>
          </Link>
        </div>
        <button type="submit" className=" bg-blue-500 text-white px-4 py-1 ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
