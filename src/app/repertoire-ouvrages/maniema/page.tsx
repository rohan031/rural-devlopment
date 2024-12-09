import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableManiema } from "@/data/reports-table/maniema";
import React from "react";
import DriveLink from "../drive-link/DriveLink";

const url =
	"https://docs.google.com/document/d/1oSUDINsF2HcUB9JETy8cnZNFcpWgeHNR/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const ManiemaPage = () => {
	return (
		<>
			<Hero heading={rootLinks.maniema.title} />
			<DriveLink url={url} />
			<TableVariant data={tableManiema} heading="PRISE II" />
		</>
	);
};

export default ManiemaPage;
