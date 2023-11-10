import Heading from "@/common/components/Heading";
import Link from "@/common/components/Link";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import { Icon } from "react-icons-kit";
import { ic_chevron_right } from "react-icons-kit/md/ic_chevron_right";

import {
	ContentWrapper,
	Illustration,
	Section,
	TextContent,
} from "./trackAudience.style";

import illustration from "@/common/assets/image/saasMinimal2/track-audience.png";

const AboutUsTrackAudience = () => {
	return (
		<Section>
			<Container>
				<ContentWrapper>
					<TextContent>
						<Heading
							className="title"
							content="We thrive to empower your business by catering to all your needs."
						/>
						<Text
							className="desc"
							content="Velorona is dedicated to fulfilling every aspect of your business needs. We offer exceptional solutions for employee management, work scheduling, timesheets, time tracking, and invoicing."
						/>
						<Text
							className="desc"
							content="With our advanced platform, business owners, service providers, and employees no longer need to invest excessive time and effort in paperwork. Instead, they can focus more on meaningful and progressive activities, ultimately contributing to business growth and success. Experience the transformative journey from administrative burdens to streamlined operations with Velorona."
						/>
						<Link className="link" href="#">
							Learn More <Icon size={20} icon={ic_chevron_right} />
						</Link>
					</TextContent>

					<Illustration>
						<NextImage src={illustration} alt="illustration" />
					</Illustration>
				</ContentWrapper>
			</Container>
		</Section>
	);
};

export default AboutUsTrackAudience;
