import { Input, Checkbox, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  ConfirmPasswordIcon,
  EmailIcon,
  PasswordIcon,
  UserIcon,
} from "../components";
import { AuthLayout } from "../layouts";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { AuthController } from "../controllers/authController";
import { RegisterWithEmailAndPasswordParams } from "../../domain/interfaces/interfaces";
import { useAuthStore } from "../store/authStore";

interface FormRegister extends RegisterWithEmailAndPasswordParams {
  confirmPassword: string;
}

export const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const authController = useMemo(() => new AuthController(), []);
  const registerWithEmailAndPassword = useAuthStore(
    (state) => state.registerWithEmailAndPassword
  );

  const handleRegister = async (values: RegisterWithEmailAndPasswordParams) => {
    const resp = await authController.registerWithEmailAndPassword({
      ...values,
    });

    return resp;
  };

  const handleNotifyError = (message: string) => {
    return toast.error(message);
  };

  interface MyError extends Error {
    errorcode: string;
  }

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: handleRegister,
    onSuccess: (data) => {
      registerWithEmailAndPassword(data);
      navigate("/dashboard");
    },
    onError: (error: MyError) => {
      handleNotifyError(error.errorcode);
    },
  });

  const formik = useFormik<FormRegister>({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Enter your userName"),
      email: Yup.string()
        .email("Invalid email")
        .required("Enter your email please"),
      password: Yup.string()
        .required("Enter your password please")
        .min(6, "Too short, minimum 6 characters"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <AuthLayout isRowReverse>
        <form
          onSubmit={formik.handleSubmit}
          className="animate-fadeIn space-y-6 flex flex-col items-center justify-center px-8 pt-5 md:min-w-[340px]"
        >
          <h1 className="font-bold text-2xl self-start">Sign Up</h1>
          <Input
            autoComplete="off"
            isInvalid={formik.touched.userName}
            errorMessage={formik.errors.userName}
            type="text"
            placeholder="Enter User Name"
            startContent={<UserIcon />}
            {...formik.getFieldProps("userName")}
          />
          <Input
            isInvalid={formik.touched.email}
            errorMessage={formik.errors.email}
            type="email"
            placeholder="Enter Email"
            startContent={<EmailIcon />}
            {...formik.getFieldProps("email")}
          />
          <Input
            isInvalid={formik.touched.password}
            errorMessage={formik.errors.password}
            type="password"
            placeholder="Enter Password"
            startContent={<PasswordIcon />}
            {...formik.getFieldProps("password")}
          />
          <Input
            isInvalid={formik.touched.confirmPassword}
            errorMessage={formik.errors.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            startContent={<ConfirmPasswordIcon />}
            {...formik.getFieldProps("confirmPassword")}
          />
          <Checkbox>
            <span className="text-sm underline text-center">
              I agree to all terms
            </span>
          </Checkbox>
          <Button
            disableAnimation
            disabled={mutation.isPending}
            type="submit"
            className="w-full md:w-3/5 max-w-xs rounded-md"
            color="primary"
          >
            {mutation.isPending ? "Loading..." : "Register"}
          </Button>
          <section className="w-full">
            <p className="text-sm font-light">
              Already have an account?{" "}
              <span className="font-semibold text-blue-400">
                <Link to="/auth/login">Sign In</Link>
              </span>
            </p>
          </section>
        </form>
        <div className="hidden animate-fadeIn md:block bg-svg-register bg-contain bg-center w-2/5 bg-no-repeat" />
      </AuthLayout>
      <ToastContainer />
    </div>
  );
};
