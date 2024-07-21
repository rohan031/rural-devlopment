import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
	heading: "RÉSULTATS ATTENDUS",

	development: {
		heading: "Composante Développement des Infrastructures",
		list: [
			"60 systèmes d’AEP dont 10 solaires sont réalisés avec espaces à vivres pour 60 centres de 10 000 à 20 000 habitants",
			"494 latrines publiques sont construites",
			"60 écoles sont construites et/ou réhabilitées et équipées",
			"60 centres de santé construits et/ou réhabilités et équipés avec médicaments essentiels",
			"un centre multifonctionnel Genre est construits.",
			"3 châteaux d’eau sont construits pour AEP de la REGIDESO à Mbuji Mayi",
			"272.100 m linéaire de réseau d’AEP de Mbuji-Mayi sont réhabilités ou construits",
			"Travaux de lutte antiérosive pour la protection des conduites du système d’AEP et voirie de Tshika-pa",
			"ville de MBUJI MAYI est approvisionnée en eau Potable",
		],
	},
	etudes: {
		heading: "Composante Etudes et renforcement des Capacités",
		list: [
			"la stratégie de mise en oeuvre de de l’AEP en mi-lieu rural est Elaborée",
			"une étude de mise en place d’un réseau pilote de suivi des ressources en eau du fleuve Kasaï est réalisée",
			"Une étude socio-économique Genre est réalisée",
			"Un répertoire société civile et PTF du Genre sont Elaborer",
			"Les capacités des acteurs locaux sont renforcées",
			"1000 femmes pour le développement des activités génératrices de revenus sont formés",
			"Les membres des 60 unités de gestion des systèmes d’AEP sont renforcés en capacités",
			"300 membres sont formés dont 40 % de femmes",
			"L’étude de la centrale hydroélectrique de Tshikapa est réalisée.",
		],
	},
	coordination: {
		heading: "Composante Coordination et Gestion du projet",
		list: [
			"Des rapports d’avancement , d’audit et financiers sont élaborés",
		],
	},
};

const ExpectedResults = () => {
	return (
		<>
			<Hero heading={data.heading} />

			<Container className={styles.listcontainer}>
				<ol type="I" className={styles.list}>
					<li>
						<h2>{data.development.heading}</h2>

						<ul className={styles.subList}>
							{data.development.list.map((item) => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
					</li>

					<li>
						<h2>{data.etudes.heading}</h2>

						<ul className={styles.subList}>
							{data.etudes.list.map((item) => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
					</li>

					<li>
						<h2>{data.coordination.heading}</h2>

						<ul className={styles.subList}>
							{data.coordination.list.map((item) => {
								return <li key={item}>{item}</li>;
							})}
						</ul>
					</li>
				</ol>
			</Container>
		</>
	);
};

export default ExpectedResults;
