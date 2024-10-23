import { rootLinks } from "./navigation";

export const categoryMap = {
	"Appels d'offres": rootLinks.callForTenders,
	"Appel à Manifestation d’Intérêt (AMI)":
		rootLinks.callForExpressionOfInterest,
	Contrats: rootLinks.contracts,
	"Contrat De Travaux": rootLinks.worksContracts,
	"Contrat Des Services": rootLinks.serviceContracts,
	"Contrats Des Biens": rootLinks.contractsForGoods,
};

export const categoryIdMap = {
	"Appels d'offres": "973ac216-d756-4ca5-a9a3-7729e8eded74",
	"Appel à Manifestation d’Intérêt (AMI)":
		"afaa1467-a624-41e6-84f5-315ce7c8791c",
	Contrats: "e617ad3c-4ec5-424f-8e43-3cfdd6658a19",
	"Contrat De Travaux": "b7e752d5-4d90-466f-95a1-0e17a7a73975",
	"Contrat Des Services": "f1681c27-b162-4b0f-892b-8fa6fb93633e",
	"Contrats Des Biens": "aad3e65c-d365-41d6-9b41-4b9424d5df28",
};

interface CategroyDetail {
	id: string;
	name: string;
}

export interface Blog {
	title: string;
	summary?: string;
	author: string;
	blogId: string;
	createdAt: string;
	cover: string;
	category: CategroyDetail;
}

export interface BlogItem {
	blogId: string;
	title: string;
	content: string;
	author: string;
	createdAt: string;
	updatedAt: string;
	cover: string;
	category: string;
}
