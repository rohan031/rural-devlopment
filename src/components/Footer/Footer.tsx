import React from "react";
import styles from "./footer.module.scss";
import Container from "../Container/Container";
import { footer, phone, email, address, socialMedia } from "@/data/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getSocialClassName = (title: string) => {
	switch (title) {
		case "Facebook":
			return styles.facebook;
		case "Instagram":
			return styles.instagram;
		case "Linkedin":
			return styles.linkedin;
		case "TikTok":
			return styles.tiktok;
		default:
			return styles.default;
	}
};

const Footer = () => {
	const today = new Date();

	return (
		<footer className={styles.footer}>
			<Container type="normal" className={styles.container}>
				<div className={styles.map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.561027560374!2d15.299146400000001!3d-4.30507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33ad477ec485%3A0xeba82966c64fe33!2sProjet%20de%20Renforcement%20des%20Infrastructures%20Socio-Economiques%20dans%20la%20zone%20Centre%20de%20la%20RDC!5e0!3m2!1sen!2sin!4v1721113994812!5m2!1sen!2sin"
						style={{ border: 0 }}
						loading="lazy"
						width="0"
						height="0"
					></iframe>
				</div>

				<div className={styles.address}>
					<h3>Contact Us</h3>

					<p>{address}</p>
				</div>

				<div className={styles.contact}>
					<div className={styles.phone}>
						<h3>Phone</h3>

						<div className={styles.content}>
							{phone.map((item) => {
								return (
									<div key={item}>
										<a
											data-type="link"
											href={`tel:${item}`}
										>
											{item}
										</a>
									</div>
								);
							})}
						</div>
					</div>

					<div className={styles.email}>
						<h3>E-mail</h3>

						<div className={styles.content}>
							{email.map((item) => {
								return (
									<div key={item}>
										<a
											data-type="link"
											href={`mailto:${item}`}
										>
											{item}
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className={styles.sitemap}>
					<h3>Site Map</h3>

					<div className={styles.content}>
						{footer.map(({ title, link }) => {
							return (
								<div key={`footer-${link}`}>
									<Link href={link} data-type="link">
										{title}
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</Container>

			<Container className={styles.socialContainer}>
				<h3>Connect With Us</h3>

				<div className={styles.social}>
					{socialMedia.map((item) => {
						return (
							<a
								key={item.link}
								href={item.link}
								target="_blank"
								className={getSocialClassName(item.title)}
							>
								<FontAwesomeIcon icon={item.icon} />
							</a>
						);
					})}
				</div>
			</Container>

			<Container type="normal" className={styles.copyright}>
				<p>
					Copyright © {today.getFullYear()} , Projet Prise All rights
					reserved.
					<br />
					Powered by{" "}
					<a
						href="https://adgytec.in"
						target="_blank"
						style={{
							color: "hsl(51, 100%, 50%)",
							fontWeight: "bold",
						}}
					>
						Adgytec
					</a>
					.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
