import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const KwiluPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kwilu.title} />
		</>
	);
};

export default KwiluPage;
