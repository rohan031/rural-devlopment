import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const ManiemaPage = () => {
	return (
		<>
			<Hero heading={rootLinks.maniema.title} />
		</>
	);
};

export default ManiemaPage;
