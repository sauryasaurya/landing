import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="Description" content="React next landing page" />
					<meta name="theme-color" content="#ec5555" />
					{/* Load google fonts */}
					{/* <link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;700;800&display=swap"
						/>  
					*/}
					<link rel="icon" href="/favicon.png" />
					<link
						rel="icon"
						href="https://velorona-storage.s3.amazonaws.com/assets/logos/transparent/logo-only/png/50x50.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
