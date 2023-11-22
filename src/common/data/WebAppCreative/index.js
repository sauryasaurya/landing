import envato from "@/common/assets/image/webAppCreative/clients/envato.png";
import evernote from "@/common/assets/image/webAppCreative/clients/evernote.png";
import forbes from "@/common/assets/image/webAppCreative/clients/forbes.png";
import geekwire from "@/common/assets/image/webAppCreative/clients/geekwire.png";
import slack from "@/common/assets/image/webAppCreative/clients/slack.png";
import usaToday from "@/common/assets/image/webAppCreative/clients/usa-today.png";
import icon1 from "@/common/assets/image/webAppCreative/icons/1.png";
import icon2 from "@/common/assets/image/webAppCreative/icons/2.png";
import icon3 from "@/common/assets/image/webAppCreative/icons/3.png";
import icon4 from "@/common/assets/image/webAppCreative/icons/4.png";
import asana from "@/common/assets/image/webAppCreative/icons/asana.png";
import donut from "@/common/assets/image/webAppCreative/icons/donut.png";
import drive from "@/common/assets/image/webAppCreative/icons/drive.png";
import dropbox from "@/common/assets/image/webAppCreative/icons/dropbox.png";
import facebook from "@/common/assets/image/webAppCreative/icons/facebook.png";
import fontAwesome from "@/common/assets/image/webAppCreative/icons/fontawesome.png";
import github from "@/common/assets/image/webAppCreative/icons/github.png";
import googleCloud from "@/common/assets/image/webAppCreative/icons/google-cloud.png";
import icecream from "@/common/assets/image/webAppCreative/icons/icecream.png";
import linkedin from "@/common/assets/image/webAppCreative/icons/linkedin.png";
import messenger from "@/common/assets/image/webAppCreative/icons/messenger.png";
import nginx from "@/common/assets/image/webAppCreative/icons/nginx.png";
import oneTriam from "@/common/assets/image/webAppCreative/icons/oneTriam.png";
import pizza from "@/common/assets/image/webAppCreative/icons/pizza.png";
import prisaLLC from "@/common/assets/image/webAppCreative/icons/prisaConsulting.png";
import icon8 from "@/common/assets/image/webAppCreative/icons/sapriTech2.png";
import slack2 from "@/common/assets/image/webAppCreative/icons/slack.png";
import smashingMag from "@/common/assets/image/webAppCreative/icons/smashing-mag.png";
import zeplin from "@/common/assets/image/webAppCreative/icons/zeplin.png";
import zoom from "@/common/assets/image/webAppCreative/icons/zoom.png";
import siteLogo from "@/common/assets/image/webAppCreative/logo.png";
import post1 from "@/common/assets/image/webAppCreative/post1.png";
import post2 from "@/common/assets/image/webAppCreative/post2.png";
import post3 from "@/common/assets/image/webAppCreative/post3.png";

export const menu_items = [
	{
		label: "Home",
		path: "/",
		offset: "70",
	},
	{
		label: "About Us",
		path: "/about-us",
		offset: "70",
	},
	{
		label: "Pricing",
		path: "/pricing",
		offset: "70",
	},
	{
		label: "Demo",
		path: "demo-request",
		offset: "70",
	},
	{
		label: "Contact Us",
		path: "/contact-us",
		offset: "70",
	},
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
	{
		id: 1,
		icon: icon1,
		title: "Smart Scheduling",
		text: `Efficiently plan your team's work hours, whether it's for in-house projects or client assignments.`,
		// linkLabel: "Learn More",
		// link: "#",
	},
	{
		id: 2,
		icon: icon2,
		title: "Timesheet Management",
		text: `Allow employees to easily record their working hours by filling out their timesheet, that accurately reflects their tasks and projects.`,
		// linkLabel: "Learn More",
		// link: "#",
	},
	{
		id: 3,
		icon: icon3,
		title: "Check-in & Check-out",
		text: `Utilize the Check-In and Check-Out feature with Geolocation tracking for ensuring accurate account of your team's work hours.`,
		// linkLabel: "Learn More",
		// link: "#",
	},
	{
		id: 4,
		icon: icon4,
		title: "Automatic Invoicing",
		text: `Save time and reduce administrative hassle with our automated invoicing system which are generated on a monthly/weekly basis, based on the hours of service provided.`,
		// linkLabel: "Learn More",
		// link: "#",
	},
];

