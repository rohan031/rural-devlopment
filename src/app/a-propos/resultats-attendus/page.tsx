import React from "react";
import { about_heading4 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data1 = {
    heading: "Composante Développement des Infrastructures",
    text1: "– 60 systèmes d’AEP dont 10 solaires sont réalisés avec espaces à vivres pour 60 centres de 10 000 à 20 000 habitants",
    text2: "– 494 latrines publiques sont construites ;",
    text3: "– 60 écoles sont construites et/ou réhabilitées et équipées;",
    text4: "– 60 centres de santé construits et/ou réhabilités et équipés avec médicaments essentiels;",
    text5: "– un centre multifonctionnel Genre est construits.",
    text6: "– 3 châteaux d’eau sont construits pour AEP de la REGIDESO à Mbuji Mayi;",
    text7: "– 272.100 m linéaire de réseau d’AEP de Mbuji-Mayi sont réhabilités ou construits;",
    text8: "– Travaux de lutte antiérosive pour la protection des conduites du système d’AEP et voirie de Tshika-pa;",
    text9: "– ville de MBUJI MAYI est approvisionnée en eau Potable;",
};

const data2 = {
    heading: "Composante Etudes et renforcement des Capacités",
    text1: "– la stratégie de mise en oeuvre de de l’AEP en mi-lieu rural est Elaborée;",
    text2: "– une étude de mise en place d’un réseau pilote de suivi des ressources en eau du fleuve Kasaï est réalisée;",
    text3: "– Une étude socio-économique Genre est réalisée;",
    text4: "– Un répertoire société civile et PTF du Genre sont Elaborer ;",
    text5: "– Les capacités des acteurs locaux sont renforcées;",
    text6: "– 1000 femmes pour le développement des activités génératrices de revenus sont formés;",
    text7: "– Les membres des 60 unités de gestion des systèmes d’AEP sont renforcés en capacités;",
    text8: "– 300 membres sont formés dont 40 % de femmes",
    text9: "– L’étude de la centrale hydroélectrique de Tshikapa est réalisée; .",
};

const data3 = {
    heading: "Composante Coordination et Gestion du projet ",
    text1: "– Des rapports d’avancement , d’audit et financiers sont élaborés",
};

const ExpectedResults = () => {
    return (
        <div>
            <Hero heading={about_heading4} />
            <Container className={styles.content}>
                <div className={styles.list}>
                    <ol type="I">
                        <li>
                            <h2>{data1.heading}</h2>
                            <ul>
                                <li>{data1.text1}</li>
                                <li>{data1.text2}</li>
                                <li>{data1.text3}</li>
                                <li>{data1.text4}</li>
                                <li>{data1.text5}</li>
                                <li>{data1.text6}</li>
                                <li>{data1.text7}</li>
                                <li>{data1.text8}</li>
                                <li>{data1.text9}</li>
                            </ul>
                        </li>
                        <li>
                            <h2>{data2.heading}</h2>
                            <ul>
                                <li>{data2.text1}</li>
                                <li>{data2.text2}</li>
                                <li>{data2.text3}</li>
                                <li>{data2.text4}</li>
                                <li>{data2.text5}</li>
                                <li>{data2.text6}</li>
                                <li>{data2.text7}</li>
                                <li>{data2.text8}</li>
                                <li>{data2.text9}</li>
                            </ul>
                        </li>
                        <li>
                            <h2>{data3.heading}</h2>
                            <ul>
                                <li>
                                    <li>{data3.text1}</li>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </Container>
        </div>
    );
};

export default ExpectedResults;
