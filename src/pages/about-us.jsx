import AboutUsServices from "@/components/AboutUsServices";
import AboutUsTrackAudience from "@/components/AboutUsTrackAudience";
import ContactSection from "@/components/Contact";

const AboutUs = () => {
	return (
		<section className="mt-12 md:mt-16 lg:mt-24">
			<AboutUsTrackAudience />
			{/* <AboutUsTrack /> */}
			<AboutUsServices />
			<ContactSection />
		</section>
	);
};

export default AboutUs;
