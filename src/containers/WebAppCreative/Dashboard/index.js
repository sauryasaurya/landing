import Heading from "@/common/components/Heading";
import NextImage from "@/common/components/NextImage";
import Text from "@/common/components/Text";
import Container from "@/common/components/UI/Container";
import { Tab, TabList, TabPanel } from "react-tabs";
import Section, { ReactTabs, SectionHeading } from "./dashboard.style";

import { dashboard } from "@/common/data/WebAppCreative";

const Dashboard = () => {
	return (
		<Section id="features">
			<Container width="1400px">
				<SectionHeading>
					<Heading content={dashboard.sectionTitle} />
					<Text content={dashboard.sectionDesc} />
				</SectionHeading>
				<ReactTabs>
					<nav>
						<TabList>
							{dashboard.tabs.map((tab) => (
								<Tab key={tab.id}>{tab.title}</Tab>
							))}
						</TabList>
					</nav>

					{dashboard.tabs.map((tab) => (
						<TabPanel key={tab.id}>
							<figure className="animate__animated animate__fadeInUp">
								<NextImage
									src={tab.content.image}
									alt={tab.title}
									width={1920}
									height={1080}
								/>
							</figure>
						</TabPanel>
					))}
				</ReactTabs>
			</Container>
		</Section>
	);
};

export default Dashboard;
