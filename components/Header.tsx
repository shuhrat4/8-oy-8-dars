"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./swiperss/Button";
import { LogIcon } from "@/public/images/icon";
import Modal from "./Modal";
import LoginIputs from "./LoginIputs";
import Register from "./Register";
import { useAxios } from "@/hook/useEnv";
import VerifyRegister from "./VerifyRegister";

const Header = () => {
  const pathname = usePathname();
  const [cartCount] = useState(6);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [selectedAuth, setSelectedAuth] = useState<"login" | "register" | "verifyRegister">("login");
  const [registerVerifyValue, setRegisterVerifyValue] = useState<string>("")
  const [registerEmail, setRegisterEmail] = useState<string>("")

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/plant-care", label: "Plant Care" },
    { href: "/blogs", label: "Blogs" },
  ];

  function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (selectedAuth === "register") {
      const data = {
        email: target.email?.value || "",
        password: target.password?.value || "",
        firstName: target.username?.value || "",
        lastName: target.username?.value || ""
      };

      useAxios().post('/register', data).then(() => {
        setRegisterEmail(data.email); // Register email to use for verification
        setSelectedAuth("verifyRegister"); // Switch to verify register step
      });
    }
    else if (selectedAuth === "verifyRegister") {
      const data = {
        email: registerEmail,
        code: registerVerifyValue
      };

      useAxios().post('/users/verify', data).then(res => {
        console.log(res);
        setSelectedAuth("login"); // After verification, switch to login
      });
    }
    else if (selectedAuth === "login") {
      const data = {
        usernameoremail: target.email?.value || "",
        password: target.password?.value || ""
      };

      useAxios().post('/users/verify', data).then(res => {
        console.log(res);
        setSelectedAuth("login"); // Stay on login if valid
      });
    }
  }

  return (
    <header>
      <nav className="bg-white shadow-sm mx-24">
        <div className="container mx-auto flex justify-between items-center p-7">
          <Link href="/" className="">
            <img src="/logo.png" alt="logo" />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${pathname === link.href
                  ? "text-[16px] relative leading-5 text-[#3D3D3D] font-bold before:h-[3px] before:absolute before:w-full before:bg-[#46A358] before:bottom-[-30px] before:duration-500 duration-200 before:scale-100"
                  : "before:scale-0"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-9">
            <button>
              <img src="/search.svg" alt="icon" />
            </button>

            <button className="relative">
              <img src="/basket.svg" alt="icon" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Button
              leftIcon={<LogIcon />}
              extraStyle="w-[100px] gap-[4px]"
              onClick={() => setLoginModal(true)}
              type="button"
              title="Login"
            />
          </div>
        </div>
      </nav>

      <Modal openModal={loginModal} setOpenModal={setLoginModal} extraStyle="w-[500px]">
        <ul className="flex cursor-pointer items-center font-semibold gap-[10px] justify-center mb-[40px] pt-[50px]">
          <li
            onClick={() => setSelectedAuth("login")}
            className={`${selectedAuth === "login" ? "text-[#46A358]" : "text-[#3D3D3D]"
              } text-[16px] font-semibold relative hover:opacity-70 duration-200 leading-5  after:h-4 after:bg-[#3D3D3D] after:absolute after:right-[-12px] after:bottom-0`}
          >
            Login
          </li>
          <li
            onClick={() => setSelectedAuth("register")}
            className={`${selectedAuth === "register" ? "text-[#46A358]" : "text-[#3D3D3D]"
              } text-[16px] leading-5 hover:opacity-70 duration-200 font-semibold`}
          >
            Register
          </li>
        </ul>
        <form onSubmit={handleSubmitLogin} className="w-[300px] mx-auto mt-[53px] space-y-5">
          {selectedAuth === "login" && <LoginIputs />}
          {selectedAuth === "register" && <Register />}
          {selectedAuth === "verifyRegister" && <VerifyRegister setRegisterVerifyValue={setRegisterVerifyValue} />}

          <Button extraStyle="w-full" title={selectedAuth === "login" ? "Login" : selectedAuth === "register" ? "Register" : "Verify"} type="submit" />
        </form>
      </Modal>
    </header>
  );
};

export default Header;
