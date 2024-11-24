import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableKiwlu } from "@/data/reports-table/kwilu";
import React from "react";

const KwiluPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kwilu.title} />
			<TableVariant heading="PRISE II" data={tableKiwlu} />
		</>
	);
};

export default KwiluPage;
