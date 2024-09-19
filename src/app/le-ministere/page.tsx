import React from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";
import Secretariat from "./components/Secretariat/Secretariat";
import Attribution from "./components/Attribution/Attribution";
import Ministers from "./components/Ministers/Ministers";

const data = {
	heading: "LE MINISTÈRE",
};

const TheMinistry = () => {
	return (
		<>
			<Hero heading={data.heading} />

			<Container className={styles.ministry}>
				<Ministers />

				<Attribution />

				<Secretariat />
			</Container>
		</>
	);
};

export default TheMinistry;
