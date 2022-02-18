import Document, { Html, Head, Main, NextScript } from "next/document";
import { DarkModeScript } from "@components/Script";
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon/favicon.ico" />
				</Head>
				<body className="bg-neutral-50 dark:bg-neutral-800 transition-colors duration-300">
				<DarkModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
