import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import PhaseList from "@/components/PhaseList/PhaseList";
import { rootLinks } from "@/data/navigation";
import { PhaseInfo } from "@/data/phases";

const links: PhaseInfo[] = [
	{
		title: "Phase I",
		link: rootLinks.contractsPhase1.link,
	},
	{
		title: "Phase II",
		link: rootLinks.contractsPhase2.link,
	},
];

const ContratsPage = async () => {
	return (
		<>
			<Hero heading={rootLinks.contracts.title} />

			<Container>
				<PhaseList list={links} />
			</Container>
		</>
	);
};

export default ContratsPage;
