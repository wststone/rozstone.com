import { FunctionComponent } from "react";
import Header from "../Header";
import Footer from "@components/Footer";

interface LayoutProps {
	header?: boolean;
	footer?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
	header = true,
	footer = true,
	children,
}) => {
	return (
		<>
			{header && <Header />}
			<main className="p-5">{children}</main>
			{footer && <Footer />}
		</>
	);
};

export default Layout;
