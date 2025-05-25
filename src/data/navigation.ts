import { title } from "process";

// links which will have dedicated page
export const rootLinks = {
	home: {
		title: "D'accueil",
		link: "/",
	},

	projectOverview: {
		title: "Aperçu du projet",
		link: "/a-propos/apercu-du-projet",
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
	infrastructureDevelopment: {
		title: "Développement des infrastructures",
		link: "/nos-realisations/developpement-des-infrastructres",
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
	news: {
		title: "Nouvelles",
		link: "/publications/nouvelles",
	},
	contracts: {
		title: "Contrats",
		link: "/publications/contrats",
	},
	contractsPhase1: {
		title: "PRISE Phase I",
		link: "/publications/contrats/phase-1",
	},
	contractsPhase2: {
		title: "PRISE Phase II",
		link: "/publications/contrats/phase-2",
	},
	contractsForGoodsPhase1: {
		title: "Contrat des biens",
		link: "/publications/contrats/phase-1/biens",
	},
	serviceContractsPhase1: {
		title: "Contrat des services",
		link: "/publications/contrats/phase-1/services",
	},
	worksContractsPhase1: {
		title: "Contrat de travaux",
		link: "/publications/contrats/phase-1/travaux",
	},
	contractsForGoodsPhase2: {
		title: "Contrat des biens",
		link: "/publications/contrats/phase-2/biens",
	},
	serviceContractsPhase2: {
		title: "Contrat des services",
		link: "/publications/contrats/phase-2/services",
	},
	worksContractsPhase2: {
		title: "Contrat de travaux",
		link: "/publications/contrats/phase-2/travaux",
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
	opportunitiesPhase1: {
		title: "PRISE Phase I",
		link: "/opportunites/phase-1",
	},
	opportunitiesPhase2: {
		title: "PRISE Phase II",
		link: "/opportunites/phase-2",
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
		title: "Composantes",
		active: "/nos-realisations",
		links: [
			rootLinks.infrastructureDevelopment,
			rootLinks.studiesAndCapacityBuilding,
			rootLinks.projectCoordinationAndManagement,
		],
	},
	{
		title: "Publication",
		active: "/publications",
		links: [
			rootLinks.annualReports,
			rootLinks.contracts,
			rootLinks.quarterlyProgressReports,
			rootLinks.difficulties,
		],
	},
	{
		title: "Opportunites",
		active: "/opportunites",
		links: [
			rootLinks.opportunitiesPhase1,
			rootLinks.opportunitiesPhase2,
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
