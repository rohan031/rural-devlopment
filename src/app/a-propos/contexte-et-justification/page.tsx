import React from "react";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
	heading: "CONTEXTE ET JUSTIFICATION",
	list: [
		"Le projet est en conformité avec le Document de Stratégie de Croissance et de Réduction de la Pauvreté (DSCRP 2011-2015) de la RDC, notamment son troisième pilier qui porte sur « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain ».",
		"Sa première phase  initialement prévu pour cinq ans a été prorogé progressivement à neuf ans suite au retard observé dans la mise en place de l’équipe du projet soit 7 mois après la signature  des accords, l’actualisation des études de l’AEP Mbuji-Mayi par la Regideso soit deux ans après la mise en vigueur du projet, un long processus de passation des marchés des travaux de l’AEP Mbuji-Mayi d’abord lancé en lot unique de deux financements BAD et KFW, puis séparé en deux lots suivant les financements et enfin suspendu à cause d’une lettre anonyme avant que le processus reprenne pour signer le contrat en date du 13 septembre 2019, soit trois ans et huit mois après le lancement du premier DAO en lot unique. ",
		"En effet, avec 70 millions d’habitants, la RDC enregistre les plus faibles taux d’accès à l’eau potable et à l’assainissement en Afrique, respectivement 26% et 17%. De même, les enfants admis dans le système éducatif représentent 50% de ceux en âge de scolarisation.",
		"Le faible accès à l’eau potable et à l’assainissement est la cause principale des maladies hydriques comme la diarrhée, le choléra qui conduisent à la malnutrition chronique dont souffre 43% des enfants congolais, affectant leur développement méta et physique.",
		"À ce rythme, la RDC n’atteindra pas les Objectifs du Millénaires pour le Développement (OMD) pour l’eau potable et l’assainissement, la santé et l’éducation. Cette situation était à la base de l’exode des populations qui met en péril le développement économique des provinces du Kasaï, Kasaï Central, Kasaï Oriental, Lomami et Sankuru.",
		"Le projet PRISE dans sa phase une était censé clôturé au 31 décembre 2023 mais l’enclavement de la zone du projet et l’importance de dispositifs logistique des travaux d’AEP en milieu rural impacte négativement sur la vitesse de mise œuvre et une prorogation d’une année a été sollicité mais la banque Africaine de Développement a demandé de prendre en compte les activités non achevées de la première phase du projet dans la deuxième phase du projet.",
		"Et sa deuxième phase du projet prévu pour cinq ans c.à.d. de Février 2022 au décembre 2026, le mois et l’année prévus pour l’achèvement du projet PRISE-Phase II",
		"Cette intervention se justifie ainsi par la nécessité de créer un minimum de confort de vie pour permettre la stabilisation des populations et poser les bases pour le développement économique de la zone.",
	],
};

const BackgroundAndRationale = () => {
	return (
		<>
			<Hero heading={data.heading} />

			<Container className={styles.para}>
				{data.list.map((item) => {
					return <p key={item}>{item}</p>;
				})}
			</Container>
		</>
	);
};

export default BackgroundAndRationale;
