import React from "react";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import Image from "next/image";

const data = {
	heading: "OBJECTIF GLOBAL ET SPÉCIFIQUE",
	text: "Contribuer à l’amélioration du cadre de vie des populations congolaises par un meilleur accès à l’eau potable et à l’assainissement, ainsi qu’à la santé et à l’éducation.",
	list: [
		"Accroitre le taux d’accès à l’eau et à l’assainissement les populations des localités et des villes concernées;",
		"Rendre un meilleur accès à l’éducation aux élèves et un meilleur accès des soins aux santé primaire aux populations;",
		"Assurer une autonomisation économique des femmes dans la ville de MBUJI MAYI.",
	],
};

const OverallAndSpecificObjective = () => {
	return (
		<>
			<Hero heading={data.heading} />

			<Container className={styles.container}>
				<div className={styles.image}>
					<Image
						src="/about-us-objectif.png"
						width={550}
						height={290}
						alt="Objectif Global Et Spécifique"
					/>
				</div>

				<div className={styles.text}>
					<p>{data.text}</p>

					<ul className={styles.list}>
						{data.list.map((item) => {
							return <li key={item}>{item}</li>;
						})}
					</ul>
				</div>
			</Container>
		</>
	);
};

export default OverallAndSpecificObjective;
