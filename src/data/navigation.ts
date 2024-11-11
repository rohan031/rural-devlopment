// links which will have dedicated page
export const rootLinks = {
	home: {
		title: "D'accueil",
		link: "/",
	},
	projectOverview: {
		title: "Aperçu du project",
		link: "/a-propos/apercu-du-project",
	},
	backgroundAndRationale: {
		title: "Contexte et justification",
		link: "/a-propos/contexte-et-justification",
	},
	overallAndSpecificObjective: {
		title: "Objectif global et spécifique",
		link: "/a-propos/objectif-global-et-specifique",
	},
	expectedResults: {
		title: "Résultats attendus",
		link: "/a-propos/resultats-attendus",
	},
	kasai: {
		title: "Kasaï",
		link: "/repertoire-ouvrages/kasai",
	},
	kasaiCentral: {
		title: "Kasaï central",
		link: "/repertoire-ouvrages/kasai-central",
	},
	kasaiEastern: {
		title: "Kasaï oriental",
		link: "/repertoire-ouvrages/kasai-oriental",
	},
	Loamami: {
		title: "Lomami",
		link: "/repertoire-ouvrages/lomami",
	},
	sankuru: {
		title: "Sankuru",
		link: "/repertoire-ouvrages/sankuru",
	},
	hautLomami: {
		title: "Haut-lomami",
		link: "/repertoire-ouvrages/haut-lomami",
	},
	kwango: {
		title: "Kwango",
		link: "/repertoire-ouvrages/kwango",
	},
	kwilu: {
		title: "Kwilu",
		link: "/repertoire-ouvrages/kwilu",
	},
	maindombe: {
		title: "Maindombe",
		link: "/repertoire-ouvrages/maindombe",
	},
	maniema: {
		title: "Maniema",
		link: "/repertoire-ouvrages/maniema",
	},
	infrastructureDevelopmentPhase1: {
		title: "Phase I",
		link: "/nos-realisations/developpement-des-infrastructres/phase-1",
	},
	infrastructureDevelopmentPhase2: {
		title: "Phase II",
		link: "/nos-realisations/developpement-des-infrastructres/phase-2",
	},
	studiesAndCapacityBuilding: {
		title: "Etudes et reforcement des capacites",
		link: "/nos-realisations/etudes-et-reforcement-des-capacites",
	},
	projectCoordinationAndManagement: {
		title: "Coordination et gestion du projet",
		link: "/nos-realisations/coordination-et-gestion-du-projet",
	},
	annualReports: {
		title: "Rapports annuels",
		link: "/publications/rapports-annuels",
	},
	contracts: {
		title: "Contrats",
		link: "/publications/contrats",
	},
	contractsForGoods: {
		title: "Contrat des biens",
		link: "/publications/contrats/contrat-des-biens",
	},
	serviceContracts: {
		title: "Contrat des services",
		link: "/publications/contrats/contrat-des-services",
	},
	worksContracts: {
		title: "Contrat de travaux",
		link: "/publications/contrats/contrat-de-travaux",
	},
	quarterlyProgressReports: {
		title: "Rapports d'avancement trismestriels",
		link: "/publications/rapports-d-avancement-trismestriels",
	},
	difficulties: {
		title: "Difficultés",
		link: "/publications/difficultes",
	},
	callForTenders: {
		title: "Appels d'offres",
		link: "/opportunites/appels-d-offres",
	},
	noticeCallForApplications: {
		title: "Avis appel candidature",
		link: "/opportunites/avis-appel-candidature",
	},
	callForExpressionOfInterest: {
		title: "Appel a manifestation d'intérêt",
		link: "/opportunites/appel-a-manifestation-d-interet",
	},
	theMinistry: {
		title: "Le ministère",
		link: "/le-ministere",
	},
	contact: {
		title: "Contact",
		link: "/contact",
	},
	donate: {
		title: "Faites un don aujourd'hui",
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
	// rootLinks.home,
	{
		title: "A propos",
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
			rootLinks.Loamami,
			rootLinks.sankuru,
			rootLinks.hautLomami,
			rootLinks.kwango,
			rootLinks.kwilu,
			rootLinks.maindombe,
			rootLinks.maniema,
		],
	},
	{
		title: "Nos réalisations",
		active: "/nos-realisations",
		links: [
			{
				title: "Développement des infrastructres",
				links: [
					rootLinks.infrastructureDevelopmentPhase1,
					rootLinks.infrastructureDevelopmentPhase2,
				],
			},
			rootLinks.studiesAndCapacityBuilding,
			rootLinks.projectCoordinationAndManagement,
		],
	},
	{
		title: "Publication",
		active: "/publications",
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
export const galleryAlbum =
	"/nos-realisations/developpement-des-infrastructres";
