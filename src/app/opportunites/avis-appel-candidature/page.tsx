import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const AvisAppelCandidaturePage = () => {
	return (
		<>
			<Hero heading={rootLinks.noticeCallForApplications.title} />
		</>
	);
};

export default AvisAppelCandidaturePage;
