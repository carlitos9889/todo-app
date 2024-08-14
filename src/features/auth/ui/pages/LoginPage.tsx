import { Button, Checkbox, Input } from "@nextui-org/react";
import { EmailIcon, GoogleIcon, PasswordIcon } from "../components";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts";
import { useLogin } from "../hooks";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export const LoginPage = (): JSX.Element => {
	const handleNotifyError = (message: string) => {
		return toast.error(message);
	};

	const { formik, isPending, handleLoginWithGoogle } = useLogin({
		handleNotifyError,
	});

	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<AuthLayout>
				<form
					onSubmit={formik.handleSubmit}
					className="animate-fadeIn space-y-6 flex flex-col items-center justify-center px-8 pt-5 md:min-w-[340px]"
				>
					<h1 className="font-bold text-2xl self-start">Sign In</h1>
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
					<Checkbox>
						<span className="text-sm underline text-center">
							Remember me
						</span>
					</Checkbox>
					<Button
						disableAnimation
						disabled={isPending}
						type="submit"
						className="w-full md:w-3/5 max-w-xs rounded-md"
						color="primary"
					>
						{isPending ? "Loading..." : "Sign In"}
					</Button>
					<section className="w-full">
						<p className="text-sm font-light flex items-center">
							Or, login with:{" "}
							<span className="ml-2">
								<GoogleIcon onClick={handleLoginWithGoogle} />
							</span>
						</p>
						<p className="text-sm font-light">
							Don`t have a account?{" "}
							<span className="font-semibold text-blue-400">
								<Link to="/auth/register">Create one</Link>
							</span>
						</p>
					</section>
				</form>
				<div className="hidden md:block bg-svg-login bg-contain bg-center w-2/5 bg-no-repeat" />
			</AuthLayout>
			<ToastContainer />
		</div>
	);
};
