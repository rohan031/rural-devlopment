import React from "react";
import styles from "./navigation.module.scss";
const items = [
	{
		text: "A Propos",
		link: "/",
	},
	{
		text: "Répertoire/Ouvrages",
		link: "/",
	},
	{
		text: "Nos Réalisations",
		link: "/",
	},
	{
		text: "Publication",
		link: "/",
	},
	{
		text: "Opportunités",
		link: "/",
	},
	{
		text: "Le Ministère",
		link: "/",
	},
	{
		text: "Contact",
		link: "/",
	},
];

const NavMain = () => {
	return (
		<nav className={styles.nav}>
			<div className="container">
				<div className={styles.container}>
					<div className={styles.control}>
						<input id="nav" type="checkbox" />
						<label htmlFor="nav">
							<span></span>
						</label>

						<a href="">faites un don aujourd'hui</a>
					</div>

					<div className={styles.items}>
						<ul>
							{items.map(({ link, text }) => {
								return (
									<li>
										<a href={link}>{text}</a>
									</li>
								);
							})}
						</ul>

						<div className={styles.images}>
							<img src="/logo.webp" />
							<img src="/project.webp" />
							<img src="/bank.webp" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavMain;
