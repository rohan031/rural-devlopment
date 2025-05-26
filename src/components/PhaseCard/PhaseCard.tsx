import { PhaseInfo } from "@/data/phases";
import React from "react";
import styles from "./phaseCard.module.scss";
import Link from "next/link";

interface PhaseCardProps {
	info: PhaseInfo;
}

const PhaseCard = ({ info }: PhaseCardProps) => {
	return (
		<div className={styles.container}>
			<h3>{info.title}</h3>

			<div>
				<Link
					href={info.link}
					data-type="link"
					data-variant="secondary"
				>
					View
				</Link>
			</div>
		</div>
	);
};

export default PhaseCard;
