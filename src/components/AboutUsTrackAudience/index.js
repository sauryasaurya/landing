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
							content="We thrive to provide all the needs of your business."
						/>
						<Text
							className="desc"
							content="With our top-notch employee management, work schedules, timesheets, time tracker, and invoices, business owners, service providers and employees are no longer required to exhaust too much time and energy on paperwork, but devote more time to better developmental activities."
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
