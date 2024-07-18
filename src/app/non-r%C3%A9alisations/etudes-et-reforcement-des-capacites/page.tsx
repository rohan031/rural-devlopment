import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { studiesAndCapacityBuilding } from "@/data/hero";

const StudiesAndCapacityBuilding = () => {
    return (
        <div>
            <Hero heading={studiesAndCapacityBuilding} />
            <Container className={styles.list}>
                <ul>
                    <li>
                        Élaboration de la stratégie de mise en œuvre de
                        l&#700;AEP en milieu rural ;
                    </li>
                    <li>
                        Réalisation d&#700;une étude de mise en place d&#700;un
                        réseau pilote de suivi des ressources en eau du fleuve
                        Kasaï ;
                    </li>
                    <li>
                        Réalisation d&#700;une étude socio-économique Genre ;
                    </li>
                    <li>
                        Élaboration d&#700;un répertoire société civile et PTF
                        du Genre ;
                    </li>
                    <li>Renforcement des capacités des acteurs locaux ;</li>
                    <li>
                        Formation des 1000 femmes sur le développement des
                        activités génératrices de revenus
                    </li>
                    <li>
                        Renforcement de capacités des membres des 60 unités de
                        gestion des systèmes d&#700;AEP ;
                    </li>
                    <li>Formation des 300 membres dont 40% de femmes ;</li>
                    <li>
                        Réalisation de l&#700;étude de la centrale
                        hydroélectrique de Tshikapa.
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default StudiesAndCapacityBuilding;
