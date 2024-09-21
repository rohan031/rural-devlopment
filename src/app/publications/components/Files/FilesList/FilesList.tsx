import { Doc } from "@/app/publications/rapports-annuels/page";
import React from "react";
import styles from "./fileList.module.scss";
import FileItem from "../FilesItem/FileItem";

interface FilesListProps {
	list: Doc[];
}

const FilesList = ({ list }: FilesListProps) => {
	return (
		<div className={styles.container}>
			{list.map((file) => {
				return <FileItem key={file.link} file={file} />;
			})}
		</div>
	);
};

export default FilesList;
