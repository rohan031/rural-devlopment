import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import {
	kasaiOrientalPhase1,
	kasaiOrientalPhase2,
} from "@/data/reports-table/kasai-oriental";
import React from "react";
import DriveLink from "../drive-link/DriveLink";

const url =
	"https://docs.google.com/document/d/1Ln84Z4PVTQTbf8O6r4I4LAcC9LZizu7-/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const KasaiEasternPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasaiEastern.title} />
			<DriveLink url={url} />
			<TableVariant heading="PRISE I" data={kasaiOrientalPhase1} />
			<TableVariant heading="PRISE II" data={kasaiOrientalPhase2} />
		</>
	);
};

export default KasaiEasternPage;
