import React from "react";
import { about_heading1 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
const ProjectOverview = () => {
    return (
        <div>
            <Hero heading={about_heading1} />
            <Container className={styles.para}>
                <p>
                    Le Projet de Renforcement des Infrastructures
                    Socio-économiques (PRISE) est une réponse au Document de
                    Stratégie de Croissance et de Réduction de la Pauvreté de
                    deuxième génération (DSCRPII 2011-2015) de la RDC en rapport
                    avec le troisième pilier de cette stratégie nationale qui
                    concerne « l&#700;amélioration de l&#700;accès aux services
                    sociaux de base et le renforcement du capital humain ».
                </p>
                <p>
                    Le projet concerne la zone Centre, définie autour de
                    l&#700;axe Ilebo-Tshikapa-Kananga-Mbuji-Mayi, qui constitue
                    l&#700;une des cinq zones prioritaires de développement du
                    Gouvernement pour la période 2012-2016. Il s&#700;intègre
                    dans le programme national « Villages et Ecoles Assainis »
                    qui s&#700;inscrit dans le DSCRP comme une priorité pour
                    l&#700;approvisionnement en eau potable en milieu rural.
                </p>
                <p>
                    Le projet est en conformité avec la stratégie
                    d&#700;intervention de la Banque en RDC (DSP 2013-2017),
                    particulièrement son pilier 1: Développement des
                    infrastructures de soutien à l&#700;investissement privé et
                    à l&#700;intégration régionale. Il répond aussi à la
                    priorité du Gouvernement dans la politique de
                    décentralisation en équipements collectifs des entités
                    décentralisées.
                </p>
            </Container>
        </div>
    );
};

export default ProjectOverview;
