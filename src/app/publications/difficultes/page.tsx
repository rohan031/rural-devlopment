import React from "react";
import styles from "./difficulties.module.scss";
import Hero from "@/components/Home/Hero/Hero";
import { location } from "@/data/helper";
import Container from "@/components/Container/Container";

const data = [
	{
		image: "/diff/diff1.webp",
		text: "",
	},
	{
		image: "/diff/diff2.webp",
		text: "",
	},
	{
		image: "/diff/diff3.webp",
		text: "",
	},
];

const DifficultiesPage = async () => {
	return (
		<>
			<Hero location={location.diff} data={data} />

			<Container className={styles.container}>
				<div>
					Au cours de lʼexécution du Projet, depuis la signature des
					accords de financement, les difficultés suivantes ont été
					relevées:
				</div>

				<div>
					<ol type="1">
						<li>
							Difficultés antérieures:
							<ul>
								<li>
									Le retard dans la mobilisation de lʼéquipe
									de coordination du Projet intervenue
									effectivement à la date du 15 juillet 2014,
									soit sept (7) mois et le premier
									décaissement le 07/10/2017 (près de 10mois
									de retard) par rapport au calendrier initial
									du projet.
								</li>
								<li>
									Les sites dʼinterventions du projet nʼont
									été identifiés quʼen décembre 2014 et
									validés au mois de février 2015, soit une
									année et deux mois de retard en considérant
									la date de mise en vigueur du projet.
								</li>
								<li>
									Retard dans lʼobtention des avis de non
									objection de la BAD pour les différentes
									phases du processus de passation des marchés
									en rapport avec les travaux dʼAEP en milieu
									rural. Ceci influe négativement sur le
									niveau dʼexécution physique des activités et
									le calendrier dʼexécution du projet ;
								</li>
								<li>
									Retard dans lʼobtention de lʼANO de la BAD
									sur la mission de contrôle et surveillance
									des travaux de lʼAEP Mbuji- Mayi pourra
									impacter sur la qualité, le budget et la
									durée des travaux de lʼAEP Mbuji Mayi,
								</li>
								<li>
									Absence de routes sur lʼaxe
									Kananga-Dimbelenge et la détérioration
									dʼautres axes routiers ont impactés
									considérablement sur la durée des travaux
									dʼAEP en milieu rural,
								</li>
								<li>
									Le retard dans le lancement des travaux
									dʼAEP Mbuji-Mayi dont lʼactualisation des
									études de base qui étaient élaborées en 2004
									et lʼélaboration du DAOI sous financement de
									la KFW/ REGIDESO nʼont été achevées quʼau
									mois de mai 2016 au lieu de juin 2014 comme
									initialement prévu. Il convient de signaler
									que pour cette activité, il nʼétait pas
									prévu au départ un co- financement avec la
									KFW mais au cours de lʼétude, il sʼest avéré
									indispensable pour une meilleure synergie
									des travaux sur terrain de lancer un seul
									processus dʼacquisition pour recruter une
									seule entreprise pouvant exécuter
									simultanément les deux lots des travaux avec
									le financement de deux bailleurs compte tenu
									des implications techniques. Le rapport
									dʼévaluation des offres avait été transmis à
									la BAD mais les procédures dʼattribution ont
									été suspendues par la BAD le 30/06/2017après
									avoir donné leur ANO le 08/06/2017 sur la
									proposition dʼattribution des deux lots. Les
									deux Bailleurs de fonds ont décidé par la
									lettre du 30/07/2018 de relancer séparément
									lʼAOI pour les deux lots. Le contrat a été
									signé en date du 13 septembre 2019 et le
									démarrage prévu le 05 février 2020. Cette
									activité comprend plus de 25% des ressources
									du projet et son démarrage en 2020 permettra
									dʼaccroître le décaissement du projet et
									doit mériter une attention particulière car
									cʼest lʼactivité critique et déterminante
									pour la durée du projet. Lʼinsécurité avec
									le phénomène « Kamwina Nsapu » dans la zone
									dʼintervention du projet Au cours de
									lʼexécution du Projet, depuis la signature
									des accords de financement, les difficultés
									suivantes ont été relevées : PRISE
									http://localhost:3000/publications/difficultes
									2 of 5 09-12-2024, 11:35 am
								</li>
								<li>
									Lʼinsécurité avec le phénomène « Kamwina
									Nsapu » dans la zone dʼintervention du
									projet pendant plus de 10 mois a entrainé la
									démobilisation de certaines entreprises
									ainsi que lʼarrêt des travaux dans certains
									sites.
								</li>
								<li>
									Le nombre réduit des effectifs du personnel
									face à lʼenvergure des tâches constitue une
									autre pesanteur sur les délais des
									livrables. Un personnel dʼappoint pour la
									saisie dʼautres données du projet et la
									logistique sont nécessaires à recruter, Ces
									tâches sont assurées par les deux chauffeurs
									de la coordination nationale mais parfois
									incompatibles avec leur fonction de
									recrutement.
								</li>
								<li>
									Le désistement des candidats Consultants
									Assistants Techniques en Suivi-Evaluation et
									Genre/ Développement Social à la signature
									des contrats a retardé le lancement de
									certains processus sans attendre le Projet a
									poursuivi le programme des activités en
									produisant les drafts du guide de gestion du
									CMFG, les AMI et TDRs pour les campagnes
									dʼIEC, les indicateurs de références du
									Projet, les études socio-économiques genre,
									le répertoire des associations et
									partenaires financiers, etc.
								</li>
								<li>
									Le non recrutement des missions de contrôle
									des travaux des centres de santé, des écoles
									et des latrines a entrainé une augmentation
									des charges sur le budget de fonctionnement
									et lʼamortissement avancé des véhicules des
									Antennes à cause des missions importantes de
									suivi et contrôle par les antennes, qui
									nécessitera le renouvellement du charroi
									automobile.
								</li>
								<li>
									Le fonctionnement du Projet PRISE ne
									représente que 2,9% du budget total de
									projet. Quoi que le budget de fonctionnement
									soit faible, 98% du budget de fonctionnement
									a été utilisé pour 100% de la durée de mise
									en œuvre du projet. Ce qui implique la
									rationalité de gestion de fonds. Néanmoins,
									la réallocation des fonds sur les économies
									ou les imprévus a été nécessaire pour et a
									permis de recouvrir les ressources
									financières pour le fonctionnement du projet
								</li>
							</ul>
						</li>

						<li>
							Difficultés actuelles:
							<ul>
								<li>
									Exonération sur les acquisitions du projet
									au niveau de la Cellule Fiscale très lente
									et impacte négativement lʼavancement des
									travaux dʼAEP en milieu rural et en milieu
									urbain ;
								</li>
								<li>
									Difficultés logistiques liées à la mobilité
									au niveau des Antennes du PRISE et dans la
									zone du projet ;
								</li>
								<li>
									Retard dans lʼobtention des ANO de la BAD ;
								</li>
								<li>
									Lʼabsence de formations et les renforcements
									des capacités des experts du Projet ne
									permet pas dʼaméliorer la performance de la
									mise en œuvre du projet ;
								</li>
								<li>
									La faible capacité des certaines Entreprises
									de respecter le calendrier des travaux des
									écoles, centres de santé et latrines
									publiques sur certains sites ;
								</li>
								<li>
									Lʼapparition de la pandémie COVID-19 depuis
									décembre 2019 ne permet pas aux entreprises
									chargées dʼexécution des travaux dʼAEP à
									mobiliser le personnel, les matériels &
									équipements ainsi que les matériaux pour la
									mise en œuvre suit aux restrictions des
									mouvements décidés par les autorités
									politico-administratives tant nationales
									quʼinternationales
								</li>
							</ul>
						</li>
					</ol>
				</div>
			</Container>
		</>
	);
};

export default DifficultiesPage;
