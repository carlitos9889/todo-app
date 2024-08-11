import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthController } from "../controllers/authController";
import { useAuthStore } from "../store/authStore";
import { Id } from "react-toastify";

interface FormLogin {
	email: string;
	password: string;
}

interface MyError extends Error {
	errorcode: string;
}

interface Props {
	handleNotifyError: (message: string) => Id;
}

export const useLogin = ({ handleNotifyError }: Props) => {
	const authController = useMemo(() => new AuthController(), []);
	const navigate = useNavigate();

	// --------------- store auth --------------------------//
	const loginWithEmailAndPassword = useAuthStore(
		(state) => state.loginWithEmailAndPassword
	);

	const signWithGoogle = useAuthStore(
		(state) => state.signInWithPopupWithGooogle
	);
	// --------------- store auth --------------------------//

	const handleLogin = async ({ email = "", password = "" }) => {
		const resp = await authController.loginWithEmailAndPassword(
			email,
			password
		);
		return resp;
	};

	const handleLoginWithGoogle = async () => {
		const user = await authController.signInWithPopupWithGooogle();
		signWithGoogle(user);
	};

	const mutation = useMutation({
		mutationFn: handleLogin,
	});

	const formik = useFormik<FormLogin>({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email")
				.required("Enter your email please"),
			password: Yup.string()
				.required("Enter your password please")
				.min(6, "Too short, minimum 6 characters"),
		}),
		onSubmit: (values) => {
			mutation.mutate(values, {
				onSuccess: (data) => {
					loginWithEmailAndPassword(data);
					navigate("/", { replace: true });
				},
				onError: (error) => {
					formik.resetForm();

					handleNotifyError((error as MyError).errorcode);

					console.log({ error: (error as MyError).errorcode });
				},
			});
		},
	});

	return {
		formik,
		handleLoginWithGoogle,
		...formik,
		mutation,
		...mutation,
	};
};
