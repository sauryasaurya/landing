import "@/styles/globals.css";
import "animate.css";

import "@/common/assets/css/flaticon.css";
import "@/common/assets/css/icon-example-page.css";
import "@/containers/CryptoModern/CountDown/timer.css";
import { NextUIProvider } from "@nextui-org/react";
// swiper bundle styles
import "@/common/assets/css/rc-collapse.css";
import "@/common/assets/css/rc-drawer.css";
import "@/common/assets/css/react-slick.css";
import "rc-collapse/assets/index.css";
import "swiper/css/bundle";

import Layout from "@/components/layout";

export default function CustomApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	);
}
