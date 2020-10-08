import React from "react";
import theme from "theme";
import { Theme, Image, Button, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 0px 0" box-shadow="0px 1px 0px #E5E9F2">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack margin="0px 0px 0px -16px" width="100%">
				{"    "}
				<StackItem width="30%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image width="116px" height="28px" src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/logo.svg?v=2020-10-08T15:34:28.710Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="40%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Menu display="flex" md-display="none">
						<Override slot="item-404" display="none" />
						<Override slot="item-index" display="none" />
						<Override slot="link" text-decoration-line="initial" color="#18191F" font="--base" />
						<Override slot="item" padding="6px 15px 6px 15px" />
					</Menu>
					{"    "}
				</StackItem>
				<StackItem width="30%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Button
						font="normal 700 14px/20px Inter, sans-serif"
						border-radius="8px"
						background="#F1E4FF"
						padding="10px 24px 10px 24px"
						color="#8C30F5"
						md-display="none"
					>
						Login{"\n\n"}
					</Button>
					<Button
						font="normal 700 14px/20px Inter, sans-serif"
						border-radius="8px"
						background="#8C30F5"
						margin="0px 0px 0px 14px"
						padding="10px 24px 10px 24px"
						color="#ffffff"
						md-display="none"
					>
						Sign up{"\n\n"}
					</Button>
					<Icon
						category="md"
						icon={MdMenu}
						display="none"
						md-display="block"
						md-background="#8C30F5"
						md-color="#ffffff"
						md-padding="5px 5px 5px 5px"
						md-border-radius="8px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="84px 0 20px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" md-align-items="center" md-justify-content="center" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-align="center"
						letter-spacing="-1%"
						md-font="normal 700 56px/120% Inter, sans-serif"
						md-width="90%"
						sm-font="normal 700 36px/43px Inter, sans-serif"
					>
						Track your product sales from anywhere, anytime{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Button
						font="normal 700 20px/30px Inter, sans-serif"
						border-radius="8px"
						background="#8C30F5"
						margin="0px 0px 0px 0px"
						padding="16px 40px 16px 40px"
						color="#ffffff"
					>
						Start using{"\n\n"}
					</Button>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Circle%20BG.png?v=2020-10-08T15:48:44.908Z) center bottom/auto no-repeat scroll padding-box" padding="0px 0 0px 0">
			<Override
				slot="SectionContent"
				width="100%"
				max-width="none"
				height="400px"
				align-items="center"
				justify-content="flex-end"
				position="relative"
				margin="0px 0px 0px 0px"
			/>
			<Image
				width="280px"
				src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/mobile%20hero.png?v=2020-10-08T17:33:16.147Z"
				position="absolute"
				bottom="-9.27%"
				left="auto"
				right="auto"
				top="auto"
				z-index="1"
				transition="-webkit-transition: all .3s;  transition: all .3s"
				hover-transform="translateY(-10px)"
			/>
		</Section>
		<Section position="relative" z-index="2" background="#8C30F5" padding="50px 0 24px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" font="normal 900 42px/1.2 --fontFamily-sans" />
					{"        "}
					<Text
						font="normal 800 48px/64px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						sm-text-align="center"
						sm-font="normal 800 36px/64px --fontFamily-googleInter"
					>
						Are already using{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 400 20px/32px --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						sm-text-align="center"
					>
						We have been working with some 500 clients{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#8C30F5" position="relative" z-index="2" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.EmbedHTML />
		</Section>
		<Section padding="94px 0 24px 0" md-padding="94px 0 0px 0" sm-padding="54px 0 0px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack margin="-16px -16px 50px -16px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Text font="normal 800 40px/54px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" md-width="90%">
						Intuitive dashboard for monitoring{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Text font="normal 400 18px/32px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" md-width="80%">
						Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced teamwork{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 24px 0">
			<Override
				slot="SectionContent"
				max-width="none"
				width="100%"
				align-items="center"
				justify-content="center"
				position="relative"
				margin="0px 0px 0px 0px"
				padding="60px 0px 0px 0px"
			/>
			<Image
				width="766px"
				src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/laptop.png?v=2020-10-08T16:19:28.644Z"
				position="relative"
				z-index="2"
				top="-50px"
				md-width="90%"
			/>
			<Box
				width="100%"
				height="393px"
				background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/20/2020-10-08-22-22-40.png) 0% 0% /auto repeat scroll padding-box"
				position="absolute"
				bottom="-24px"
				left="0px"
				right="auto"
				top="auto"
				z-index="1"
				sm-height="250px"
			/>
		</Section>
		<Section background="#050028" padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack margin="-16px -16px 0px -16px">
				{"    "}
				<StackItem width="100%" display="flex" padding="16px 16px 16px 16px" margin="0px 0px 26px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 800 48px/64px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-align="center"
						color="#ffffff"
						padding="0px 0px 0px 0px"
						width="60%"
						md-width="90%"
					>
						The advantages of our product{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack>
				{"    "}
				<StackItem width="33.333%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						background="#ffffff"
						padding="40px 32px 40px 32px"
						border-radius="8px"
						flex-direction="column"
					/>
					{"        "}
					<Image width="32px" height="32px" src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/feature%201.svg?v=2020-10-08T16:31:31.565Z" />
					<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="54px 0px 12px 0px" display="inline-block" color="#18191F">
						Fast response{"\n\n"}
					</Text>
					<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" color="#18191F">
						Works quickly both in the browser and on the desktop application of your computer{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						background="#ffffff"
						padding="40px 32px 40px 32px"
						border-radius="8px"
						flex-direction="column"
					/>
					{"        "}
					<Image width="32px" height="32px" src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/feature%202.svg?v=2020-10-08T16:32:04.275Z" />
					<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="54px 0px 12px 0px" display="inline-block" color="#18191F">
						Intuitive design{"\n\n"}
					</Text>
					<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" color="#18191F">
						A simple and competent interface for the productive work of your team will not make{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						background="#ffffff"
						padding="40px 32px 40px 32px"
						border-radius="8px"
						flex-direction="column"
					/>
					{"        "}
					<Image width="32px" height="32px" src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/feature%203.svg?v=2020-10-08T16:32:31.462Z" />
					<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="54px 0px 12px 0px" display="inline-block" color="#18191F">
						Responsive platform{"\n\n"}
					</Text>
					<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" color="#18191F">
						Tablet, phone or computer, work on any device and be always aware of the events{" \n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<StackItem width="100%" display="flex" padding="16px 16px 16px 16px" margin="50px 0px 26px 0px">
				<Override slot="StackItemContent" align-items="center" justify-content="center" />
				{"        "}
				<Button
					font="normal 700 20px/30px Inter, sans-serif"
					border-radius="8px"
					background="#8C30F5"
					margin="0px 0px 0px 0px"
					padding="16px 40px 16px 40px"
					color="#ffffff"
				>
					Start using{"\n\n"}
				</Button>
				{"    "}
			</StackItem>
		</Section>
		<Section padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack margin="0px -16px 20px -16px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex" padding="16px 16px 16px 16px" margin="0px 0px 0px 0px">
					<Override slot="StackItemContent" />
					{"        "}
					<Text
						font="normal 800 48px/64px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-align="left"
						color="#18191F"
						padding="0px 0px 0px 0px"
						width="100%"
						quarkly-title="The most selling apps"
					>
						The most selling apps{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					position="relative"
					z-index="3"
					background="#ffffff"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Components.Cursor display="flex" flex-direction="column">
						<Box
							width="100%"
							border-radius="8px"
							background="url(https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/mobile.png?v=2020-10-08T16:42:41.440Z) center -26% no-repeat,#A0DCFF"
							height="380px"
							position="relative"
							z-index="2"
							display="flex"
							justify-content="center"
						/>
						<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block" color="#18191F">
							Travel.Spot{"\n\n"}
						</Text>
						<Text font="normal 300 16px/26px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block" color="#A5A1C1">
							iOS{"\n\n"}
						</Text>
					</Components.Cursor>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					position="relative"
					z-index="3"
					background="#ffffff"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Components.Cursor display="flex" flex-direction="column" position="relative" z-index="9">
						<Box
							width="100%"
							border-radius="8px"
							background="url(https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/laptop%202.png?v=2020-10-08T16:47:31.142Z) -300% 50% no-repeat,#FDD9D9"
							height="380px"
							position="relative"
							z-index="2"
							display="flex"
							justify-content="center"
							md-background="#FDD9D9 url(https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/laptop%202.png?v=2020-10-08T16:47:31.142Z) center no-repeat"
						/>
						<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block" color="#18191F">
							DocDoc{"\n\n"}
						</Text>
						<Text font="normal 300 16px/26px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block" color="#A5A1C1">
							Web app{"\n\n"}
						</Text>
					</Components.Cursor>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F4F5F7" padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<StackItem width="100%" display="flex" padding="16px 16px 16px 16px" margin="0px 0px 26px 0px">
				<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
				{"        "}
				<Text
					font="normal 800 48px/64px --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					display="inline-block"
					text-align="center"
					color="#18191F"
					padding="0px 0px 0px 0px"
					width="60%"
					md-width="90%"
					sm-font="normal 800 36px/44px --fontFamily-googleInter"
				>
					Watch a video overview of our application{"\n\n"}
				</Text>
				<Box position="relative" z-index="1">
					<Image
						width="19px"
						height="22px"
						position="absolute"
						z-index="2"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/play.svg?v=2020-10-08T16:56:16.860Z"
						background="#8C30F5"
						bottom="auto"
						left="auto"
						right="43%"
						top="40%"
						padding="40px 40px 40px 40px"
						border-radius="100%"
						opacity="0.8"
					/>
					<Components.Video border-radius="8px" src="http://telegram.ucoz.net/konkurs.mp4" poster="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Project%20Cover.png?v=2020-10-08T16:54:38.612Z" controls={false}>
						<Image width="64px" height="64px" />
					</Components.Video>
				</Box>
				<Stack margin="-16px -16px 0px -16px">
					{"    "}
					<StackItem width="50%" display="flex" md-width="100%">
						{"        "}
						<Text font="normal 800 28px/40px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block">
							Program interface overview{"\n\n"}
						</Text>
						{"    "}
					</StackItem>
					{"    "}
					<StackItem width="50%" display="flex" md-width="100%">
						{"        "}
						<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block">
							We will tell you about the program interface, how to add applications and employees, how to collect requests and process payments, monitor analytics. You can watch our other reviews on our YouTube{"\n\n"}
						</Text>
						{"    "}
					</StackItem>
				</Stack>
				{"    "}
			</StackItem>
		</Section>
		<Section padding="50px 0 50px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text font="normal 800 48px/64px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" text-align="center">
						FAQ{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Components.Accordion margin="0px 0px 16px 0px" border-width="0px">
						<Components.AccordionItem margin="0px 0px 16 0px">
							<Components.AccordeonSummary>
								<Override slot="AccordionSummary" background="#F4F5F7" />
								<Override slot="AccordionSummaryIcon" color="#8C30F5" size="22px" />
								<Override slot="AccordionSummaryIcon,AccordionSummaryIcon-open" category="fa" icon="FaApplePay" />
								<Text margin="0px 0px 0px 0px" font="normal 500 20px/30px --fontFamily-googleInter">
									Is there any support for your application?{"\n\n"}
								</Text>
							</Components.AccordeonSummary>
							<Components.AccordeonDetails>
								<Override slot="Accordion Details" background="#F4F5F7" border-width="0px" />
								<Text font="normal 400 18px/30px --fontFamily-googleInter">
									Customer support is carried out 24/7, you can also leave a ticket with a problem to our support, during the day the problem will be solved and you can continue to work{"\n\n"}
								</Text>
							</Components.AccordeonDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					<Components.Accordion margin="0px 0px 16px 0px" border-width="0px">
						<Components.AccordionItem margin="0px 0px 16 0px">
							<Components.AccordeonSummary>
								<Override slot="AccordionSummary" background="#F4F5F7" />
								<Override slot="AccordionSummaryIcon" color="#8C30F5" size="22px" />
								<Override slot="AccordionSummaryIcon,AccordionSummaryIcon-open" category="fa" icon="FaApplePay" />
								<Text margin="0px 0px 0px 0px" font="normal 500 20px/30px --fontFamily-googleInter">
									Where is your head office?{"\n\n\n\n"}
								</Text>
							</Components.AccordeonSummary>
							<Components.AccordeonDetails>
								<Override slot="Accordion Details" background="#F4F5F7" border-width="0px" />
								<Text font="normal 400 18px/30px --fontFamily-googleInter">
									It is not necessary to go to our office, all problems we can solve in a remote format{"\n\n"}
								</Text>
							</Components.AccordeonDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					<Components.Accordion margin="0px 0px 16px 0px" border-width="0px">
						<Components.AccordionItem margin="0px 0px 16 0px">
							<Components.AccordeonSummary>
								<Override slot="AccordionSummary" background="#F4F5F7" />
								<Override slot="AccordionSummaryIcon" color="#8C30F5" size="22px" />
								<Override slot="AccordionSummaryIcon,AccordionSummaryIcon-open" category="fa" icon="FaApplePay" />
								<Text margin="0px 0px 0px 0px" font="normal 500 20px/30px --fontFamily-googleInter">
									Can I integrate my app?{"\n\n"}
								</Text>
							</Components.AccordeonSummary>
							<Components.AccordeonDetails>
								<Override slot="Accordion Details" background="#F4F5F7" border-width="0px" />
								<Text font="normal 400 18px/30px --fontFamily-googleInter">
									Any application from any platform is integrated and added to our platform{"\n\n"}
								</Text>
							</Components.AccordeonDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					<Components.Accordion margin="0px 0px 16px 0px" border-width="0px">
						<Components.AccordionItem margin="0px 0px 16 0px">
							<Components.AccordeonSummary>
								<Override slot="AccordionSummary" background="#F4F5F7" />
								<Override slot="AccordionSummaryIcon" color="#8C30F5" size="22px" />
								<Override slot="AccordionSummaryIcon,AccordionSummaryIcon-open" category="fa" icon="FaApplePay" />
								<Text margin="0px 0px 0px 0px" font="normal 500 20px/30px --fontFamily-googleInter">
									Do you have a permanent tariff?{"\n\n"}
								</Text>
							</Components.AccordeonSummary>
							<Components.AccordeonDetails>
								<Override slot="Accordion Details" background="#F4F5F7" border-width="0px" />
								<Text font="normal 400 18px/30px --fontFamily-googleInter">
									Yes, we have many tariffs and there is a permanent one, in this case you can always use it with special privileges and be the first to receive the latest updates{"\n\n"}
								</Text>
							</Components.AccordeonDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					{"    "}
				</StackItem>
			</Stack>
			<StackItem
				width="100%"
				display="flex"
				padding="16px 16px 16px 16px"
				margin="40px 0px 26px 0px"
				sm-display="none"
			>
				<Override slot="StackItemContent" align-items="center" justify-content="center" />
				{"        "}
				<Button
					font="normal 700 20px/30px Inter, sans-serif"
					border-radius="8px"
					background="#8C30F5"
					margin="0px 0px 0px 0px"
					padding="16px 40px 16px 40px"
					color="#ffffff"
				>
					Start Ask your question{"\n\n"}
				</Button>
				{"    "}
			</StackItem>
		</Section>
		<Section
			background="#0B0D17"
			padding="60px 0 60px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.1)"
			sm-padding="30px 0 30px 0"
		>
			<Override slot="SectionContent" max-width="1100px" />
			<Stack>
				{"    "}
				<StackItem width="33.3333%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					{"        "}
					<Text font="normal bold 18px/48px --fontFamily-googleInter" margin="0px 0px 24px 0px" display="inline-block" color="#F4F5F7">
						Company{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						About Us{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Blog{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Careers{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Contact Us{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					{"        "}
					<Text font="normal bold 18px/48px --fontFamily-googleInter" margin="0px 0px 24px 0px" display="inline-block" color="#F4F5F7">
						Support{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Help Center{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Safety Center{"\n\n"}
					</Text>
					<Text font="normal 3000 14px/24px --fontFamily-googleInter" margin="0px 0px 12px 0px" display="inline-block" color="#F4F5F7">
						Community Guidelines{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-end"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					{"        "}
					<Image width="162px" height="48px" margin="0px 0px 17px 0px" src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Google%20Play%20Badge.svg?v=2020-10-08T17:22:24.276Z" />
					<Image
						width="162px"
						height="48px"
						margin="0px 0px 17px 0px"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/App%20Store%20Badge.svg?v=2020-10-08T17:22:36.067Z"
						sm-margin="0px 0px 17px 17px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#0B0D17" padding="20px 0 20px 0" sm-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text
						font="normal 300 14px/24px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#F4F5F7"
						sm-text-align="center"
					>
						© 2020 All rights reserved{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					sm-align-items="center"
					sm-justify-content="center"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" sm-justify-content="center" />
					{"        "}
					<Image
						width="17px"
						height="17px"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/inst.svg?v=2020-10-08T17:26:24.108Z"
						background="#23252E"
						padding="10px 10px 10px 10px"
						border-radius="40%"
						margin="0px 16px 0px 0px"
					/>
					<Image
						width="17px"
						height="17px"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/dribble.svg?v=2020-10-08T17:26:52.869Z"
						background="#23252E"
						padding="10px 10px 10px 10px"
						border-radius="40%"
						margin="0px 16px 0px 0px"
					/>
					<Image
						width="17px"
						height="17px"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/twit.svg?v=2020-10-08T17:29:17.583Z"
						background="#23252E"
						padding="10px 10px 10px 10px"
						border-radius="40%"
						margin="0px 16px 0px 0px"
					/>
					<Image
						width="17px"
						height="17px"
						src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/inst.svg?v=2020-10-08T17:26:24.108Z"
						background="#23252E"
						padding="10px 10px 10px 10px"
						border-radius="40%"
						margin="0px 16px 0px 0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
	</Theme>;
});