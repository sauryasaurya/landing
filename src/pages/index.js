import AnalyticsTool from "@/containers/WebAppCreative/AnalyticsTool";
import Banner from "@/containers/WebAppCreative/Banner";
import CallToAction from "@/containers/WebAppCreative/CallToAction";
import Clients from "@/containers/WebAppCreative/Clients";
import Dashboard from "@/containers/WebAppCreative/Dashboard";
import Faq from "@/containers/WebAppCreative/Faq";
import HowItWorks from "@/containers/WebAppCreative/HowItWorks";
import Testimonials from "@/containers/WebAppCreative/Testimonials";
import "animate.css";

const webAppCreative = () => {
	return (
		<>
			<Banner />
			<Clients />
			<HowItWorks />
			<AnalyticsTool />
			<Dashboard />
			<Testimonials />

			<Faq />
			<CallToAction />
		</>
	);
};
export default webAppCreative;
