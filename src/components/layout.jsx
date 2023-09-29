import ResetCSS from "@/common/assets/css/style";
import { DrawerProvider } from "@/common/contexts/DrawerContext";
import { theme } from "@/common/theme/webAppCreative";
import Footer from "@/containers/WebAppCreative/Footer";
import Navbar from "@/containers/WebAppCreative/Navbar";
import {
	ContentWrapper,
	GlobalStyle,
} from "@/containers/WebAppCreative/webAppCreative.style";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<GlobalStyle />

			<ContentWrapper>
				<Sticky
					enabled={true}
					top={0}
					innerZ={9999}
					activeClass="sticky-nav-active"
					className="pRelative"
				>
					<DrawerProvider>
						<Navbar />
					</DrawerProvider>
				</Sticky>
				{children}
				<Footer />
			</ContentWrapper>
		</ThemeProvider>
	);
};

export default Layout;
