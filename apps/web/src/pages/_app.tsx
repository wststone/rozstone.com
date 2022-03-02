import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "@root/next-i18next.config.js";
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, nextI18NextConfig);
