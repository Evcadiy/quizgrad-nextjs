"use client";

import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import Image from "next/image";
import React, { useState } from "react";

import regImg from "@/assets/reg-image.svg";
import logo from "@/assets/logo-full.svg";

import "@/scss/register-page/register-page.scss";
import "@/scss/register-page/register-page-media.scss";
const Register: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="left-half">
        <Image className="logo-reg-img" alt={"Logo"} src={logo} />
        <section className="reg-section">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <button className="switch" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "New to QuizGrad? Create an account"
              : "Already a member? Login"}
          </button>
        </section>
      </div>
      <div className="right-half">
        <Image
          width={600}
          priority
          className="reg-image"
          src={regImg}
          alt="RegImage"
        />
      </div>
    </div>
  );
};

export default Register;
