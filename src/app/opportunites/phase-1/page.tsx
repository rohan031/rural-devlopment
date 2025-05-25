import React from 'react';
import styles from './page.module.scss';
import Container from '@/components/Container/Container';

interface OpportunityType {
  title: string;
  href: string;
}

const OpportunitiesPhase1Page = () => {
  const opportunities: OpportunityType[] = [
    { title: 'Appels d\'offres', href: '/opportunites/phase-1/appels-d-offres' },
    { title: 'Avis appel candidature', href: '/opportunites/phase-1/avis-appel-candidature' },
    { title: 'Appel à manifestation d\'intérêt', href: '/opportunites/phase-1/appel-a-manifestation-d-interet' },
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
          PRISE Phase I - Opportunités
        </h1>
      </div>

      <Container>
        <div className={styles.opportunitiesPage}>
          <div className={styles.opportunityGrid}>
            {opportunities.map((opportunity, index) => (
              <a key={index} href={opportunity.href} className={styles.opportunityCard}>
                <h3>{opportunity.title}</h3>
                <span className={styles.viewMore}>Voir plus →</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OpportunitiesPhase1Page; 