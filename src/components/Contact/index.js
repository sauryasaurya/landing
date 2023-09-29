import Box from "@/common/components/Box";
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Input from "@/common/components/Input";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import PropTypes from "prop-types";

import ContactFromWrapper from "./contact.style";

const ContactSection = ({
	sectionWrapper,
	row,
	contactForm,
	secTitleWrapper,
	secHeading,
	secText,
	button,
	note,
}) => {
	return (
		<Box {...sectionWrapper}>
			<Container>
				<Box {...secTitleWrapper}>
					{/* <Text {...secText} content="CONTACT US" /> */}
					<Heading {...secHeading} content="Want to get in touch with us?" />
					<Text
						{...note}
						content="Subscribe to our newsletter for regular newsletters ans stay in touch with us. "
					/>
					<ContactFromWrapper>
						<Input
							inputType="email"
							placeholder="Your Email"
							iconPosition="right"
							isMaterial={false}
							className="email_input"
							aria-label="email"
						/>
						<Button {...button} title="Subscribe" />
					</ContactFromWrapper>
				</Box>
				{/* <Box {...row}>
          <Box {...contactForm}>
          </Box>
        </Box> */}
			</Container>
		</Box>
	);
};

ContactSection.propTypes = {
	sectionWrapper: PropTypes.object,
	secTitleWrapper: PropTypes.object,
	row: PropTypes.object,
	contactForm: PropTypes.object,
	secHeading: PropTypes.object,
	secText: PropTypes.object,
	button: PropTypes.object,
	note: PropTypes.object,
};

ContactSection.defaultProps = {
	sectionWrapper: {
		id: "contact_section",
		as: "section",
		pt: ["0px", "10px", "20px", "80px"],
		pb: ["0px", "0px", "0px", "0px", "80px"],
		bg: "#f9fbfd",
	},
	secTitleWrapper: {
		mb: ["45px", "50px", "60px"],
	},
	secText: {
		as: "span",
		display: "block",
		textAlign: "center",
		fontSize: `${2}`,
		letterSpacing: "0.15em",
		fontWeight: `${6}`,
		color: "primary",
		mb: `${3}`,
	},
	secHeading: {
		textAlign: "center",
		fontSize: [`${6}`, `${8}`],
		fontWeight: "400",
		color: "headingColor",
		letterSpacing: "-0.025em",
		mb: `${0}`,
	},
	row: {
		flexBox: true,
		justifyContent: "center",
	},
	contactForm: {
		width: [1, 1, 1, 1 / 2],
	},
	button: {
		type: "button",
		fontSize: `${2}`,
		fontWeight: "600",
		borderRadius: "4px",
		pl: "22px",
		pr: "22px",
		colors: "primaryWithBg",
		height: `${4}`,
	},
	note: {
		fontSize: ["13px", "14px", "15px", "15px", "15px"],
		color: "#5d646d",
		lineHeight: "1.87",
		textAlign: "center",
	},
};

export default ContactSection;
