import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	isRowReverse?: boolean;
}

export const AuthLayout: FC<Props> = ({ children, isRowReverse }) => {
	return (
		<div
			className={`w-3/4 max-w-[800px] max-h-[600px] md:max-h-screen overflow-scroll bg-white rounded-md shadow-md space-y-8 py-8 md:flex justify-evenly ${
				isRowReverse ? "flex-row-reverse" : ""
			}`}
		>
			{children}
		</div>
	);
};
