import Hero from "@/components/Hero/Hero";
import TableVariantCommunity from "@/components/table/TableVariantCommunity";
import { rootLinks } from "@/data/navigation";
import {
	tableLomamiPhase1,
	tableLomamiPhase2,
} from "@/data/reports-table/lomami";
import React from "react";

const LoamamiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.Loamami.title} />
			<TableVariantCommunity heading="PRISE I" data={tableLomamiPhase1} />
			<TableVariantCommunity
				heading="PRISE II"
				data={tableLomamiPhase2}
			/>
		</>
	);
};

export default LoamamiPage;
