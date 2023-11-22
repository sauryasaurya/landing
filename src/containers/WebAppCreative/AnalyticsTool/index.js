import parallaxBg from "@/common/assets/image/webAppCreative/parallax-1.png";
import Heading from "@/common/components/Heading";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import { Icon } from "react-icons-kit";
import { check } from "react-icons-kit/feather/check";
import Fade from "react-reveal/Fade";
import Section, { Content, Features, Figure, Grid } from "./analytics.style";

import { analyticsTool } from "@/common/data/WebAppCreative";

const AnalyticsTool = () => {
	return (
		<Section bgImage={parallaxBg?.src} bgImageAlt="the cat" strength={200}>
			<Container width="1400px">
				<Grid>
					<Fade up>
						<Figure>
							<NextImage
								src="https://velorona-storage.s3.amazonaws.com/assets/medias/what-to-do.png	"
								alt="illustration"
								width={782}
								height={400}
							/>
						</Figure>
					</Fade>
					<Content>
						<Text className="subtitle" content={analyticsTool.slogan} />
						<Heading content={analyticsTool.title} />
						<Text className="description" content={analyticsTool.desc} />
						<Features>
							{analyticsTool.features.map((feat, i) => (
								<li key={i}>
									<Icon icon={check} size={22} />
									{feat}
								</li>
							))}
						</Features>
						{/* We will add explore more when proper page is added. */}
						{/* <Link href={analyticsTool.button.link} className="explore">
							<Button
								title={analyticsTool.button.label}
								icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
							/>
						</Link> */}
					</Content>
				</Grid>
			</Container>
		</Section>
	);
};

export default AnalyticsTool;
