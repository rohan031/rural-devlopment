import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
    heading: "APERÇU DU PROJET",
    list: [
        "Le Projet de Renforcement des Infrastructures Socio-économiques (PRISE) est une réponse au Document de Stratégie de Croissance et de Réduction de la Pauvreté de deuxième génération (DSCRPII 2011-2015) de la RDC en rapport avec le troisième pilier de cette stratégie nationale qui concerne « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain ».",
        "Le projet concerne la zone Centre, définie autour de l’axe Ilebo-Tshikapa-Kananga-Mbuji-Mayi, qui constitue l’une des cinq zones prioritaires de développement du Gouvernement pour la période 2012-2016. Il s’intègre dans le programme national « Villages et Ecoles Assainis » qui s’inscrit dans le DSCRP comme une priorité pour l’approvisionnement en eau potable en milieu rural.",
        "Le projet est en conformité avec la stratégie d’intervention de la Banque en RDC (DSP 2013-2017), particulièrement son pilier 1: Développement des infrastructures de soutien à l’investissement privé et à l’intégration régionale. Il répond aussi à la priorité du Gouvernement dans la politique de décentralisation en équipements collectifs des entités décentralisées.",
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
