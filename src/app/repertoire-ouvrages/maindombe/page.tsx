import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";

const MaindombePage = () => {
	return (
		<>
			<Hero heading={rootLinks.maindombe.title} />
		</>
	);
};

export default MaindombePage;