export const analyticsTool = {
	// slogan: 'Audience source monitoring',
	title: "Advanced Tools for Streamlining Your Client's Work",
	desc: `Discover the power of Velorona’s advanced tools that are designed to keep your client’s work impeccably organized and efficient to ensure a seamless experience.`,
	features: [
		"Unlimited User creation",
		"Overlapping Schedules",
		"Unlimited Invoice Generation",
	],
	// button: {
	// 	link: "#",
	// 	label: "Explore More",
	// },
};

export const dashboard = {
	sectionTitle: "Organize your clients work, fast.",
	// sectionDesc: `Each room is loaded with collaborative surfaces so you can quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with the most advanced theme editor.`,
	sectionDesc: `Each dashboard page is loaded with the all informations required for partular role of an employee.`,
	tabs: [
		{
			id: 1,
			title: "Company Admin",
			content: {
				image: `https://velorona-storage.s3.amazonaws.com/assets/medias/companyadmin-general-dash.png`,
			},
		},
		{
			id: 2,
			title: "Employee",
			content: {
				image: `https://velorona-storage.s3.amazonaws.com/assets/medias/employee-dash.png`,
			},
		},
		{
			id: 3,
			title: "Approver",
			content: {
				image: `https://velorona-storage.s3.amazonaws.com/assets/medias/approver-dash.png`,
			},
		},
		{
			id: 4,
			title: "Payroll Admin",
			content: {
				image: `https://velorona-storage.s3.amazonaws.com/assets/medias/payroll-admin-dash.png`,
			},
		},
	],
};

export const testimonials = [
	{
		id: 1,
		logo: icon8,
		author: "Emma Smith",
		designation: "Human Resource",
		quote: `Velorona is truly a game changer for our business and streamlining our financial processes. It has revolutionized the way we manage our business. It’s tailored invoice templates saved us hours of work. We couldn't be happier with the results it has brought to our operations.`,
	},
	{
		id: 2,
		logo: prisaLLC,
		author: "David Williams",
		designation: "Account Manager",
		quote: `Transitioning to Velorona has been remarkably smooth and beneficial for our business. The platform seamlessly integrates features, user-friendliness, and affordability, making it a perfect fit. We wholeheartedly recommend Velorona to fellow business owners for an optimal and cost-effective solution.`,
	},
	{
		id: 3,
		logo: oneTriam,
		author: "Ruby Sharma",
		designation: "Client Relationship Manager",
		quote: `Velorona streamlines employee management and time tracking, enhancing productivity with seamless task tracking and efficient invoice generation. Integral to our operations, it enables us to focus on delivering excellent service, simplifying processes, and boosting overall business efficiency.`,
	},
	// {
	// 	id: 4,
	// 	logo: icon5,
	// 	author: "Ralph Simpson",
	// 	designation: "Project Manager",
	// 	quote: `Opting for Velorona strategically transformed our business. Simplifying employee management and time tracking, it streamlined workflows, ensuring organizational efficiency and timely project delivery. We highly endorse Velorona for its reliability, making it an essential choice for businesses seeking effectiveness and seamless operations.`,
	// },
	// {
	// 	id: 5,
	// 	logo: icon5,
	// 	author: "Henry Williams",
	// 	designation: "Client Relationship Manager",
	// 	quote: `Velorona transformed our task organization and project management. Its commendable adaptability to businesses of all sizes is noteworthy. The exceptional support team is always ready to assist. Velorona has become indispensable, offering insights into team productivity and aiding informed decisions, making it a crucial tool for our organization.`,
	// },
];

