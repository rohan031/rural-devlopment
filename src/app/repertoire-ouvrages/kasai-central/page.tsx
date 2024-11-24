import Hero from "@/components/Hero/Hero";
import Table from "@/components/table/Table";
import { rootLinks } from "@/data/navigation";
import {
	kasaiCentralPhase1,
	kasaiCentralPhase2,
} from "@/data/reports-table/kasai-central";
import React from "react";

const KasaiCentralPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasaiCentral.title} />
			<Table heading="PRISE I" data={kasaiCentralPhase1} />

			<Table heading="PRISE II" data={kasaiCentralPhase2} />
		</>
	);
};

export default KasaiCentralPage;
