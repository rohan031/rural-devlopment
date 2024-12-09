import Hero from "@/components/Hero/Hero";
import TableVariantCommunity from "@/components/table/TableVariantCommunity";
import { rootLinks } from "@/data/navigation";
import {
	tableLomamiPhase1,
	tableLomamiPhase2,
} from "@/data/reports-table/lomami";
import React from "react";
import DriveLink from "../drive-link/DriveLink";

const url =
	"https://docs.google.com/document/d/1sqzMLcSArIJIigv-gLP97qnzQiwIY6qH/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const LoamamiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.Loamami.title} />
			<DriveLink url={url} />
			<TableVariantCommunity heading="PRISE I" data={tableLomamiPhase1} />
			<TableVariantCommunity
				heading="PRISE II"
				data={tableLomamiPhase2}
			/>
		</>
	);
};

export default LoamamiPage;
