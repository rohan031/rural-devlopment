"use client";

import React, { useCallback } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Container from "@/components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { location } from "@/data/helper";

interface ItemProps {
	image: string;
	text: string;
	index: number;
	location: location;
}
const Item = ({ image, text, index, location }: ItemProps) => {
	return (
		<div className={styles.item}>
			<img data-location={location} src={image} />

			<Container type="full" className={styles.text}>
				<Container type="normal">
					<p>{text}</p>
				</Container>
			</Container>
		</div>
	);
};

interface HeroProps {
	data: {
		image: string;
		text: string;
	}[];
	location: location;
}

const Hero = ({ data, location }: HeroProps) => {
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
				location={location}
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
