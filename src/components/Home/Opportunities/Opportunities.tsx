import React from "react";
import styles from "./opportunities.module.scss";
import Container from "@/components/Container/Container";
import { rootLinks } from "@/data/navigation";
import Link from "next/link";

const links = [
	rootLinks.callForTenders,
	// rootLinks.noticeCallForApplications,
	rootLinks.callForExpressionOfInterest,
];

const data = {
	heading: "OPPORTUNITÉS",
};

const Opportunities = () => {
	return (
		<div className={styles.opportunities}>
			<Container className={styles.container}>
				<h2 className={`accent ${styles.heading}`}>{data.heading}</h2>

				<div className={styles.items}>
					{links.map((item) => {
						return (
							<div key={item.link + "-" + data.heading}>
								<Link
									data-type="button"
									data-variant="primary"
									href={item.link}
								>
									{item.title}
								</Link>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Opportunities;
