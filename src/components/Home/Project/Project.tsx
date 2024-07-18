import { rootLinks } from "@/data/navigation";
import React from "react";
import styles from "./project.module.scss";
import ProjectItem from "./component/ProjectItem";
import Container from "@/components/Container/Container";

const projects = [
	{
		name: rootLinks.projectOverview.title,
		image: "/home/projects/work1.webp",
		link: rootLinks.projectOverview.link,
	},
	{
		name: rootLinks.backgroundAndRationale.title,
		image: "/home/projects/work2.webp",
		link: rootLinks.backgroundAndRationale.link,
	},
	{
		name: rootLinks.overallAndSpecificObjective.title,
		image: "/home/projects/work3.webp",
		link: rootLinks.overallAndSpecificObjective.link,
	},
];

const data = {
	heading: "En un coup d'œil",
};

const Project = () => {
	return (
		<div className={styles.project}>
			<Container>
				<h2 className={`accent ${styles.heading}`}>{data.heading}</h2>

				<div className={styles.container}>
					{projects.map((item) => {
						return (
							<ProjectItem
								key={item.link + "-home-page"}
								text={item.name}
								image={item.image}
								link={item.link}
							/>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Project;
