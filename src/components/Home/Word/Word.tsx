import React from "react";
import styles from "./word.module.scss";
import Image from "next/image";

const data = {
	title: "Mot du Coordonnateur National",
	text: "“Nous sommes une équipe d’unité de gestion et de coordination regroupée autour d’un objectif commun produisant des activités organisées, coordonnées en vue de contribuer au Développement de nos communautés en milieu rural et péri-urbain en assurant les minimums de base par des efforts jusqu”aux sacrifices extrêmes en vue de produire ce qui est utile à la vie humaine par l’accès à l’éducation, l’assainissement et approvisionnement en eau Potable. Par la gestion efficace et économique avec un suivi permanent du respect de l’orthodoxie de la gestion et Coordination des ressources mises à notre disposition au bénéfice du Pays nous sommes ; le PROJET PRISE.”",
	author: "DEO NSUNZU K",
};

const Word = () => {
	return (
		<div className={styles.word}>
			<h2 className={`accent ${styles.heading}`}>{data.title}</h2>

			<div className={styles.image}>
				<Image
					width="1000"
					height="600"
					src="/home/message/message.webp"
					alt="Mot du Coordonnateur National"
					priority
				/>
			</div>

			<div className={styles.text}>
				<p>{data.text}</p>

				<p className={`accent ${styles.name}`}>{data.author}</p>
			</div>
		</div>
	);
};

export default Word;
