import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const KasaiCentralPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasaiCentral.title} />
		</>
	);
};

export default KasaiCentralPage;
