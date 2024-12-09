import Hero from "@/components/Hero/Hero";
import Table from "@/components/table/Table";
import { rootLinks } from "@/data/navigation";
import { kasaiPhase1, kasaiPhase2 } from "@/data/reports-table/kasai";
import React from "react";
import DriveLink from "../drive-link/DriveLink";

const url =
	"https://docs.google.com/document/d/1GWESEj9kSN7_9mGFBI6sJ7TqATDUN4vN/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";
const KasaiPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kasai.title} />
			<DriveLink url={url} />
			<Table heading="PRISE I" data={kasaiPhase1} />
			<Table heading="PRISE II" data={kasaiPhase2} />
		</>
	);
};

export default KasaiPage;
