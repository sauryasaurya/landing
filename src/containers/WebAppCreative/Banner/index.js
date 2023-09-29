import React from "react";
import Container from "@/common/components/UI/Container";
import Heading from "@/common/components/Heading";
import Text from "@/common/components/Text";
import Input from "@/common/components/Input";
import Button from "@/common/components/Button";
import NextImage from "@/common/components/NextImage";
import Section, {
	BannerContentWrapper,
	BannerContent,
	Subscribe,
	Figure,
} from "./banner.style";
import dashboard from "@/common/assets/image/webAppCreative/dashboard.png";
import envelope from "@/common/assets/image/webAppCreative/icons/envelope.png";

const Banner = () => {
	return (
		<Section id="home">
			<Container width="1400px">
				<BannerContentWrapper>
					<BannerContent>
						<Heading
							className="animate__animated animate__fadeInUp"
							content="Schedule work and generate Auto Invoice for your client in one place."
						/>
						<Text
							className="animate__animated animate__fadeInUp"
							content="Velorona is a time tracker and a timesheet app that let's you generate auto Invoice for your clients according to worked hour whithout need of any extra tools."
						/>
						<Subscribe className="animate__animated animate__fadeInUp">
							{/* <Input
                inputType="email"
                placeholder="Your work email"
                iconPosition="left"
                aria-label="email"
                icon={<img src={envelope?.src} alt="envelope" />}
              />
              <Button title="Get a demo" type="submit" /> */}
						</Subscribe>
					</BannerContent>
					<Figure className="animate__animated animate__fadeInUp animate__fast">
						<NextImage src={dashboard} alt="dashboard" />
					</Figure>
				</BannerContentWrapper>
			</Container>
		</Section>
	);
};

export default Banner;
