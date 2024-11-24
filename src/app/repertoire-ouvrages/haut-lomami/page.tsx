import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableHautLomami } from "@/data/reports-table/haut-lomami";
import React from "react";

const HautLomamiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.hautLomami.title} />
			<TableVariant heading="PRISE II" data={tableHautLomami} />
		</>
	);
};

export default HautLomamiPage;
