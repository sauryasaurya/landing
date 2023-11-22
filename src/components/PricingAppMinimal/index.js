import Heading from "@/common/components/Heading";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { androidArrowForward } from "react-icons-kit/ionicons/androidArrowForward";
import { androidDone } from "react-icons-kit/ionicons/androidDone";
import PricingArea, {
	CardBody,
	CardFooter,
	CardTop,
	Col,
	PriceCard,
	PricingAmount,
	Row,
	TopHeading,
} from "./pricing.style";

import { MONTHLY_PRICING_DATA } from "@/common/data/AppMinimal";

const PricingAppMinimal = () => {
	const [state, setState] = useState({
		toggle: true,
	});

	const dataHandle = () => {
		setState({
			...state,
			toggle: !state.toggle,
		});
	};

	return (
		<PricingArea id="pricing_section">
			<Container className="Container">
				<TopHeading>
					<Heading as="h2" content="Meet our exiciting Pricing Plan" />
				</TopHeading>

				<Row>
					{MONTHLY_PRICING_DATA.map(
						(
							{
								recommended,
								title,
								price,
								base,
								plus,
								extra,
								perMonth,
								tagline,
								planLabel,
								options,
								button,
							},
							index
						) => (
							<Col key={`pricing-card-key-${index}`}>
								<PriceCard
									className={recommended === true ? "recommended" : " "}
								>
									<CardTop className="cardTop ">
										<Heading as="h3" content={title} />
										<PricingAmount className="">
											<div className="flex flex-row">
												<Heading as="h4" content={price} />
												<Text as="p" content={base} />
												<Heading as="h4" content={` ${plus} `} />
												<Heading as="h4" content={extra} />
												<Text as="p" content={perMonth} />
											</div>
											<Text as="p" content={tagline} />
										</PricingAmount>
									</CardTop>
									<CardBody>
										<Text
											as="span"
											className="pricingLabel"
											content={planLabel}
										/>
										<ul className="priceList">
											{options.map(({ text }, index) => (
												<li key={`priceList-key-${index}`}>
													<Icon size={18} icon={androidDone} />
													{text}
												</li>
											))}
										</ul>
									</CardBody>
									<CardFooter className="cardFooter">
										<Link href={button.link} legacyBehavior>
											<a className="priceBtn">
												{button.label}{" "}
												<Icon size={18} icon={androidArrowForward} />
											</a>
										</Link>
									</CardFooter>
								</PriceCard>
							</Col>
						)
					)}
				</Row>
			</Container>
		</PricingArea>
	);
};

export default PricingAppMinimal;
