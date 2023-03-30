import "../styles/globals.scss";
import "../styles/Font_scheme.scss";
import "../styles/Resolution.scss";


import "../styles/Index_layout.scss";
import "../styles/Header.scss";
import "../styles/MobileMenu.scss";
import "../styles/Footer.scss";

import "../styles/Project_summery.scss";
import "../styles/About.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
