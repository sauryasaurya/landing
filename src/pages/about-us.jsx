import AboutUsServices from "@/components/AboutUsServices";
import AboutUsTrackAudience from "@/components/AboutUsTrackAudience";
import ContactSection from "@/components/Contact";

const ContactUs = () => {
	return (
		<section className="mt-30">
			<AboutUsTrackAudience />
			{/* <AboutUsTrack /> */}
			<AboutUsServices />
			<ContactSection />
		</section>
	);
};

export default ContactUs;
