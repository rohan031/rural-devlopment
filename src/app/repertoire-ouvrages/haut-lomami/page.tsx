import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const HautLomamiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.hautLomami.title} />
		</>
	);
};

export default HautLomamiPage;
