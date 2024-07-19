import React from "react";
import styles from "../project.module.scss";
import Image from "next/image";

interface ProjectItemProps {
	text: string;
	image: string;
	link: string;
}

const ProjectItem = ({ text, image, link }: ProjectItemProps) => {
	return (
		<div className={styles.project_item} title={text}>
			<div className={styles.image}>
				<img src={image} alt={text} height="300" width="800" />
			</div>

			<div className={styles.link}>
				<a href={link}>{text}</a>
			</div>
		</div>
	);
};

export default ProjectItem;
