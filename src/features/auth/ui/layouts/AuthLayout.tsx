import { FC, PropsWithChildren } from "react";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-3/4 md:h-1/2 max-w-[800px] maw bg-white rounded-md shadow-md space-y-8 py-8 md:flex justify-evenly">
			{children}
		</div>
	);
};
