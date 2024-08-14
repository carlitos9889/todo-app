import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	isRowReverse?: boolean;
}

export const AuthLayout: FC<Props> = ({ children, isRowReverse }) => {
	return (
		<div
			className={`w-3/4 max-w-[800px]  bg-white rounded-md shadow-md space-y-8 py-8 md:flex justify-evenly ${
				isRowReverse ? "flex-row-reverse" : ""
			}`}
		>
			{children}
		</div>
	);
};
