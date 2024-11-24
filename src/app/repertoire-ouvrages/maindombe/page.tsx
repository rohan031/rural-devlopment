import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableMaindombe } from "@/data/reports-table/maindombe";
import React from "react";

const MaindombePage = () => {
	return (
		<>
			<Hero heading={rootLinks.maindombe.title} />
			<TableVariant heading="PRISE II" data={tableMaindombe} />
		</>
	);
};

export default MaindombePage;
