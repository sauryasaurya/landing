import Heading from "@/common/components/Heading";
import NextImage from "@/common/components/NextImage";
import Container from "@/common/components/UI/ContainerTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper, {
	Caption,
	Content,
	Figure,
	Testimonial,
} from "./testimonials.style";

import { testimonials } from "@/common/data/HostingModern";

const settings = {
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: (index, className) => {
			return `<button class="${className} swiper-custom-pagination"></button>`;
		},
	},
};

const AboutUsTestimonials = () => {
	return (
		<SectionWrapper id="testimonials">
			<Container>
				<Content>
					<Swiper className="slider" {...settings}>
						{testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<Testimonial>
									<Figure>
										<NextImage src={testimonial.image} alt={testimonial.name} />
									</Figure>
									<Caption>
										<Heading content={testimonial.quote} />
										<p>
											<strong>{testimonial.name}</strong>,{" "}
											{testimonial.designation}
										</p>
									</Caption>
								</Testimonial>
							</SwiperSlide>
						))}
					</Swiper>
				</Content>
			</Container>
		</SectionWrapper>
	);
};

export default AboutUsTestimonials;
