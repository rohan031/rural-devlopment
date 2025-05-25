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
		<>
			{/* Blue Header Section with Background Image */}
			<div style={{
				backgroundImage: 'url(/images/cover.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				minHeight: '25vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white',
				width: '100%',
				margin: 0,
				padding: '2rem 0',
				position: 'relative'
			}}>
				{/* Blue overlay to match PRISE reference */}
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.9) 100%)',
					zIndex: 1
				}}></div>
				
				<h1 style={{
					fontSize: '2.5rem',
					color: 'white',
					textAlign: 'center',
					fontWeight: 'bold',
					margin: 0,
					textTransform: 'uppercase',
					letterSpacing: '1px',
					position: 'relative',
					zIndex: 2,
					textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
				}}>
					CONTRATS
				</h1>
			</div>

			<Container>
				<div className={styles.contractsPage}>
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
		</>
	);
};

export default ContractsPage;
