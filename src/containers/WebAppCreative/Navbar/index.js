import Box from "@/common/components/Box";
import Button from "@/common/components/Button";
import Drawer from "@/common/components/Drawer";
import HamburgMenu from "@/common/components/HamburgMenu";
import NavbarWrapper from "@/common/components/Navbar";
import Container from "@/common/components/UI/Container";
import Logo from "@/common/components/UIElements/Logo";
import { DrawerContext } from "@/common/contexts/DrawerContext";
import Link from "next/link";
import PropTypes from "prop-types";
import { useContext } from "react";

import ScrollSpyMenu from "@/common/components/ScrollSpyMenu";
import { menu_items } from "@/common/data/WebAppCreative";

import logoImage from "@/common/assets/image/webAppCreative/velorona50x50.svg";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
	const { state, dispatch } = useContext(DrawerContext);

	// Toggle drawer
	const toggleHandler = () => {
		dispatch({
			type: "TOGGLE",
		});
	};

	return (
		<NavbarWrapper {...navbarStyle}>
			<Container width="1400px">
				<Box {...row}>
					<Logo
						href="/"
						logoSrc={logoImage}
						title="SaaS Creative"
						logoStyle={logoStyle}
						className="main-logo"
					/>
					<Box {...menuWrapper} className="mainMenuWrapper">
						<ScrollSpyMenu
							className="main_menu"
							menuItems={menu_items}
							offset={-70}
						/>
						<Link href="#" legacyBehavior>
							<a className="navbar_button navbar_button_one">
								<Button {...button} title="Login Now" />
							</a>
						</Link>
						<Link href="#" legacyBehavior>
							<a className="navbar_button navbar_button_two">
								<Button {...button} title="Join Free" />
							</a>
						</Link>
						<Drawer
							width="420px"
							placement="right"
							drawerHandler={<HamburgMenu barColor="#108AFF" />}
							open={state.isOpen}
							toggleHandler={toggleHandler}
						>
							<ScrollSpyMenu
								className="mobile_menu"
								menuItems={menu_items}
								drawerClose={true}
								offset={-100}
							/>
						</Drawer>
					</Box>
				</Box>
			</Container>
		</NavbarWrapper>
	);
};

Navbar.propTypes = {
	navbarStyle: PropTypes.object,
	logoStyle: PropTypes.object,
	button: PropTypes.object,
	row: PropTypes.object,
	menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
	navbarStyle: {
		className: "web_app_creative_navbar",
		minHeight: "70px",
		display: "block",
	},
	row: {
		flexBox: true,
		alignItems: "center",
		width: "100%",
	},
	logoStyle: {
		maxWidth: ["126px", "126px"],
	},
	button: {},
	menuWrapper: {
		flexBox: true,
		alignItems: "center",
	},
};

export default Navbar;
