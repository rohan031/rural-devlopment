import React from "react";
import styles from "./blogList.module.scss";
import { Blog } from "@/data/blog-category";
import Link from "next/link";
import { displayTitle } from "@/data/helper";
import { Phase } from "@/data/phases";

interface ListItemProps {
	details: Blog;
	phase: Phase;
}

const ListItem = ({ details, phase }: ListItemProps) => {
	const date = new Date(details.createdAt);
	let href;
	if (phase === Phase.ONE) {
		href = `/publications/phase-1/${details.blogId}`;
	} else {
		href = `/publications/phase-2/${details.blogId}`;
	}

	const hasCover = details.cover.length > 0;

	return (
		<div className={styles.item} data-cover={hasCover}>
			{hasCover && (
				<div className={styles.image}>
					<img src={details.cover} alt="" />
				</div>
			)}

			<div className={styles.meta}>
				<h3 title={details.title} className={styles.title}>
					{displayTitle(details.title)}
				</h3>

				<div className={styles.info}>
					<div className={styles.infoItems}>
						<p>{date.toDateString()}</p>
						<p>{details.category.name}</p>
					</div>
				</div>

				<div className={styles.action}>
					<Link href={href} data-type="link" data-variant="secondary">
						Lire la suite »
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
