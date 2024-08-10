import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
} from "react-router-dom";
import { LoginPage, RegisterPage } from "./features/auth/ui/pages";
import { RouterPrivate } from "./RouterPrivate";
import { DashBoardPage } from "./features/dashboard/ui/pages";
import { RouterPublic } from "./RouterPublic";

export const routerApp = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RouterPrivate />}>
				<Route path="dashboard" element={<DashBoardPage />} />
				<Route
					path="vital-task"
					element={
						<>
							<h1>Vital task</h1>
						</>
					}
				/>
				<Route
					path="my-task"
					element={
						<>
							<h1>My task</h1>
						</>
					}
				/>
				<Route
					path="categories-task"
					element={
						<>
							<h1>Categories task</h1>
						</>
					}
				/>
				<Route
					path="settings"
					element={
						<>
							<h1>Settings</h1>
						</>
					}
				/>
				<Route
					path="help"
					element={
						<>
							<h1>Help</h1>
						</>
					}
				/>
			</Route>

			<Route path="/auth/" element={<RouterPublic />}>
				<Route index element={<Navigate to="login" />} />
				<Route
					path="login"
					element={
						<div className="min-h-screen bg-primary bg-svg-red bg-no-repeat">
							<LoginPage />
						</div>
					}
				/>
				<Route
					path="register"
					element={
						<div className="min-h-screen bg-primary bg-svg-red bg-no-repeat">
							<RegisterPage />
						</div>
					}
				/>
				<Route
					path="*"
					element={
						<div className="min-h-screen bg-primary bg-svg-red bg-no-repeat">
							<LoginPage />
						</div>
					}
				/>
			</Route>
			<Route
				path="*"
				element={
					<div className="h-screen grid place-content-center">
						<p>Not Found</p>
					</div>
				}
			/>
		</>
	)
);
