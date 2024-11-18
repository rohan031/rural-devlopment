import React from "react";
import styles from "./albumList.module.scss";
import Link from "next/link";
import { galleryAlbum } from "@/data/navigation";
import { Album } from "../../phase-1/page";

interface AlbumItemProps {
	details: Album;
	phase2?: boolean;
}

const AlbumItem = ({ details, phase2 = false }: AlbumItemProps) => {
	let href = `${galleryAlbum}/${details.id}`;
	if (phase2) {
		href = `${galleryAlbum}/phase-2/${details.id}`;
	}

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