export const appIntegration = {
	sectionTitle: "Lets see what we integrate",
	sectionDesc: `We recently had to jump on 10+ different plugin across eight different countries to find the right owner and escalation process.`,
	apps: [
		{
			id: 1,
			icon: nginx,
			name: "nginx",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 2,
			icon: googleCloud,
			name: "googleCloud",
			bgColor: "#fff",
			isBlurred: false,
		},
		{
			id: 3,
			icon: slack2,
			name: "slack",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 4,
			icon: dropbox,
			name: "dropbox",
			bgColor: "#fff",
			isBlurred: false,
		},
		{
			id: 5,
			icon: drive,
			name: "drive",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 6,
			icon: asana,
			name: "asana",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 7,
			icon: github,
			name: "github",
			bgColor: "#fff",
			isBlurred: false,
		},
		{
			id: 8,
			icon: zeplin,
			name: "zeplin",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 9,
			icon: nginx,
			name: "nginx",
			bgColor: null,
			isBlurred: true,
		},
		{
			id: 10,
			icon: messenger,
			name: "messenger",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 11,
			icon: zoom,
			name: "zoom",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 12,
			icon: smashingMag,
			name: "smashingMag",
			bgColor: "#fff",
			isBlurred: false,
		},
		{
			id: 13,
			icon: fontAwesome,
			name: "fontAwesome",
			bgColor: null,
			isBlurred: false,
		},
		{
			id: 14,
			icon: drive,
			name: "google drive",
			bgColor: null,
			isBlurred: true,
		},
	],
};

export const pricing = [
	{
		id: 1,
		price: {
			monthly: 16,
			annual: 16 * 12 - 5,
		},
		currencySymbol: "$",
		isActive: false,
		title: "Starter Pack",
		desc: "Complete time tracking & proper reporting",
		icon: icecream,
		button: {
			label: "Start 6 month trial",
			link: "#",
		},
		details: {
			label: "What’s include",
			link: "#",
		},
	},
	{
		id: 2,
		price: {
			monthly: 29,
			annual: 29 * 12 - 10,
		},
		currencySymbol: "$",
		isActive: true,
		title: "Premium Pack",
		desc: "Effortless team with time management.",
		icon: donut,
		button: {
			label: "Start 6 month trial",
			link: "#",
		},
		details: {
			label: "What’s include",
			link: "#",
		},
	},
	{
		id: 3,
		price: {
			monthly: 35,
			annual: 35 * 12 - 15,
		},
		currencySymbol: "$",
		isActive: false,
		title: "Ultimate Pack",
		desc: "A custom plan for complex or large organization.",
		icon: pizza,
		button: {
			label: "Start 6 month trial",
			link: "#",
		},
		details: {
			label: "What’s include",
			link: "#",
		},
	},
];

export const posts = [
	{
		id: 1,
		date: "June 3, 2020",
		image: post1,
		title: "The three Fundamental Rules to Keep Your Website Goal Orientated",
		excerpt: {
			label: "Learn More",
			link: "#",
		},
	},
	{
		id: 2,
		date: "Dec 8, 2020",
		image: post2,
		title: "Five @/Common Mistakes Teams Make When Tracking Performance",
		excerpt: {
			label: "Learn More",
			link: "#",
		},
	},
	{
		id: 3,
		date: "Dec 8, 2020",
		image: post3,
		title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
		excerpt: {
			label: "Learn More",
			link: "#",
		},
	},
];

