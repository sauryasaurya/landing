import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Link from "@/common/components/Link";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import {
	technologyCommunity,
	technologyCommunityPricing,
} from "@/common/data/AppCreative2";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Fade from "react-reveal/Fade";
import Section, {
	Content,
	Figure,
	FigureWrapper,
	Grid,
	SectionHeading,
} from "./technology.style";

const ContactUsTechnologyPricing = () => {
	return (
		<Section>
			<Container width="1400px">
				<Grid>
					<Content>
						<SectionHeading>
							<Heading content={technologyCommunityPricing?.title} />
							<Text
								className="description"
								content={technologyCommunityPricing?.desc}
							/>
							<Link
								href={technologyCommunity?.button?.link}
								className="explore"
							>
								<Button
									title={technologyCommunity?.button?.label}
									icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
								/>
							</Link>
						</SectionHeading>
					</Content>
					<FigureWrapper>
						<Fade up>
							<Figure>
								<NextImage src={technologyCommunity?.thumb} alt="analytics" />
							</Figure>
						</Fade>
					</FigureWrapper>
				</Grid>
			</Container>
		</Section>
	);
};

export default ContactUsTechnologyPricing;
