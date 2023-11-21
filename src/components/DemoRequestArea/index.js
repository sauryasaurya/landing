import Box from "@/common/components/Box";
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Input from "@/common/components/Input";
import NextImage from "@/common/components/NextImage";
import Container from "@/common/components/UI/Container";
import { technologyCommunity } from "@/common/data/AppCreative2";
import Fade from "react-reveal/Fade";
import Section, {
	Content,
	Figure,
	FigureWrapper,
	Grid,
} from "./technology.style";

const DemoRequestArea = ({ button }) => {
	return (
		<Section>
			<Container width="1400px">
				<Grid>
					<FigureWrapper>
						<Box className="Right">
							<Heading content="Request a Demo" />
							<div
								className="messageInput"
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
							>
								<Input
									inputType="text"
									placeholder="Full Name"
									iconPosition="right"
									isMaterial={false}
									aria-label="name"
								/>
							</div>

							<div
								className="messageInput"
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
							>
								<Input
									inputType="email"
									placeholder="Business Email"
									iconPosition="right"
									isMaterial={false}
									className="email_input"
									aria-label="email"
								/>
							</div>

							<div
								className="messageInput"
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
							>
								<Input
									inputType="text"
									placeholder="Phone Number"
									iconPosition="right"
									isMaterial={false}
									aria-label="contact"
								/>
							</div>
							<div
								className="messageInput"
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
							>
								<Input
									inputType="text"
									placeholder="Company Name"
									iconPosition="right"
									isMaterial={false}
									aria-label="contact"
								/>
							</div>
							<div
								className="messageInput"
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
							>
								<Input
									inputType="text"
									placeholder="Job Title"
									iconPosition="right"
									isMaterial={false}
									aria-label="contact"
								/>
							</div>

							<Button {...button} title="Request Demo" />
						</Box>
					</FigureWrapper>

					<Content>
						<Fade up>
							<Figure>
								<NextImage src={technologyCommunity?.thumb} alt="analytics" />
							</Figure>
						</Fade>
					</Content>
				</Grid>
			</Container>
		</Section>
	);
};

export default DemoRequestArea;
