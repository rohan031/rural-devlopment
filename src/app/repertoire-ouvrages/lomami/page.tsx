import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const LoamamiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.Loamami.title} />
		</>
	);
};

export default LoamamiPage;
