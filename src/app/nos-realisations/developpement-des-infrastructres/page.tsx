import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import { PhaseInfo } from "@/data/phases";
import Container from "@/components/Container/Container";
import PhaseList from "@/components/PhaseList/PhaseList";

const links: PhaseInfo[] = [
	{
		title: "Phase I",
		link: rootLinks.infrastructureDevelopmentPhase1.link,
	},
	{
		title: "Phase II",
		link: rootLinks.infrastructureDevelopmentPhase2.link,
	},
];

const page = () => {
	return (
		<>
			<Hero heading={rootLinks.infrastructureDevelopment.title} />

			<Container>
				<PhaseList list={links} />
			</Container>
		</>
	);
};

export default page;
