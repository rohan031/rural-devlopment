import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const KasaiEasternPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasaiEastern.title} />
		</>
	);
};

export default KasaiEasternPage;
