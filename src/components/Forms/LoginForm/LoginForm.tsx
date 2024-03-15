import { FormValues } from "@/types/formTypes";
import React from "react";
import { useForm } from "react-hook-form";

import "@/scss/components/form/form.scss";
import { login } from "@/actions/login";
import { z } from "zod";
import LoginFormSchema from "@/utils/zod";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const validatedData = LoginFormSchema.parse(data);
      console.log(validatedData);
      const response = await login(validatedData);
      console.log(response.data);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.error(error.errors);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Welcome back! <br /> Please Login to your account.
      </p>
      <div>
        <input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button className="btn from-left" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
