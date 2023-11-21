import ContactSection from "@/components/Contact";
import ContactUsMessage from "@/components/ContactUsMessage";
import ContactUsTechnology from "@/components/ContactUsTechnology";

const ContactUs = () => {
	return (
		<section className="mt-12">
			<ContactUsTechnology />
			<ContactUsMessage />
			<ContactSection />
		</section>
	);
};

export default ContactUs;
