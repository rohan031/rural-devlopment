import React from "react";
import styles from "./attribution.module.scss";

const data = {
	heading: "Attributions",
	text: "Les attributions du Ministère du Développement Rural selon l’Ordonnance n° 20/017 du 27 mars 2020 fixant les attributions des Ministères ",
	list: [
		{
			text: "Elaboration et suivi des projets de développement dans les campagnes, milieux ruraux et péri urbains ; - Organisation et encadrement des paysans dans des coopératives et associations en milieu rural, en collaboration avec le Ministère ayant l’Agriculture dans ses attributions ; ",
		},
		{
			text: "Elaboration et conduite des politiques et stratégies de développement rural ; ",
		},
		{
			text: "Elaboration des techniques de forages manuels et mécaniques ; ",
		},
		{
			text: "Organisation et encadrement de la population rural pour l’accroissement de la production agricole, en collaboration avec le Ministère ayant l’Agriculture dans ses attributions ; ",
		},
		{ text: "Aménagement et équipement de l’espace rural ; " },
		{
			text: "Coordination et intégration des programmes de développement en milieu rural ; ",
		},
		{
			text: "Promotion du bien-être social des populations rurales par la sensibilisation et l’animation rurales ; ",
		},
		{ text: "Promotion et soutien de la pêche en milieu rural ; " },
		{
			text: "Aménagement, construction, réhabilitation, entretien des infrastructures socioéconomiques de base en milieu rural et péri urbain dont : ",
			sublist: [
				"Voies de desserte agricole et cours d’eau ; ",
				"Sources d’eau, adduction granitaire et forage des puits ; ",
				"Electrification rurale, en collaboration avec les Ministères ayant les Travaux Publics ainsi que l’Electricité dans leurs attributions.",
			],
		},
	],
};

const Attribution = () => {
	return (
		<div className={styles.container}>
			<h2>{data.heading}</h2>

			<p>{data.text}</p>

			<ul className={styles.list}>
				{data.list.map((item) => {
					return (
						<li key={item.text}>
							{item.text}
							{item.sublist && (
								<ul className={styles.sublist}>
									{item.sublist?.map((subList) => {
										return <li key={subList}>{subList}</li>;
									})}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Attribution;
