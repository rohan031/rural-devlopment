import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import {
	kasaiOrientalPhase1,
	kasaiOrientalPhase2,
} from "@/data/reports-table/kasai-oriental";
import React from "react";

const KasaiEasternPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasaiEastern.title} />
			<TableVariant heading="PRISE I" data={kasaiOrientalPhase1} />
			<TableVariant heading="PRISE II" data={kasaiOrientalPhase2} />
		</>
	);
};

export default KasaiEasternPage;
