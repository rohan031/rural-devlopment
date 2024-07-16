import React from "react";
import styles from "./navigation.module.scss";
import NavMain from "./NavMain";

const NavUpper = () => {
	return (
		<div className={`${styles.navUpper} container`}>
			<div>
				<img src="/logo.webp" alt="logo" />
			</div>
			<div>
				<img src="/project.webp" alt="project" />
			</div>
			<div>
				<img src="/bank.webp" alt="bank" />
			</div>
			<div className={styles.donate}>
				<a href="/">faites un don aujourd'hui</a>
			</div>
		</div>
	);
};

const Navigation = () => {
	return (
		<>
			<NavUpper />
			<NavMain />
		</>
	);
};

export default Navigation;
