import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const KwangoPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kwango.title} />
		</>
	);
};

export default KwangoPage;
