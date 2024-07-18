import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { projectCoordinationAndManagement } from "@/data/hero";

const data = {
    text: "Élaboration des rapports d’avancement, d’audit et de finances ;",
};

const ProjectCoordinationAndManagement = () => {
    return (
        <div>
            <Hero heading={projectCoordinationAndManagement} />
            <Container className={styles.list}>
                <ul>
                    <li>{data.text}</li>
                </ul>
            </Container>
        </div>
    );
};

export default ProjectCoordinationAndManagement;
