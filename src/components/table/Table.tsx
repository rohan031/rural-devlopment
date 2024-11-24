import { ReportTable } from "@/data/reports-table/type";
import React from "react";
import Container from "../Container/Container";

import styles from "./table.module.scss";

interface ReportTableProps {
	heading: string;
	data: ReportTable[];
}

const Table = ({ heading, data }: ReportTableProps) => {
	return (
		<Container className={styles.container}>
			<h3>{heading}</h3>

			<div className={styles.table}>
				<div className={styles.table_heading}>
					<h4>N°</h4>
					<h4>Territoire</h4>
					<h4>Secteur</h4>
					<h4>Site d'intervention</h4>
					<h4>Infrastructures</h4>
					<h4>Latitude</h4>
					<h4>Longitude</h4>
				</div>

				{data.map((item, index) => {
					return (
						<div key={heading + index}>
							<p>{index + 1}</p>
							<p>{item.territory}</p>
							<p>{item.sector}</p>
							<p>{item.site}</p>
							<p>{item.infrastructure}</p>
							<p>{item.latitude}</p>
							<p>{item.longitude}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Table;
