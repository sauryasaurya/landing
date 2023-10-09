import dashboard from "@/common/assets/image/webAppCreative/dashboard.png";
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import PropTypes from "prop-types";

import Section, {
	BannerContent,
	BannerContentWrapper,
	Figure,
} from "./banner.style";

const Banner = ({ button }) => {
	return (
		<Section id="home">
			<Container width="1400px">
				<BannerContentWrapper>
					<BannerContent>
						<Heading
							className="animate__animated animate__fadeInUp"
							content="Free Scheduling and Time tracking Software for your company."
						/>
						<Text
							className="animate__animated animate__fadeInUp"
							content="Velorona is a time tracker and a timesheet app that let's you generate auto Invoice for your clients according to worked hour whithout need of any extra tools."
						/>
						<Button {...button} title="Get a demo" type="submit" />
					</BannerContent>
					<Figure className="animate__animated animate__fadeInUp animate__fast">
						<NextImage src={dashboard} alt="dashboard" />
					</Figure>
				</BannerContentWrapper>
			</Container>
		</Section>
	);
};

Banner.propTypes = {
	button: PropTypes.object,
};

Banner.defaultProps = {
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
};

export default Banner;
