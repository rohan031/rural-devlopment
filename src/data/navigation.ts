// links which will have dedicated page
export const rootLinks = {
	home: {
		title: "D'accueil",
		link: "/",
	},
	projectOverview: {
		title: "Aperçu Du Project",
		link: "/a-propos/apercu-du-project",
	},
	backgroundAndRationale: {
		title: "Contexte Et Justification",
		link: "/a-propos/contexte-et-justification",
	},
	overallAndSpecificObjective: {
		title: "Objectif Global Et Spécifique",
		link: "/a-propos/objectif-global-et-specifique",
	},
	expectedResults: {
		title: "Résultats Attendus",
		link: "/a-propos/resultats-attendus",
	},
	kasai: {
		title: "Kasaï",
		link: "/repertoire-ouvrages/kasai",
	},
	kasaiCentral: {
		title: "Kasaï Central",
		link: "/repertoire-ouvrages/kasai-central",
	},
	kasaiEastern: {
		title: "Kasaï Oriental",
		link: "/repertoire-ouvrages/kasai-oriental",
	},
	Loamani: {
		title: "Lomami",
		link: "/repertoire-ouvrages/lomami",
	},
	sankuru: {
		title: "Sankuru",
		link: "/repertoire-ouvrages/sankuru",
	},
	infrastructureDevelopment: {
		title: "Developpement Des Infrastructres",
		link: "/non-realisations/developpement-des-infrastructres",
	},
	studiesAndCapacityBuilding: {
		title: "Etudes et Reforcement des Capacites",
		link: "/non-realisations/etudes-et-reforcement-des-capacites",
	},
	projectCoordinationAndManagement: {
		title: "Coordination et Gestion du Projet",
		link: "/non-realisations/coordination-et-gestion-du-projet",
	},
	annualReports: {
		title: "Rapports Annuels",
		link: "/publication/rapports-annuels",
	},
	contracts: {
		title: "Contrats",
		link: "/publication/contrats",
	},
	contractsForGoods: {
		title: "Contrat Des Biens",
		link: "/publication/contrats/contrat-des-biens",
	},
	serviceContracts: {
		title: "Contrat Des Services",
		link: "/publication/contrats/contrat-des-services",
	},
	worksContracts: {
		title: "Contrat De Travaux",
		link: "/publication/contrats/contrat-de-travaux",
	},
	quarterlyProgressReports: {
		title: "Rapports D'avancement Trismestriels",
		link: "/publication/rapports-d-avancement-trismestriels",
	},
	difficulties: {
		title: "Difficultés",
		link: "/publication/difficultes",
	},
	callForTenders: {
		title: "Appels D'offres",
		link: "/opportunites/appels-d-offres",
	},
	noticeCallForApplications: {
		title: "Avis Appel Candidature",
		link: "/opportunites/avis-appel-candidature",
	},
	callForExpressionOfInterest: {
		title: "Appel A Manifestation D'intérêt",
		link: "/opportunites/appel-a-manifestation-d-intérêt",
	},
	theMinistry: {
		title: "Le Ministère",
		link: "/le-ministere",
	},
	contact: {
		title: "Contact",
		link: "/contact",
	},
	donate: {
		title: "Faites Un Don Aujourd'hui",
		link: "/faire-un-don",
	},
};

export type NavBarLinks = {
	title: string;
	link?: string;
	active?: string;
	links?: NavBarLinks[];
};

export const navBarLinks: NavBarLinks[] = [
	rootLinks.home,
	{
		title: "A Propos",
		active: "/a-propos",
		links: [
			rootLinks.projectOverview,
			rootLinks.backgroundAndRationale,
			rootLinks.overallAndSpecificObjective,
			rootLinks.expectedResults,
		],
	},
	{
		title: "Répertoire/Ouvrages",
		active: "/repertoire-ouvrages",
		links: [
			rootLinks.kasai,
			rootLinks.kasaiCentral,
			rootLinks.kasaiEastern,
			rootLinks.Loamani,
			rootLinks.sankuru,
		],
	},
	{
		title: "Non Réalisations",
		active: "/non-realisations",
		links: [
			rootLinks.infrastructureDevelopment,
			rootLinks.studiesAndCapacityBuilding,
			rootLinks.projectCoordinationAndManagement,
		],
	},
	{
		title: "Publication",
		active: "/publication",
		links: [
			rootLinks.annualReports,
			{
				...rootLinks.contracts,
				links: [
					rootLinks.contractsForGoods,
					rootLinks.serviceContracts,
					rootLinks.worksContracts,
				],
			},
			rootLinks.quarterlyProgressReports,
			rootLinks.difficulties,
		],
	},
	{
		title: "Opportunites",
		active: "/opportunites",
		links: [
			rootLinks.callForTenders,
			rootLinks.noticeCallForApplications,
			rootLinks.callForExpressionOfInterest,
		],
	},
	rootLinks.theMinistry,
	rootLinks.contact,
];

export const footer = [
	rootLinks.projectOverview,
	rootLinks.annualReports,
	rootLinks.backgroundAndRationale,
	rootLinks.overallAndSpecificObjective,
	rootLinks.noticeCallForApplications,
	rootLinks.contracts,
	rootLinks.difficulties,
	rootLinks.theMinistry,
];

export const phone = ["(+243) 817 073 112", "(+243) 817 073 118"];
export const email = ["projetpriserdc@prise-rdc.com"];
export const address =
	"Avenue Lukusa, n°111-112, croisement des avenues TSF et Lukusa,dans l'enceinte du secrétariat Général au Développement Rural";
