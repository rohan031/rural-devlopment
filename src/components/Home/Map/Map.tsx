"use client";

import React from "react";
import styles from "./map.module.scss";
import Image from "next/image";
import Link from "next/link";
import { rootLinks } from "@/data/navigation";
import Container from "@/components/Container/Container";

const data = {
	heading: "Le Travail Que Nous Faisons",
	text: "Le projet est en conformité avec le Document de Straté-gie de Croissance et de Réduction de la Pauvreté (DSCRP 2011-2015) de la RDC , notamment son troi-sième pilier qui porte sur « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain ». Le projet concerne la zone Centre, définie autour de l’axe Ilebo-Tshikapa- Kananga-Mbuji-Mayi, qui constitue l’une des cinq zones prioritaires de déve- loppement du Gouvernement pour la période 2012-2016. En effet, avec 70 millions d’habitants, la RDC enregistre les plus faibles taux d’accès à l’eau potable et à l’assainissement en Afrique, respectivement 26% et 17%. De même, les enfants admis dans le système édu-catif représentent 50% de ceux en âge de scolarisation. Le faible accès à l’eau potable et à l’assainissement est la cause principale des maladies hydriques comme la diarrhée, le choléra qui conduisent à la malnutrition chronique dont souffre 43% des enfants congolais, af-fectant leur développement meta et physique. À ce rythme, la RDC n’atteindra pas les Objectifs du Millé-naires pour le Développement (OMD) pour l’eau po-table et l’assainissement, la santé et l’éducation. Cette situation est à la base de l’exode des populations qui met en péril le développement économique des provinces du Kasaï, Kasaï Central, Kasaï Oriental, Lomami et Sanku-ru. Cette intervention se justifie ainsi par la nécessité de créer un minimum de confort de vie pour permettre la stabilisation des populations et poser les bases pour le développement économique de la zone.",
};

const Map = () => {
	return (
		<div className={styles.map}>
			<Container>
				<h2 className={`accent ${styles.heading}`}>{data.heading}</h2>
			</Container>

			<div className={styles.content}>
				<div className={styles.image}>
					<Image
						width="1000"
						height="600"
						src="/home/map/map.webp"
						alt="map"
						priority
					/>
				</div>

				<div className={styles.text}>
					<p>{data.text}</p>
				</div>

				<div className={styles.block}>
					<Link
						data-type="button"
						data-variant="primary"
						href={rootLinks.kasai.link}
					>
						Plus Des Détails Des Ouvrage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Map;
