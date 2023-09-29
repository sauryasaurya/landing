import Box from "@/common/components/Box";
import Button from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import { TrackData } from "@/common/data/AppMinimal";
import { footerTop } from "@/common/data/WebAppCreative";

import Input from "@/common/components/Input";
import { Icon } from "react-icons-kit";
import { paperPlane } from "react-icons-kit/fa/paperPlane";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_place } from "react-icons-kit/md/ic_place";

import { ContactInfo, InfoItem } from "./footer.style";
import ContactFormWrapper from "./form.style";
import TrackArea, { Col, Row } from "./track.style";

const ContactUsMessage = ({ button }) => {
	const { title, paragraph, trackBox } = TrackData;
	return (
		<TrackArea>
			<Container className="Container">
				<Row>
					<Col>
						<Box className="Left">
							<ContactInfo>
								<Heading as="h4" content={footerTop.contactInfo.title} />
								<InfoItem>
									<Icon icon={ic_place} size={24} />
									<Text content={footerTop.contactInfo.address} />
								</InfoItem>
								<InfoItem>
									<Icon icon={ic_phone} size={26} className="phone-icon" />
									<div>
										<Text
											className="phone-number"
											content={footerTop.contactInfo.phone}
										/>
										<Text content={footerTop.contactInfo.openingTime} />
									</div>
								</InfoItem>
								<InfoItem>
									<Icon icon={paperPlane} size={22} />
									<Text content={footerTop.contactInfo.email} />
								</InfoItem>
							</ContactInfo>
						</Box>
					</Col>

					<Col>
						<Box className="Right">
							<Heading content="Contact Us" />

							<ContactFormWrapper>
								<div
									className="messageInput"
									style={{ marginTop: "1rem", marginBottom: "1rem" }}
								>
									<Input
										inputType="text"
										placeholder="Your Name"
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
										placeholder="Your Email"
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
										placeholder="Your Contact"
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
										inputType="textarea"
										placeholder="Your Message"
										iconPosition="right"
										isMaterial={false}
										aria-label="message"
									/>
								</div>
								<Button {...button} title="SEND MESSAGE" />
							</ContactFormWrapper>
						</Box>
					</Col>
				</Row>
			</Container>
		</TrackArea>
	);
};

ContactUsMessage.defaultProps = {
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

export default ContactUsMessage;
