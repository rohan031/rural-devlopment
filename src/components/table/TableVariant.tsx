import { ReportTableVariant } from "@/data/reports-table/type";
import React from "react";
import Container from "../Container/Container";

import styles from "./table.module.scss";

interface ReportTableProps {
	heading: string;
	data: ReportTableVariant[];
}

const TableVariant = ({ heading, data }: ReportTableProps) => {
	return (
		<Container className={styles.container}>
			<h3>{heading}</h3>

			<div className={styles.table}>
				<div className={styles.table_heading}>
					<h4>N°</h4>
					<h4>Site</h4>
					<h4>Ouvrage</h4>
					<h4>Lieu d'implantation</h4>
					<h4>Territoire</h4>
					<h4>Secteur/Cité/Ville</h4>
					<h4>Coordonnées</h4>
				</div>

				{data.map((item, index) => {
					return (
						<div key={heading + index}>
							<p>{index + 1}</p>
							<p>{item.site}</p>
							<p>{item.ouvrage}</p>
							<p>{item.implantation}</p>
							<p>{item.territory}</p>
							<p>{item.sector}</p>
							<p>{item.coords}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default TableVariant;
