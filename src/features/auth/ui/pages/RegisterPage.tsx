import { Input, Checkbox, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
	ConfirmPasswordIcon,
	EmailIcon,
	FirstNameIcon,
	LastNameIcon,
	PasswordIcon,
	UserIcon,
} from "../components";
import { AuthLayout } from "../layouts";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormLogin {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const RegisterPage = (): JSX.Element => {
	const formik = useFormik<FormLogin>({
		initialValues: {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
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
			console.log({ values });
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
						isInvalid={formik.touched.firstName}
						errorMessage={formik.errors.firstName}
						type="text"
						placeholder="Enter First Name"
						startContent={<FirstNameIcon />}
						{...formik.getFieldProps("firstName")}
					/>
					<Input
						isInvalid={formik.touched.lastName}
						errorMessage={formik.errors.lastName}
						type="text"
						placeholder="Enter Last Name"
						startContent={<LastNameIcon />}
						{...formik.getFieldProps("lastName")}
					/>
					<Input
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
						// disabled={isPending}
						type="submit"
						className="w-full md:w-3/5 max-w-xs rounded-md"
						color="primary"
					>
						{/* {isPending ? "Loading..." : "Sign In"} */}
						Register
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
				<div className="hidden md:block bg-svg-register bg-contain bg-center w-2/5 bg-no-repeat" />
			</AuthLayout>
			<ToastContainer />
		</div>
	);
};
