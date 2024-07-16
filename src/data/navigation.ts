// links which will have dedicated page
const rootLinks = {
	projectOverview: {
		title: "Aperçu Du Project",
		link: "/a-propos/aperçu-du-project",
	},
	backgroundAndRationale: {
		title: "Contexte Et Justification",
		link: "/a-propos/contexte-et-justification",
	},
	overallAndSpecificObjective: {
		title: "Objectif Global Et Spécifique",
		link: "/a-propos/Objectif-global-et-spécifique",
	},
	expectedResults: {
		title: "Résultats Attendus",
		link: "/a-propos/résultats-attendus",
	},
	kasai: {
		title: "Kasaï",
		link: "répertoire-ouvrages/kasaï",
	},
	kasaiCentral: {
		title: "Kasaï Central",
		link: "répertoire-ouvrages/kasaï-central",
	},
	kasaiEastern: {
		title: "Kasaï Oriental",
		link: "répertoire-ouvrages/kasaï-oriental",
	},
	Loamani: {
		title: "Lomami",
		link: "répertoire-ouvrages/lomami",
	},
	sankuru: {
		title: "Sankuru",
		link: "répertoire-ouvrages/sankuru",
	},
	infrastructureDevelopment: {
		title: "Developpement Des Infrastructres",
		link: "/non-réalisations/developpement-des-infrastructres",
	},
	studiesAndCapacityBuilding: {
		title: "Etudes et Reforcement des Capacites",
		link: "/non-réalisations/etudes-et-reforcement-des-capacites",
	},
	projectCoordinationAndManagement: {
		title: "Coordination et Gestion du Projet",
		link: "/non-réalisations/coordination-et-gestion-du-projet",
	},
	annualReports: {
		title: "Rapports Annuels",
		link: "/publication/rapports-annuels",
	},
	contracts: {
		title: "Contrats",
		link: "/publication/Contrats",
	},
	contractsForGoods: {
		title: "Contrat Des Biens",
		link: "/publication/Contrats/contrat-des-biens",
	},
	serviceContracts: {
		title: "Contrat Des Services",
		link: "/publication/Contrats/contrat-des-services",
	},
	worksContracts: {
		title: "Contrat De Travaux",
		link: "/publication/Contrats/contrat-de-travaux",
	},
	quarterlyProgressReports: {
		title: "Rapports D'avancement Trismestriels",
		link: "/publication/rapports-d-avancement-trismestriels",
	},
	difficulties: {
		title: "Difficultés",
		link: "/publication/difficultés",
	},
	callForTenders: {
		title: "Appels D'offres",
		link: "/opportunités/appels-d-offres",
	},
	noticeCallForApplications: {
		title: "Avis Appel Candidature",
		link: "/opportunités/avis-appel-candidature",
	},
	callForExpressionOfInterest: {
		title: "Appel A Manifestation D'intérêt",
		link: "/opportunités/appel-a-manifestation-d-intérêt",
	},
	theMinistry: {
		title: "Le Ministère",
		link: "/le-ministère",
	},
	contact: {
		title: "Contact",
		link: "/contact",
	},
};

export const navBarLinks = [
	{
		title: "A Propos",
		links: [
			rootLinks.projectOverview,
			rootLinks.backgroundAndRationale,
			rootLinks.overallAndSpecificObjective,
			rootLinks.expectedResults,
		],
	},
	{
		title: "Répertoire/Ouvrages",
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
		links: [
			rootLinks.infrastructureDevelopment,
			rootLinks.studiesAndCapacityBuilding,
			rootLinks.projectCoordinationAndManagement,
		],
	},
	{
		title: "Publication",
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
		title: "Opportunités",
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
	rootLinks.overallAndSpecificObjective,
	rootLinks.backgroundAndRationale,
	rootLinks.annualReports,
	rootLinks.noticeCallForApplications,
	rootLinks.contracts,
	rootLinks.difficulties,
	rootLinks.theMinistry,
];

export const phone = ["(+243) 817 073 112", "(+243) 817 073 118"];
export const email = ["projetpriserdc@prise-rdc.com"];
export const address =
	"Avenue Lukusa, n°111-112, croisement des avenues TSF et Lukusa,dans l'enceinte du secrétariat Général au Développement Rural";
