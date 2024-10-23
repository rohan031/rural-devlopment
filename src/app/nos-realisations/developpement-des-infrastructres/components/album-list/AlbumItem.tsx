import React from "react";
import styles from "./albumList.module.scss";
import { Album } from "../../page";
import Link from "next/link";
import { rootLinks } from "@/data/navigation";

interface AlbumItemProps {
	details: Album;
}

const AlbumItem = ({ details }: AlbumItemProps) => {
	const href = `${rootLinks.infrastructureDevelopment.link}/${details.id}`;

	return (
		<div className={styles.item}>
			<img src={details.cover} />
			<Link href={href} data-type="link">
				<h3>{details.name}</h3>
			</Link>
		</div>
	);
};

export default AlbumItem;
