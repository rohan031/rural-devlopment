import React from "react";
import styles from "./albumList.module.scss";
import Link from "next/link";
import { galleryAlbum } from "@/data/navigation";
import { Album } from "../../phase-1/page";

interface AlbumItemProps {
	details: Album;
}

const AlbumItem = ({ details }: AlbumItemProps) => {
	const href = `${galleryAlbum}/${details.id}`;

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
