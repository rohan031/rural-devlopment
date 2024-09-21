import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import FilesList from "../components/Files/FilesList/FilesList";

export interface Doc {
	title: string;
	link: string;
}

const data: Doc[] = [
	{
		title: "Rapport Annuel 2020",
		link: "/annual-reports/Rapport-annuel-PRISE-2020.pdf",
	},
];

const RapportAnnuelsPage = () => {
	return (
		<>
			<Hero heading={rootLinks.annualReports.title} />

			<Container>
				<FilesList list={data} />
			</Container>
		</>
	);
};

export default RapportAnnuelsPage;
