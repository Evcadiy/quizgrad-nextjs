import { useForm } from "react-hook-form";
import { LoginFormSchema, RegisterFormSchema } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps, FormValues } from "@/types/formTypes";
import { useAppDispatch } from "@/redux/store";
import { loginAsync } from "@/redux/slices/authSlice";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "@/scss/components/form/form.scss";

const Form: React.FC<FormProps> = ({ isMember }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(isMember ? LoginFormSchema : RegisterFormSchema),
  });
  const dispatch = useAppDispatch();
  const [eyeOpen, setEyeOpen] = useState(false);
  const [passType, setPassType] = useState("password");

  const onSubmit = async (data: FormValues) => {
    const schema = isMember ? LoginFormSchema : RegisterFormSchema;
    const validatedData = schema.parse(data);
    console.log(validatedData);
    if (isMember) {
      dispatch(loginAsync(validatedData));
    }
    // else {
    //   dispatch(regAsync(validatedData));
    // }
  };

  const handlePasswordEye = () => {
    setEyeOpen(!eyeOpen);
    setPassType(!eyeOpen ? "text" : "password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Welcome back! <br /> Please {isMember ? "Login" : "Register"} to your
        account.
      </p>
      {!isMember && (
        <div>
          <input
            type="text"
            placeholder="User Name"
            {...register("username")}
          />
        </div>
      )}

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
        {isMember ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default Form;
