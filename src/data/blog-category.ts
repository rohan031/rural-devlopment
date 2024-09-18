import { rootLinks } from "./navigation";

export const categoryMap = {
	"Appels d'offres": rootLinks.callForTenders.link,
	"Appel à Manifestation d’Intérêt (AMI)":
		rootLinks.callForExpressionOfInterest.link,
	Contrats: rootLinks.contracts.link,
	"Contrat De Travaux": rootLinks.contractsForGoods.link,
	"Contrat Des Services": rootLinks.serviceContracts.link,
	"Contrats Des Biens": rootLinks.worksContracts.link,
};
