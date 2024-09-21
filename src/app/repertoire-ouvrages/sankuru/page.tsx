import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const SankuruPage = () => {
	return (
		<>
			<Hero heading={rootLinks.sankuru.title} />
		</>
	);
};

export default SankuruPage;
