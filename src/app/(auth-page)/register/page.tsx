"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/store";
import regImg from "@/assets/reg-image.svg";
import logo from "@/assets/logo-full.svg";
import "@/scss/register-page/register-page.scss";
import "@/scss/register-page/register-page-media.scss";
import Form from "@/components/Form/Form";

const Register: React.FC = () => {
  const [isMember, setIsMember] = useState(true);
  const state = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  return (
    <div>
      <div className="left-half">
        <Image className="logo-reg-img" alt={"Logo"} src={logo} />
        <section className="reg-section">
          <Form isMember={isMember} />
          <button className="switch" onClick={() => setIsMember(!isMember)}>
            {isMember
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
