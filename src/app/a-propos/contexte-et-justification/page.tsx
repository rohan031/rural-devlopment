import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const data = {
    heading: "CONTEXTE ET JUSTIFICATION",
    list: [
        "Le projet est en conformité avec le Document de Stratégie de Croissance et de Réduction de la Pauvreté (DSCRP 2011-2015) de la RDC, notamment son troisième pilier qui porte sur « l’amélioration de l’accès aux services sociaux de base et le renforcement du capital humain ».",
        "Le projet concerne la zone Centre, définie autour de l’axe Ilebo-Tshikapa-Kananga-Mbuji-Mayi, qui constitue l’une des cinq zones prioritaires de développement du Gouvernement pour la période 2012-2016.",
        "En effet, avec 70 millions d’habitants, la RDC enregistre les plus faibles taux d’accès à l’eau potable et à l’assainissement en Afrique, respectivement 26% et 17%. De même, les enfants admis dans le système éducatif représentent 50% de ceux en âge de scolarisation.",
        "Le faible accès à l’eau potable et à l’assainissement est la cause principale des maladies hydriques comme la diarrhée, le choléra qui conduisent à la malnutrition chronique dont souffre 43% des enfants congolais, affectant leur développement méta et physique.",
        "À ce rythme, la RDC n’atteindra pas les Objectifs du Millénaires pour le Développement (OMD) pour l’eau potable et l’assainissement, la santé et l’éducation. Cette situation est à la base de l’exode des populations qui met en péril le développement économique des provinces du Kasaï, Kasaï Central, Kasaï Oriental, Lomami et Sankuru.",
        "Cette intervention se justifie ainsi par la nécessité de créer un minimum de confort de vie pour permettre la stabilisation des populations et poser les bases pour le développement économique de la zone.",
    ],
};

const BackgroundAndRationale = () => {
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

export default BackgroundAndRationale;