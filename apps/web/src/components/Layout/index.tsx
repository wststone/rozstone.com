import { FunctionComponent } from "react";
import Header from "../Header";
import Footer from "@components/Footer";
import { motion, Variants } from "framer-motion";

interface LayoutProps {
	header?: boolean;
	footer?: boolean;
}

const variants: Variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: FunctionComponent<LayoutProps> = ({
	header = true,
	footer = false,
	children,
}) => {
	return (
		<>
			{/* <DarkModeScript /> */}
			{header && <Header />}
			<motion.main
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{ type: "linear" }}
				className="p-5"
			>
				{children}
			</motion.main>
			{footer && <Footer />}
		</>
	);
};

export default Layout;
