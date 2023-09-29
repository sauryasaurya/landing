import ContactSection from "@/components/Contact";
import ContactUsTechnologyPricing from "@/components/ContactUsTechnologyPricing";
import PricingAppMinimal from "@/components/PricingAppMinimal";
import {
	CombinedSection,
	CornerPattern,
} from "@/containers/WebAppCreative/webAppCreative.style";

const SubscriptionPlans = () => {
	return (
		<CombinedSection>
			<ContactUsTechnologyPricing />
			<PricingAppMinimal />
			<CornerPattern />
			<ContactSection />
		</CombinedSection>
	);
};

export default SubscriptionPlans;
