import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
	heading: "COORDINATION ET GESTION DU PROJET",
	text: ["Élaboration des rapports d’avancement, d’audit et de finances"],
};

const ProjectCoordinationAndManagement = () => {
	return (
		<>
			<Hero heading={data.heading} />

			<Container className={styles.list}>
				<ul>
					{data.text.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</Container>
		</>
	);
};

export default ProjectCoordinationAndManagement;
