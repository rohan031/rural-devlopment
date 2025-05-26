import { PhaseInfo } from "@/data/phases";
import React from "react";
import styles from "./phaseList.module.scss";
import PhaseCard from "../PhaseCard/PhaseCard";

interface PhaseListProps {
	list: PhaseInfo[];
}

const PhaseList = ({ list }: PhaseListProps) => {
	return (
		<div className={styles.container}>
			{list.map((info) => (
				<PhaseCard info={info} key={info.link} />
			))}
		</div>
	);
};

export default PhaseList;
