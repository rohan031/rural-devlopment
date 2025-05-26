import React from "react";
import styles from "./albumList.module.scss";
import Link from "next/link";
import { galleryAlbum } from "@/data/navigation";
import { Album } from "../../phase-1/page";
import { TITLELIMIT } from "@/data/helper";

interface AlbumItemProps {
	details: Album;
	phase2?: boolean;
}

const AlbumItem = ({ details, phase2 = false }: AlbumItemProps) => {
	let href;
	if (phase2) {
		href = `${galleryAlbum}/phase-2/${details.id}`;
	} else {
		href = `${galleryAlbum}/phase-1/${details.id}`;
	}

	let title = details.name;
	if (title.length > TITLELIMIT) {
		title = title.substring(0, TITLELIMIT) + "...";
	}

	return (
		<div className={styles.item}>
			<img src={details.cover} />
			<Link href={href} data-type="link" title={details.name}>
				<h3>{title}</h3>
			</Link>
		</div>
	);
};

export default AlbumItem;
