import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
    heading: "RÉSULTATS ATTENDUS",
    phase1: {
        heading: "PRISE : " + "1e".replace("e", "<sup>e</sup>") + " " + "phase",
        development: {
            heading: "Composante Développement des Infrastructures",
            list: [
                "60 systèmes d’AEP dont 10 solaires sont réalisés avec espaces à vivres pour 60 centres de 10 000 à 20 000 habitants",
                "494 latrines publiques sont construites",
                "60 écoles sont construites et/ou réhabilitées et équipées",
                "60 centres de santé construits et/ou réhabilités et équipés avec médicaments essentiels",
                "un centre multifonctionnel Genre est construits.",
                "3 châteaux d’eau sont construits pour AEP de la REGIDESO à Mbuji Mayi",
                "272.100 m linéaire de réseau d’AEP de Mbuji-Mayi sont réhabilités ou construits",
                "Travaux de lutte antiérosive pour la protection des conduites du système d’AEP et voirie de Tshika-pa",
                "ville de MBUJI MAYI est approvisionnée en eau Potable",
            ],
        },
        etudes: {
            heading: "Composante Etudes et renforcement des Capacités",
            list: [
                "la stratégie de mise en oeuvre de de l’AEP en mi-lieu rural est Elaborée",
                "une étude de mise en place d’un réseau pilote de suivi des ressources en eau du fleuve Kasaï est réalisée",
                "Une étude socio-économique Genre est réalisée",
                "Un répertoire société civile et PTF du Genre sont Elaborer",
                "Les capacités des acteurs locaux sont renforcées",
                "1000 femmes pour le développement des activités génératrices de revenus sont formés",
                "Les membres des 60 unités de gestion des systèmes d’AEP sont renforcés en capacités",
                "300 membres sont formés dont 40 % de femmes",
                "L’étude de la centrale hydroélectrique de Tshikapa est réalisée.",
            ],
        },
        coordination: {
            heading: "Composante Coordination et Gestion du projet",
            list: [
                "Des rapports d’avancement , d’audit et financiers sont élaborés",
            ],
        },
    },
    phase2: {
        heading: "PRISE : " + "2e".replace("e", "<sup>e</sup>") + " " + "phase",
        development: {
            heading: "Composante Développement des Infrastructures",
            list: [
                "22 systèmes d’AEP avec énergie solaire/thermique;",
                "88 latrines publiques seront construites ;",
                "41 écoles sont construites et/ou réhabilitées et équipées avec latrines et éclairage photovoltaïque;",
                "40 centres de santé construits et/ou réhabilités et équipés y compris éclairage photovoltaïque;",
                "Construction et équipement de deux bâtiments pour les régies provinciales.",
                "Suivi et contrôle des travaux d’AEP en milieu rural et de construction des écoles, centres de santé, espaces à vivre et latrines publiques;",
                "Campagne d’IEC (hygiène, l’eau, sante, genre, assainissement et la pérennisation des infrastructures réalisées);",
            ],
        },
        etudes: {
            heading: "Composante Etudes et renforcement des Capacités",
            list: [
                "Formation des jeunes en plomberie et entretien des ouvrages d'AEP et d’assainissement",
                "Formation sur le logiciel de gestion financière;",
                "Sensibilisation des acteurs locaux et ONG sur l'hygiène et la salubrité et à la Maitrise d’ouvrage des infrastructures d’AEPA;",
                "Formation des cadres du Ministère des Ressources hydrauliques, Développement rural et agents du CNAEHA en gestion d'une base de données;",
                "Formation des Brigades d’Assainissement (BA) et des Techniciens de l’Environnement (TE) ainsi que les Facilitateurs Communautaires (FC);",
                "Formation des Autorités Provinciales Administratives pour leur implication aux activités de lutte contre la défécation à l’air libre dans les sites du projet;",
                "Campagne locale d’IEC pour le changement de comportement en Genre sur l'hygiène, l'assainissement et la nutrition;",
                "Promotion d’actions intégrées WASH, Santé et Nutrition (niveau individuel et du ménage & niveau communautaire )",
                "Appui à la mise œuvre du plan genre (volets formation et apprentissage des femmes et des filles, et violences faites aux femmes) de la RDC; .",
                "Appui à la mise œuvre du plan genre (volets formation et apprentissage des femmes et des filles, et violences faites aux femmes) de la RDC",
                "Renforcement des capacités des acteurs (l’appui à la mise en place de la délégation de service publique (aspects institutionnels, règlementaires et légaux, recrutement et opérationnalisation y compris monitoring))",
                "Etudes et assistance aux réformes du secteur AEPA (maitrise d’œuvre)",
                "Etude de la vulnérabilité climatique du projet",
                "Renforcement des capacités sur le changement climatique lié au secteur de l’approvisionnement en eau",
            ],
        },
        coordination: {
            heading: "Composante Coordination et Gestion du projet",
            list: [
                "Des rapports d’avancement, d’audit et financiers seront élaborés",
            ],
        },
    },
};

const ExpectedResults = () => {
    return (
        <>
            <Hero heading={data.heading} />

            <Container className={styles.listcontainer}>
                <ol type="1" className={styles.listheading}>
                    <li className={styles.sublistheading}>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: data.phase1.heading,
                            }}
                        ></h2>
                        <ol type="I" className={styles.list}>
                            <li>
                                <h3>{data.phase1.development.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase1.development.list.map(
                                        (item) => {
                                            return <li key={item}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </li>

                            <li>
                                <h3>{data.phase1.etudes.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase1.etudes.list.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </li>

                            <li>
                                <h3>{data.phase1.coordination.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase1.coordination.list.map(
                                        (item) => {
                                            return <li key={item}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.sublistheading}>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: data.phase2.heading,
                            }}
                        ></h2>
                        <ol type="I" className={styles.list}>
                            <li>
                                <h3>{data.phase2.development.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase2.development.list.map(
                                        (item) => {
                                            return <li key={item}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </li>

                            <li>
                                <h3>{data.phase2.etudes.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase2.etudes.list.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </li>

                            <li>
                                <h3>{data.phase2.coordination.heading}</h3>

                                <ul className={styles.subList}>
                                    {data.phase2.coordination.list.map(
                                        (item) => {
                                            return <li key={item}>{item}</li>;
                                        }
                                    )}
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>
            </Container>
        </>
    );
};

export default ExpectedResults;
