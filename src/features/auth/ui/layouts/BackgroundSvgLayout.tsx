import { FC, PropsWithChildren } from "react";

export const BackgroundSvgLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="min-h-screen w-screen bg-cover bg-primary bg-svg-red bg-no-repeat">
			{children}
		</div>
	);
};
