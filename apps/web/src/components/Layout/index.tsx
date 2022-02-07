import { FunctionComponent } from "react";
import Header from "../Header";
import Footer from "@components/Footer";
import { DarkModeScript } from "@components/Script";

interface LayoutProps {
	header?: boolean;
	footer?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
	header = true,
	footer = false,
	children,
}) => {
	return (
		<>
			<DarkModeScript />
			{header && <Header />}
			<main className="p-5">{children}</main>
			{footer && <Footer />}
		</>
	);
};

export default Layout;
