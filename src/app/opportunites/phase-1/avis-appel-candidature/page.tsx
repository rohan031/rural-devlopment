import React from 'react';
import Container from '@/components/Container/Container';
import styles from './page.module.scss';

const AvisAppelCandidaturePhase1 = () => {
  const opportunities = [
    {
      title: "Avis d'appel à candidature - Consultant en développement rural",
      date: "2024-01-20",
      description: "Avis d'appel à candidature pour le recrutement d'un consultant en développement rural pour la Phase I.",
      status: "Ouvert",
      deadline: "2024-03-20"
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
          Avis appel candidature - PRISE Phase I
        </h1>
      </div>

      <Container>
        <div className={styles.opportunityPage}>
          <div className={styles.opportunities}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles.opportunityCard}>
                <h2>{opportunity.title}</h2>
                <p className={styles.date}>Publié le: {opportunity.date}</p>
                <p className={styles.description}>{opportunity.description}</p>
                <div className={styles.details}>
                  <span className={`${styles.status} ${styles[opportunity.status.toLowerCase()]}`}>
                    {opportunity.status}
                  </span>
                  <span className={styles.deadline}>Date limite: {opportunity.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default AvisAppelCandidaturePhase1; 