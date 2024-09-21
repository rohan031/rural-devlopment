import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const RapportsDAvancementPage = () => {
	return (
		<>
			<Hero heading={rootLinks.quarterlyProgressReports.title} />
		</>
	);
};

export default RapportsDAvancementPage;
