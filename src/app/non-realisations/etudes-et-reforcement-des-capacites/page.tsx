import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { studiesAndCapacityBuilding } from "@/data/hero";

const data = {
    text1: "Élaboration de la stratégie de mise en œuvre de l’AEP en milieu rural ;",
    text2: "Réalisation d’une étude de mise en place d’un réseau pilote de suivi des ressources en eau du fleuve Kasaï ;",
    text3: "Réalisation d’une étude socio-économique Genre ;",
    text4: "Élaboration d’un répertoire société civile et PTF du Genre ;",
    text5: "Renforcement des capacités des acteurs locaux ;",
    text6: "Formation des 1000 femmes sur le développement des activités génératrices de revenus",
    text7: "Renforcement de capacités des membres des 60 unités de gestion des systèmes d’AEP ;",
    text8: "Formation des 300 membres dont 40% de femmes ;",
    text9: "Réalisation de l’étude de la centrale hydroélectrique de Tshikapa.",
};

const StudiesAndCapacityBuilding = () => {
    return (
        <div>
            <Hero heading={studiesAndCapacityBuilding} />
            <Container className={styles.list}>
                <ul>
                    <li>{data.text1}</li>
                    <li>{data.text2}</li>
                    <li>{data.text3}</li>
                    <li>{data.text4}</li>
                    <li>{data.text5}</li>
                    <li>{data.text6}</li>
                    <li>{data.text7}</li>
                    <li>{data.text8}</li>
                    <li>{data.text9}</li>
                </ul>
            </Container>
        </div>
    );
};

export default StudiesAndCapacityBuilding;
