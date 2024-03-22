import { useForm } from "react-hook-form";
import LoginFormSchema from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues } from "@/types/formTypes";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { loginAsync } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import "@/scss/components/form/form.scss";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(LoginFormSchema) });
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [passType, setPassType] = useState("password");

  const onSubmit = async (data: FormValues) => {
    const validatedData = LoginFormSchema.parse(data);
    console.log(validatedData);
    dispatch(loginAsync(validatedData));
  };

  const handlePasswordEye = () => {
    setEyeOpen(!eyeOpen);
    setPassType(!eyeOpen ? "text" : "password");
  };

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Welcome back! <br /> Please Login to your account.
      </p>
      <div>
        <input type="email" placeholder="E-mail" {...register("email")} />
      </div>
      {errors.email && (
        <span className="for-errors">{errors.email.message}</span>
      )}
      <div className="password-input">
        <input
          type={passType}
          placeholder="Password"
          {...register("password")}
        />

        <button type="button" onClick={handlePasswordEye}>
          {eyeOpen ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
      {errors.password && (
        <span className="for-errors">{errors.password.message}</span>
      )}
      <button
        className={`${errors.email || errors.password ? "disabled" : ""}`}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
