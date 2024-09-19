import React from "react";
import styles from "./hero.module.scss";
import Container from "../Container/Container";

interface itemProps {
	heading: string;
}

const page = ({ heading }: itemProps) => {
	return (
		<div className={styles.hero}>
			<Container>
				<h1>{heading}</h1>
			</Container>
		</div>
	);
};

export default page;
