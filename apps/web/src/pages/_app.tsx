import { useState } from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import nextI18NextConfig from "@root/next-i18next.config.js";
import "@styles/globals.css";
import "@styles/atom-one-dark.css";
import "@styles/line-number.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(true);
	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeComplete", () => setLoading(false));
	return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, nextI18NextConfig) as any;
