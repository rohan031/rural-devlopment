"use client";

import React, { useCallback } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Container from "@/components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const data = [
	{
		image: "/home/hero/hero-1.webp",
		text: "Le Premier ministre salue l’efficacité de Déo Nsunzu, coordonnateur du projet PRISE",
	},
	{
		image: "/home/hero/hero-2.webp",
		text: "Mission de suivi du Comite du projet PRISE dansa la Grand Kasai conduite  par le Secretaire General du Ministere de Developpement Rural",
	},
	{
		image: "/home/hero/hero-3.webp",
		text: "Château d'eau de KATENDE , Au Kasaï Central",
	},
	{
		image: "/home/hero/hero-4.webp",
		text: "Château d'eau & Espaces à vivre a Luandanda, Au Kasaï Central",
	},
	{
		image: "/home/hero/hero-5.webp",
		text: "Château d'eau de KATENDE , Au Kasaï Central",
	},
];

interface ItemProps {
	image: string;
	text: string;
	index: number;
}
const Item = ({ image, text, index }: ItemProps) => {
	return (
		<div className={styles.item}>
			<img src={image} data-index={index} />

			<Container type="full" className={styles.text}>
				<Container type="normal">
					<p>{text}</p>
				</Container>
			</Container>
		</div>
	);
};

const Hero = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const heroItems = data.map((element, index) => {
		return (
			<Item
				key={element.text + element.image}
				image={element.image}
				text={element.text}
				index={index}
			/>
		);
	});
	return (
		<div className={styles.hero} ref={emblaRef}>
			<div className={styles.container}>{heroItems}</div>

			<button data-type="link" onClick={scrollPrev} data-scroll="prev">
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button data-type="link" onClick={scrollNext} data-scroll="next">
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	);
};

export default Hero;
