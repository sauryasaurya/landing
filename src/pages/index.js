import AnalyticsTool from "@/containers/WebAppCreative/AnalyticsTool";
import Banner from "@/containers/WebAppCreative/Banner";
import CallToAction from "@/containers/WebAppCreative/CallToAction";
import Dashboard from "@/containers/WebAppCreative/Dashboard";
import Faq from "@/containers/WebAppCreative/Faq";
import HowItWorks from "@/containers/WebAppCreative/HowItWorks";
import Testimonials from "@/containers/WebAppCreative/Testimonials";
import "animate.css";

const webAppCreative = () => {
	return (
		<>
			<Banner />
			{/* Clients / Companies are commented for now. Will Implement later */}
			{/* <Clients /> */}
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
