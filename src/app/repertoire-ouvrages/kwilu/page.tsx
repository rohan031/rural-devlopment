import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableKiwlu } from "@/data/reports-table/kwilu";
import React from "react";
import DriveLink from "../drive-link/DriveLink";

const url =
	"https://docs.google.com/document/d/1mU3kiuoIMac5vHRXlMa2sWmHX0g4XzGO/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";
const KwiluPage = () => {
	return (
		<>
			<Hero heading={rootLinks.kwilu.title} />
			<DriveLink url={url} />
			<TableVariant heading="PRISE II" data={tableKiwlu} />
		</>
	);
};

export default KwiluPage;
