import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableManiema } from "@/data/reports-table/maniema";
import React from "react";

const ManiemaPage = () => {
	return (
		<>
			<Hero heading={rootLinks.maniema.title} />
			<TableVariant data={tableManiema} heading="PRISE II" />
		</>
	);
};

export default ManiemaPage;
