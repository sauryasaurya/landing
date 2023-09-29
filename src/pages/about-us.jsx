import AboutUsServices from "@/components/AboutUsServices";
import AboutUsTestimonials from "@/components/AboutUsTestimonials";
import AboutUsTrackAudience from "@/components/AboutUsTrackAudience";
import ContactSection from "@/components/Contact";

const ContactUs = () => {
	return (
		<section className="mt-30">
			<AboutUsTrackAudience />
			{/* <AboutUsTrack /> */}
			<AboutUsServices />
			<AboutUsTestimonials />
			<ContactSection />
		</section>
	);
};

export default ContactUs;
