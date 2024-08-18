import { useNavigate } from "react-router-dom";
import { AuthController } from "../controllers/authController";
import { useMemo } from "react";
import { useAuthStore } from "../store/authStore";
import { RegisterWithEmailAndPasswordParams } from "../../domain/interfaces/interfaces";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Id } from "react-toastify";

interface FormRegister extends RegisterWithEmailAndPasswordParams {
  confirmPassword: string;
}

interface Props {
  handleNotifyError: (message: string) => Id;
}

export const useRegister = ({ handleNotifyError }: Props) => {
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

  interface MyError extends Error {
    errorcode: string;
  }

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: handleRegister,
    onSuccess: (data) => {
      registerWithEmailAndPassword(data);
      navigate("/dashboard", { replace: true });
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

  return {
    formik,
    mutation,
  };
};
