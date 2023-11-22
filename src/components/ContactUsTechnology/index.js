import Heading from "@/common/components/Heading";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import { technologyCommunity } from "@/common/data/AppCreative2";
import Fade from "react-reveal/Fade";
import Section, {
	Content,
	Figure,
	FigureWrapper,
	Grid,
	SectionHeading,
} from "./technology.style";

const ContactUsTechnology = () => {
	return (
		<Section>
			<Container width="1400px">
				<Grid>
					<Content>
						<SectionHeading>
							<Heading content={technologyCommunity?.title} />
							<Text
								className="description"
								content={technologyCommunity?.desc}
							/>
							{/* <Link
								href={technologyCommunity?.button?.link}
								className="explore"
							>
								<Button
									title={technologyCommunity?.button?.label}
									icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
								/>
							</Link> */}
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

export default ContactUsTechnology;
