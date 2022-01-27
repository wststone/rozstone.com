import { FunctionComponent } from "react";
import Header from "../Header";
import Footer from "@components/Footer";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<Header />
			<main className="p-5">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
