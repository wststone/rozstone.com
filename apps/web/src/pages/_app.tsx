import { useState } from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import Head from "next/head";
import nextI18NextConfig from "@root/next-i18next.config.js";
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(true);
	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeComplete", () => setLoading(false));
	return (
		<>
			{loading && (
				<Head>
					<title>读取中</title>
					<link
						rel="icon"
						href="/favicon/routing.gif"
						type="image/gif"
					/>
				</Head>
			)}
			<Component {...pageProps} />
		</>
	);
};

export default appWithTranslation(MyApp, nextI18NextConfig);
