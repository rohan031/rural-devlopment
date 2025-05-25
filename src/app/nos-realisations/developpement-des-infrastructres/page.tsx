import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

interface PhaseCardProps {
  phase: string;
  description: string;
  href: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, description, href }) => (
  <Link href={href} className={styles.phaseCard}>
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
      href: '/nos-realisations/developpement-des-infrastructres/phase-1'
    },
    {
      phase: 'Phase II',
      description: 'Deuxième phase axée sur la réhabilitation et la construction d\'infrastructures dans diverses régions, y compris Luekeshi, Kalambambuji et DIFUMA II.',
      href: '/nos-realisations/developpement-des-infrastructres/phase-2'
    }
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
        {/* Stronger blue overlay to match PRISE reference */}
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
          Développement des infrastructures
        </h1>
      </div>
      
      {/* Cards Section */}
      <div style={{
        padding: '4rem 2rem',
        background: '#f8f9fa',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {phases.map((phase, index) => (
            <PhaseCard key={index} {...phase} />
          ))}
        </div>
      </div>
    </>
  );
} 