import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
    heading: "APERÇU DU PROJET",
    list: [
        "Le Projet de Renforcement des Infrastructures Socio-économiques (PRISE) est une réponse au Document de Stratégie de Croissance et de Réduction de la Pauvreté de deuxième génération (DSCRPII 2011-2015) de la RDC en rapport avec le troisième pilier de cette stratégie nationale qui concerne « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain » en se concentrant sur l’Alimentation en Eau Potable (AEP), la construction des écoles, des Centres de Santé et des latrines publiques.  Il faut signaler que le Projet s’est aussi occupé de la voirie urbaine de Tshikapa en vue de protéger contre les érosions, les conduites du système de l’AEP de cette ville.",
        "Le projet dans sa première phase concerne la zone Centre, définie autour de l’axe Ilebo-Tshikapa-Kananga-Mbuji-Mayi, qui constitue l’une des cinq zones prioritaires de développement du Gouvernement pour la période 2012-2016. Il s’intègre dans le programme national « Villages et Ecoles Assainis » qui s’inscrit dans le DSCRP comme une priorité pour l’approvisionnement en eau potable en milieu rural. Sa deuxième phase est conforme au PNEHA 2030 et vise l’amélioration des conditions socio-économiques et sanitaires ainsi que la résilience des populations congolaises. Spécifiquement, il vise à : (i) améliorer le taux d’accès à l’eau potable et à l’assainissement dans les zones rurales des provinces ciblées ; (ii) améliorer les taux de scolarisation et d’accès aux soins de santé des populations ; et iii) renforcer la capacité des différents acteurs du secteur. Les bénéficiaires directs des résultats du projet sont les populations rurales estimées à 870.908 personnes réparties dans 10 provinces de la RDC. D'un coût total de 55,77 millions d’UC dont 50 millions financé par un prêt FAD et 5,77 millions par la contrepartie du gouvernement. Le projet sera exécuté sur une période de 5 ans.",
        "Le PRISE II finance les infrastructures d'AEP, d'éducation et de santé en milieu rural. Il a été identifié à partir du Programme National d’Alimentation en Eau Potable et d’Assainissement en milieu rural élaboré sur financement du FAD dans le cadre du Projet Eau et Assainissement en milieu Semi-Urbain (PEASU) et dont PRISE  1 constitue le début de mise en œuvre. Les bons résultats enregistrés dans 5 provinces pendant la première phase (construction de 60 écoles, 60 centres de santé, 504 latrines et 60 AEP) a poussé le gouvernement à élaborer un programme d'équipement dans 26 provinces de la RDC avec des infrastructures similaires. Il va améliorer les indicateurs généraux de santé dans le pays à travers un accès durable à l’eau et à l’assainissement et l’adoption de bonnes pratiques d’hygiène par la construction des 22 AEP, 41 écoles, 40 centres de santé et 88 latrines, contribuant ainsi à l'amélioration de la résilience des populations face au changement climatique.",
        "Le projet est en conformité avec la stratégie d’intervention de la Banque en RDC (DSP 2013-2017), particulièrement son pilier 1: Développement des infrastructures de soutien à l’investissement privé et à l’intégration régionale. Il répond aussi à la priorité du Gouvernement dans la politique de décentralisation en équipements collectifs des entités décentralisées.",
        "Le PRISE contribue à la réalisation du troisième pilier du DSCRP II qui visait « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain » ",
    ],
};

const ProjectOverview = () => {
    return (
        <>
            <Hero heading={data.heading} />

            <Container className={styles.para}>
                {data.list.map((item) => {
                    return <p key={item}>{item}</p>;
                })}
            </Container>
        </>
    );
};

export default ProjectOverview;
