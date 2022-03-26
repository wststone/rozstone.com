import { FunctionComponent } from "react";
import Header from "../Header";
import Footer from "@components/Footer";
import Toasts from "./Toasts";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ToastProvider } from "ui";

interface LayoutProps extends HTMLMotionProps<"main"> {
	header?: boolean;
	footer?: boolean;
}

const variants: Variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

// This component is used to wrap the main content of the page.
const Layout: FunctionComponent<LayoutProps> = ({
	header = true,
	footer = false,
	children,
	...props
}) => {
	return (
		<ToastProvider>
			{header && <Header />}
			<Toasts />
			<motion.main
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{ type: "linear" }}
				className="p-3 sm:p-5 m-auto max-w-5xl"
				{...props}
			>
				{children}
			</motion.main>
			{footer && <Footer />}
		</ToastProvider>
	);
};

export default Layout;
