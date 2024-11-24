import Hero from "@/components/Hero/Hero";
import Table from "@/components/table/Table";
import { rootLinks } from "@/data/navigation";
import { kasaiPhase1, kasaiPhase2 } from "@/data/reports-table/kasai";
import React from "react";

const KasaiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasai.title} />
			<Table heading="PRISE I" data={kasaiPhase1} />
			<Table heading="PRISE II" data={kasaiPhase2} />
		</>
	);
};

export default KasaiPage;
