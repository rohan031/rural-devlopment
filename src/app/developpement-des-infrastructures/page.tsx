import React from 'react';
import styles from './page.module.scss';
import Container from '@/components/Container/Container';
import Link from 'next/link';

interface PhaseCardProps {
  phase: string;
  description: string;
  imageUrl: string;
  href: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, description, imageUrl, href }) => (
  <Link href={href} className={styles.phaseCard}>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt={phase} />
    </div>
    <div className={styles.content}>
      <h2>{phase}</h2>
      <p>{description}</p>
      <span className={styles.viewMore}>Voir les réalisations →</span>
    </div>
  </Link>
);

export default function InfrastructureDevelopment() {
  const phases = [
    {
      phase: 'Phase I',
      description: 'Première phase du développement des infrastructures comprenant la construction des systèmes d\'eau, des écoles, des centres de santé et plus encore.',
      imageUrl: '/images/phase1/cover.jpg',
      href: '/developpement-des-infrastructures/phase-1'
    },
    {
      phase: 'Phase II',
      description: 'Deuxième phase axée sur la réhabilitation et la construction d\'infrastructures dans diverses régions, y compris Luekeshi, Kalambambuji et DIFUMA II.',
      imageUrl: '/images/phase2/cover.jpg',
      href: '/developpement-des-infrastructures/phase-2'
    }
  ];

  return (
    <Container>
      <div className={styles.infrastructurePage}>
        <h1>Développement des infrastructures</h1>
        <div className={styles.phasesGrid}>
          {phases.map((phase, index) => (
            <PhaseCard key={index} {...phase} />
          ))}
        </div>
      </div>
    </Container>
  );
} 