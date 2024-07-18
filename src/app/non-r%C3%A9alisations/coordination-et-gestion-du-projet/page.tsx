import React from "react";
import Hero from "./../../../components/Hero/page";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { projectCoordinationAndManagement } from "@/data/hero";
const ProjectCoordinationAndManagement = () => {
    return (
        <div>
            <Hero heading={projectCoordinationAndManagement} />
            <Container className={styles.list}>
                <ul>
                    <li>
                        Élaboration des rapports d&#700;avancement, d&#700;audit
                        et de finances ;
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default ProjectCoordinationAndManagement;
