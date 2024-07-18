import React from "react";
import { about_heading4 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const ExpectedResults = () => {
    return (
        <div>
            <Hero heading={about_heading4} />
            <Container className={styles.content}>
                <div className={styles.list}>
                    <ol type="I">
                        <li>
                            <h2>
                                Composante Développement des Infrastructures
                            </h2>
                            <ul>
                                <li>
                                    &#8212; 60 systèmes d&#700;AEP dont 10
                                    solaires sont réalisés avec espaces à vivres
                                    pour 60 centres de 10 000 à 20 000 habitants
                                </li>
                                <li>
                                    &#8212; 494 latrines publiques sont
                                    construites ;
                                </li>
                                <li>
                                    &#8212; 60 écoles sont construites et/ou
                                    réhabilitées et équipées;
                                </li>
                                <li>
                                    &#8212; 60 centres de santé construits et/ou
                                    réhabilités et équipés avec médicaments
                                    essentiels;
                                </li>
                                <li>
                                    &#8212; un centre multifonctionnel Genre est
                                    construits.
                                </li>
                                <li>
                                    &#8212; 3 châteaux d&#700;eau sont
                                    construits pour AEP de la REGIDESO à Mbuji
                                    Mayi;
                                </li>
                                <li>
                                    &#8212; 272.100 m linéaire de réseau
                                    d&#700;AEP de Mbuji-Mayi sont réhabilités ou
                                    construits;
                                </li>
                                <li>
                                    &#8212; Travaux de lutte antiérosive pour la
                                    protection des conduites du système
                                    d&#700;AEP et voirie de Tshika-pa;
                                </li>
                                <li>
                                    &#8212; ville de MBUJI MAYI est
                                    approvisionnée en eau Potable;
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>
                                Composante Etudes et renforcement des Capacités
                            </h2>
                            <ul>
                                <li>
                                    &#8212; la stratégie de mise en oeuvre de de
                                    l&#700;AEP en mi-lieu rural est Elaborée;
                                </li>
                                <li>
                                    &#8212; une étude de mise en place d&#700;un
                                    réseau pilote de suivi des ressources en eau
                                    du fleuve Kasaï est réalisée;
                                </li>
                                <li>
                                    &#8212; Une étude socio-économique Genre est
                                    réalisée;
                                </li>
                                <li>
                                    &#8212; Un répertoire société civile et PTF
                                    du Genre sont Elaborer ;
                                </li>
                                <li>
                                    &#8212; Les capacités des acteurs locaux
                                    sont renforcées;
                                </li>
                                <li>
                                    &#8212; 1000 femmes pour le développement
                                    des activités génératrices de revenus sont
                                    formés;
                                </li>
                                <li>
                                    &#8212; Les membres des 60 unités de gestion
                                    des systèmes d&#700;AEP sont renforcés en
                                    capacités;
                                </li>
                                <li>
                                    &#8212; 300 membres sont formés dont 40 % de
                                    femmes
                                </li>
                                <li>
                                    &#8212; L&#700;étude de la centrale
                                    hydroélectrique de Tshikapa est réalisée; .
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>
                                Composante Coordination et Gestion du projet
                            </h2>
                            <ul>
                                <li>
                                    &#8212; Des rapports d&#700;avancement ,
                                    d&#700;audit et financiers sont élaborés Des
                                    rapports d&#700;avancement , d&#700;audit et
                                    financiers sont élaborés
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
