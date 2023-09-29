import ContactSection from "@/components/Contact";
import ContactUsMessage from "@/components/ContactUsMessage";
import ContactUsTechnology from "@/components/ContactUsTechnology";

const ContactUs = () => {
	return (
		<section className="mt-30">
			<ContactUsTechnology />
			<ContactUsMessage />
			<ContactSection />
		</section>
	);
};

export default ContactUs;
