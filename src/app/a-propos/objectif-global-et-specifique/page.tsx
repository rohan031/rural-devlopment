import React from "react";
import { about_heading3 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import Image from "next/image";

const data = {
    text1: "Contribuer à l’amélioration du cadre de vie des populations congolaises par un meilleur accès à l’eau potable et à l’assainissement, ainsi qu’à la santé et à l’éducation.",
    text2: "– Accroitre le taux d’accès à l’eau et à l’assainissement les populations des localités et des villes concernées;",
    text3: "– Rendre un meilleur accès à l’éducation aux élèves et un meilleur accès des soins aux santé primaire aux populations;",
    text4: "– Assurer une autonomisation économique des femmes dans la ville de MBUJI MAYI.",
};

const OverallAndSpecificObjective = () => {
    return (
        <div>
            <Hero heading={about_heading3} />
            <Container className={styles.content}>
                <div className={styles.img}>
                    <Image
                        src="/about_us_OBJECTIF.png"
                        width={546}
                        height={291}
                        alt="Objectif Global Et Spécifique"
                    />
                </div>
                <div className={styles.para}>
                    <div>
                        <p>{data.text1}</p>
                    </div>
                    <div>
                        <p>{data.text2}</p>
                        <p>{data.text3}</p>
                        <p>{data.text4}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OverallAndSpecificObjective;