export const faqs = [
	{
		id: 1,
		title: "01. What is Velorona?",
		description: `Velorona serves as Employee Resource Management (ERM) platform, offered through a Software-as-a-Service (SaaS) model. It is a work scheduling and time-sheet application, with added convenience of mobile application. It empowers users to effortlessly generate auto-invoices for their clients based on the hours worked, eliminating the need for any additional software or tools`,
	},
	{
		id: 2,
		title: "02. Is Velorona Free?",
		description: `Yes. Velorona offers options for both always free plans as well as pro plans as per user preferences.`,
	},
	{
		id: 3,
		title: "03. What do I get with the free trial?",
		description: `With Velorona, you don’t need a free trial. We offer an always free plan for up to 6 users with unlimited approvers, allowing you to experience platform’s all features without any limitations.`,
	},
	{
		id: 4,
		title: "04. Are there any limit in the free plan?",
		description: `You can only invite upto 5 users excluding one Company Admin before needing to upgrade to pro plan. There is no feature limitations in free plan.`,
	},
	{
		id: 5,
		title: "05. What currency does Velorona use?",
		description: `Velorona uses US Dollars ($) as a pricing and billing currency.`,
	},
	{
		id: 6,
		title: "06. What is considered an active user?",
		description: `An active user in Velorona refers to all users invited to the company and is currently active or inactive except archived users . However, archived users and those assigned with approver role are not considered as active users.`,
	},
	{
		id: 7,
		title: "07. How do I get in touch with support?",
		description: `Contacting our Support Team is easy! You can get in touch with us via live chat, phone call, or email.`,
	},
	{
		id: 8,
		title: "08. What types of payment are supported?",
		description: `We accept all major debit cards, credit cards & various digital wallets.`,
	},
	{
		id: 9,
		title: "09. Do you offer refunds?",
		description: `Velorona does not typically offer refunds. However, if you have been mistakenly charged due to a system error, please reach out to us. We’ll promptly investigate the issue and process a refund where necessary.`,
	},
	{
		id: 10,
		title: "10. Are there any additional taxes?",
		description: `Yes. All the pricing and invoice amounts in Velorona are exclusive of Taxes. Additional taxes will be charged based on the applicable tax regulations of your country and state..`,
	},
	{
		id: 11,
		title: "11. How does canceling work?",
		description: `When it comes to canceling your subscription, you can opt to downgrade to the free plan. For this, ensure to reduce the number of users to meet the limit of the free plan.`,
	},
];

export const footerTop = {
	about: {
		logo: siteLogo,
		text: `Our mission is to provide an easygoing but productive business environment where business owners would easily achieve business goals and objectives.`,
	},
	widgets: [
		{
			id: 3,
			title: "Company",
			list: [
				{
					id: 1,
					title: "About Us",
					link: "/about-us",
				},
				{
					id: 2,
					title: "Pricing",
					link: "/pricing",
				},
				{
					id: 3,
					title: "Contact Us",
					link: "/contact-us",
				},
				{
					id: 4,
					title: "Request Demo",
					link: "/demo-request",
				},
			],
		},
	],
	contactInfo: {
		title: "Contact info",
		address: "1001 W Euless Blvd Ste # 411 Euless, TX-76040",
		// address1: `1001 W Euless Blvd Ste #`,
		// address2: `411`,
		// address3: `Euless, TX-76040`,
		phone: `+1(817)541-1804`,
		// openingTime: `7 Days - 8am - 10pm`,
		email: `contact@velorona.com`,
	},
};

export const footer = {
	copyright: `Copyright © ${new Date().getFullYear()} Velorona Inc. | All Rights Reserved.`,
	nav: [
		{
			id: 1,
			title: "Support",
			link: "#",
		},
		{
			id: 2,
			title: "Terms",
			link: "/terms-and-conditions",
		},
		{
			id: 3,
			title: "Privacy",
			link: "privacy-policy",
		},
		{
			id: 4,
			title: "Cookie",
			link: "cookies-policy",
		},
	],
	socialLinks: [
		{
			id: 1,
			link: "https://www.facebook.com/profile.php?id=100085932960410",
			icon: facebook,
			label: "Facebook",
		},
		// {
		// 	id: 2,
		// 	link: "http://twitter.com",
		// 	icon: twitter,
		// 	label: "Twitter",
		// },
		{
			id: 3,
			link: "https://www.linkedin.com/company/velorona/",
			icon: linkedin,
			label: "LinkedIn",
		},
	],
};
