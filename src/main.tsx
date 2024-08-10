import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { routerApp } from "./RouterApp.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<RouterProvider router={routerApp} />
			</NextUIProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
);
