import Container from "@/common/components/UI/Container";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { androidArrowDropdown } from "react-icons-kit/ionicons/androidArrowDropdown";
// import Button from '@/common/components/Button';
import bubble1 from "@/common/assets/image/webAppCreative/cta-bubble-1.png";
import bubble2 from "@/common/assets/image/webAppCreative/cta-bubble-2.png";
import Heading from "@/common/components/Heading";
import Text from "@/common/components/Text";
import Link from "next/link";
import { Button, MenuItem } from "react-aria-menubutton";
import Section, { Content, DownloadButton, DownloadOptions } from "./cta.style";

const menuItemWords = ["Download for MacOS", "Download for Windows x64"];

const CallToAction = () => {
	const [downloadFor, setDownloadFor] = useState("Download for MacOS");
	const handleSelection = (value, event) => {
		setDownloadFor(value);
	};
	return (
		<Section>
			<img src={bubble1?.src} className="bubble-1" alt="bubble1" />
			<Container width="1400px">
				<Content>
					<Heading content="Start making business with our software" />
					<Text content="Best free time tracking software. It's a simple time tracker and time sheet app that lets you and your team track work hours" />
					<DownloadButton onSelection={handleSelection}>
						<Button className="MyMenuButton-button">
							Download for Android
							<Icon icon={androidArrowDropdown} />
						</Button>
						<DownloadOptions>
							{/* Will add links later */}
							<ul>
								<li>
									<Link href="">
										<MenuItem className="MyMenuButton-menuItem">
											Download for Android
										</MenuItem>
									</Link>
								</li>
								<li>
									<Link href="">
										<MenuItem className="MyMenuButton-menuItem">
											Download for IOS
										</MenuItem>
									</Link>
								</li>
								{/* {menuItemWords.map((word, i) => {
									return (
										<li key={i}>
											<MenuItem className="MyMenuButton-menuItem">
												{word}
											</MenuItem>
										</li>
									);
								})} */}
							</ul>
						</DownloadOptions>
					</DownloadButton>
				</Content>
			</Container>
			<img src={bubble2?.src} className="bubble-2" alt="bubble2" />
		</Section>
	);
};

export default CallToAction;
