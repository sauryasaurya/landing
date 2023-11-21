import ContactSection from "@/components/Contact";
import ContactUsTechnologyPricing from "@/components/ContactUsTechnologyPricing";
import PricingAppMinimal from "@/components/PricingAppMinimal";
import {
	CombinedSection,
	CornerPattern,
} from "@/containers/WebAppCreative/webAppCreative.style";

const SubscriptionPlans = () => {
	return (
		<section className="mt-12 md:mt-16 lg:mt-24">
			<CombinedSection>
				<ContactUsTechnologyPricing />
				<PricingAppMinimal />
				<CornerPattern />
				<ContactSection />
			</CombinedSection>
		</section>
	);
};

export default SubscriptionPlans;
