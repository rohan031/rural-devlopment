import React from 'react';
import styles from './page.module.scss';
import Container from '@/components/Container/Container';

interface ContractType {
	title: string;
	href: string;
}

interface PhaseSection {
	phase: string;
	contracts: ContractType[];
}

const ContractsPage = () => {
	const contractSections: PhaseSection[] = [
		{
			phase: 'PRISE Phase I',
			contracts: [
				{ title: 'Contrat des biens', href: '/publications/contrats/phase-1/biens' },
				{ title: 'Contrat des services', href: '/publications/contrats/phase-1/services' },
				{ title: 'Contrat de travaux', href: '/publications/contrats/phase-1/travaux' },
			],
		},
		{
			phase: 'PRISE Phase II',
			contracts: [
				{ title: 'Contrat des biens', href: '/publications/contrats/phase-2/biens' },
				{ title: 'Contrat des services', href: '/publications/contrats/phase-2/services' },
				{ title: 'Contrat de travaux', href: '/publications/contrats/phase-2/travaux' },
			],
		},
	];

	return (
		<Container>
			<div className={styles.contractsPage}>
				<h1>Contrats</h1>
				<div className={styles.phaseSections}>
					{contractSections.map((section, index) => (
						<div key={index} className={styles.phaseSection}>
							<h2>{section.phase}</h2>
							<div className={styles.contractGrid}>
								{section.contracts.map((contract, idx) => (
									<a key={idx} href={contract.href} className={styles.contractCard}>
										<h3>{contract.title}</h3>
										<span className={styles.viewMore}>Voir plus →</span>
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ContractsPage;
