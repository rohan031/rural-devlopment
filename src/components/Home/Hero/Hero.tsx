import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Image
				src="/home/hero/hero.webp"
				alt=""
				width="1000"
				height="600"
				priority
			/>
		</div>
	);
};

export default Hero;
