import React from "react";
import {
    Box,
    Column,
    FooterContainer,
    FooterLink,
    Heading,
    Row,
} from "./FootStyles";

const Foot = () => {
	return (
		<Box>
			<h1
				style={{
					color: "blueviolet",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				Digitize Your Schedule!!
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Social Impact
						</FooterLink>
					</Column>
					<Column>
						<Heading>Resources</Heading>
						<FooterLink href="#">
							Case Study
						</FooterLink>
						<FooterLink href="#">
							Webinars
						</FooterLink>
						<FooterLink href="#">
							Events
						</FooterLink>
						<FooterLink href="#">
							FAQ
						</FooterLink>
					</Column>
					<Column>
						<Heading>Support</Heading>
						<FooterLink href="#">
							Help Center
						</FooterLink>
						<FooterLink href="#">
							Product Updates
						</FooterLink>
						<FooterLink href="#">
							Contact Sales
						</FooterLink>
						<FooterLink href="#">
							Review Schedules
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Foot;