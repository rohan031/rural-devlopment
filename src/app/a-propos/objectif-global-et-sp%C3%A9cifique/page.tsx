import React from "react";
import { about_heading3 } from "./../../../data/hero";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";

const OverallAndSpecificObjective = () => {
    return (
        <div>
            <Hero heading={about_heading3} />
            <Container className={styles.content}>
                <div className={styles.img}>
                    <img
                        src="/about_us_OBJECTIF.png"
                        alt="Objectif Global Et Spécifique"
                    />
                </div>
                <div className={styles.para}>
                    <div>
                        <p>
                            Contribuer à l&#700;amélioration du cadre de vie des
                            populations congolaises par un meilleur accès à
                            l&#700;eau potable et à l&#700;assainissement, ainsi
                            qu&#700;à la santé et à l&#700;éducation.
                        </p>
                    </div>
                    <div>
                        <p>
                            &#8212; Accroitre le taux d&#700;accès à l&#700;eau
                            et à l&#700;assainissement les populations des
                            localités et des villes concernées;
                        </p>
                        <p>
                            &#8212; Rendre un meilleur accès à l&#700;éducation
                            aux élèves et un meilleur accès des soins aux santé
                            primaire aux populations;
                        </p>
                        <p>
                            &#8212; Assurer une autonomisation économique des
                            femmes dans la ville de MBUJI MAYI.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OverallAndSpecificObjective;
