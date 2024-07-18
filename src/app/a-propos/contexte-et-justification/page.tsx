import React from "react";
import { about_heading2 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
const BackgroundAndRationale = () => {
    return (
        <div>
            <Hero heading={about_heading2} />
            <Container className={styles.para}>
                <p>
                    Le projet est en conformité avec le Document de Stratégie de
                    Croissance et de Réduction de la Pauvreté (DSCRP 2011-2015)
                    de la RDC, notamment son troisième pilier qui porte sur «
                    l&#700;amélioration de l&#700;accès aux services sociaux de
                    base et le renforcement du capital humain ».
                </p>
                <p>
                    Le projet concerne la zone Centre, définie autour de
                    l&#700;axe Ilebo-Tshikapa-Kananga-Mbuji-Mayi, qui constitue
                    l&#700;une des cinq zones prioritaires de développement du
                    Gouvernement pour la période 2012-2016.
                </p>
                <p>
                    En effet, avec 70 millions d&#700;habitants, la RDC
                    enregistre les plus faibles taux d&#700;accès à l&#700;eau
                    potable et à l&#700;assainissement en Afrique,
                    respectivement 26% et 17%. De même, les enfants admis dans
                    le système éducatif représentent 50% de ceux en âge de
                    scolarisation.
                </p>
                <p>
                    Le faible accès à l&#700;eau potable et à
                    l&#700;assainissement est la cause principale des maladies
                    hydriques comme la diarrhée, le choléra qui conduisent à la
                    malnutrition chronique dont souffre 43% des enfants
                    congolais, affectant leur développement méta et physique.
                </p>
                <p>
                    À ce rythme, la RDC n&#700;atteindra pas les Objectifs du
                    Millénaires pour le Développement (OMD) pour l&#700;eau
                    potable et l&#700;assainissement, la santé et l’éducation.
                    Cette situation est à la base de l&#700;exode des
                    populations qui met en péril le développement économique des
                    provinces du Kasaï, Kasaï Central, Kasaï Oriental, Lomami et
                    Sankuru.
                </p>
                <p>
                    Cette intervention se justifie ainsi par la nécessité de
                    créer un minimum de confort de vie pour permettre la
                    stabilisation des populations et poser les bases pour le
                    développement économique de la zone.
                </p>
            </Container>
        </div>
    );
};

export default BackgroundAndRationale;
