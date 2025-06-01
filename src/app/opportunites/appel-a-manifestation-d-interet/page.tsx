import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import PhaseList from "@/components/PhaseList/PhaseList";
import { rootLinks } from "@/data/navigation";
import { PhaseInfo } from "@/data/phases";

const links: PhaseInfo[] = [
	{
		title: "Phase I",
		link: rootLinks.callForExpressionOfInterestPhase1.link,
	},
	{
		title: "Phase II",
		link: rootLinks.callForExpressionOfInterestPhase2.link,
	},
];

const ContratsPage = async () => {
	return (
		<>
			<Hero heading={rootLinks.callForExpressionOfInterest.title} />

			<Container>
				<PhaseList list={links} />
			</Container>
		</>
	);
};

export default ContratsPage;
