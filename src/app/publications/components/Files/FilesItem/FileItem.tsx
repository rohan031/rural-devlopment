import { Doc } from "@/app/publications/rapports-annuels/page";
import React from "react";
import styles from "./fileItem.module.scss";
import { displayTitle } from "@/data/helper";

interface FileItemProps {
	file: Doc;
}

const FileItem = ({ file }: FileItemProps) => {
	let image = () => {
		const link = file.link;
		let type = link.slice(-3);

		if (type === "pdf") {
			return <img src="/icons/pdf.png" alt="pdf" />;
		} else {
			return <img src="/icons/doc.png" alt="doc" />;
		}
	};

	return (
		<div className={styles.item}>
			<div className={styles.image}>{image()}</div>

			<div className={styles.info}>
				<a
					href={file.link}
					target="_blank"
					data-type="link"
					data-variant="secondary"
				>
					{displayTitle(file.title, 40)}
				</a>
			</div>
		</div>
	);
};

export default FileItem;
