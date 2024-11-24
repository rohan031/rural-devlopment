import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import {
	tableSankuruPhase1,
	tableSankuruPhase2,
} from "@/data/reports-table/sankuru";
import React from "react";

const SankuruPage = () => {
	return (
		<>
			<Hero heading={rootLinks.sankuru.title} />
			<TableVariant heading="PRISE I" data={tableSankuruPhase1} />
			<TableVariant heading="PRISE II" data={tableSankuruPhase2} />
		</>
	);
};

export default SankuruPage;
