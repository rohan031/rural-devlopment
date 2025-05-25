import React from 'react';
import styles from './page.module.scss';
import Container from '@/components/Container/Container';

interface OpportunityType {
  title: string;
  href: string;
}

interface PhaseSection {
  phase: string;
  opportunities: OpportunityType[];
}

const OpportunitiesPage = () => {
  const opportunitySections: PhaseSection[] = [
    {
      phase: 'PRISE Phase I',
      opportunities: [
        { title: 'Appels d\'offres', href: '/opportunites/phase-1/appels-d-offres' },
        { title: 'Avis appel candidature', href: '/opportunites/phase-1/avis-appel-candidature' },
        { title: 'Appel à manifestation d\'intérêt', href: '/opportunites/phase-1/appel-a-manifestation-d-interet' },
      ],
    },
    {
      phase: 'PRISE Phase II',
      opportunities: [
        { title: 'Appels d\'offres', href: '/opportunites/phase-2/appels-d-offres' },
        { title: 'Avis appel candidature', href: '/opportunites/phase-2/avis-appel-candidature' },
        { title: 'Appel à manifestation d\'intérêt', href: '/opportunites/phase-2/appel-a-manifestation-d-interet' },
      ],
    },
  ];

  return (
    <Container>
      <div className={styles.opportunitiesPage}>
        <h1>Opportunités</h1>
        <div className={styles.phaseSections}>
          {opportunitySections.map((section, index) => (
            <div key={index} className={styles.phaseSection}>
              <h2>{section.phase}</h2>
              <div className={styles.opportunityGrid}>
                {section.opportunities.map((opportunity, idx) => (
                  <a key={idx} href={opportunity.href} className={styles.opportunityCard}>
                    <h3>{opportunity.title}</h3>
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

export default OpportunitiesPage; 