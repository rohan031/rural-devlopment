import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableKwango } from "@/data/reports-table/kwango";
import React from "react";

const KwangoPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kwango.title} />
			<TableVariant heading="PRISE II" data={tableKwango} />
		</>
	);
};

export default KwangoPage;
