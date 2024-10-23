// links which will have dedicated page
export const rootLinks = {
	home: {
		title: "D'accueil",
		link: "/",
	},
	projectOverview: {
		title: "Aperçu du Project",
		link: "/a-propos/apercu-du-project",
	},
	backgroundAndRationale: {
		title: "Contexte et Justification",
		link: "/a-propos/contexte-et-justification",
	},
	overallAndSpecificObjective: {
		title: "Objectif Global et Spécifique",
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
		title: "Developement des Infrastructres",
	},
	infrastructureDevelopmentPhase1: {
		title: "Phase I",
		link: "/nos-realisations/developement-des-infrastructres/phase-1",
	},
	infrastructureDevelopmentPhase2: {
		title: "Phase II",
		link: "/nos-realisations/developement-des-infrastructres/phase-2",
	},
	studiesAndCapacityBuilding: {
		title: "Etudes et Reforcement des Capacites",
		link: "/nos-realisations/etudes-et-reforcement-des-capacites",
	},
	projectCoordinationAndManagement: {
		title: "Coordination et Gestion du Projet",
		link: "/nos-realisations/coordination-et-gestion-du-projet",
	},
	annualReports: {
		title: "Rapports Annuels",
		link: "/publications/rapports-annuels",
	},
	contracts: {
		title: "Contrats",
		link: "/publications/contrats",
	},
	contractsForGoods: {
		title: "Contrat des Biens",
		link: "/publications/contrats/contrat-des-biens",
	},
	serviceContracts: {
		title: "Contrat des Services",
		link: "/publications/contrats/contrat-des-services",
	},
	worksContracts: {
		title: "Contrat de Travaux",
		link: "/publications/contrats/contrat-de-travaux",
	},
	quarterlyProgressReports: {
		title: "Rapports D'avancement Trismestriels",
		link: "/publications/rapports-d-avancement-trismestriels",
	},
	difficulties: {
		title: "Difficultés",
		link: "/publications/difficultes",
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
		link: "/opportunites/appel-a-manifestation-d-interet",
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
	// rootLinks.home,
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
		title: "Nos Réalisations",
		active: "/nos-realisations",
		links: [
			{
				...rootLinks.infrastructureDevelopment,
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
export const galleryAlbum = "/nos-realisations/developement-des-infrastructres";
