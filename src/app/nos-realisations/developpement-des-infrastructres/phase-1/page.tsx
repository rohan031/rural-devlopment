import React from 'react';
import Container from '@/components/Container/Container';
import AchievementList from '@/components/Achievements/AchievementList';

const Phase1Page = () => {
  const achievements = [
    {
      title: "ETUDE DE LA MICROCENTRALE DE LOVUA",
      description: "Étude approfondie pour l'implémentation de la microcentrale.",
      imageUrl: "/images/phase1/microcentrale.jpg"
    },
    {
      title: "Travaux de lutte antiérosive à Tshikapa",
      description: "Travaux de lutte antiérosive pour la protection des conduites du systèmes d'AEP et voirie de Tshikapa, ville de Mbuji-Mayi est approvisionnée en eau Potable.",
      imageUrl: "/images/phase1/antierosive.jpg"
    },
    {
      title: "Châteaux d'eau à Mbuji-Mayi",
      description: "2 Châteaux d'eau sont construits pour AEP de la REGIDESO à Mbuji-Mayi",
      imageUrl: "/images/phase1/chateaux.jpg"
    },
    {
      title: "Centre Multifonctionnel Genre Kasaï Oriental",
      description: "Construction du Centre Multifonctionnel Genre Kasaï Oriental et équipements de quelques meubles essentiels",
      imageUrl: "/images/phase1/centre-kasai.jpg"
    },
    {
      title: "Centres de santé",
      description: "60 centres de santé construits et/ou réhabilités et équipés avec médicaments essentiels",
      imageUrl: "/images/phase1/sante.jpg"
    },
    {
      title: "Écoles",
      description: "60 écoles sont construites et/ou réhabilitées et équipées",
      imageUrl: "/images/phase1/ecoles.jpg"
    },
    {
      title: "Latrines publiques",
      description: "Construction de 505 latrines publiques sont construites",
      imageUrl: "/images/phase1/latrines.jpg"
    },
    {
      title: "Groupes électrogènes pour Tshikapa",
      description: "Acquisition de six groupes électrogènes pour le système d'AEP de Tshikapa",
      imageUrl: "/images/phase1/generateurs.jpg"
    },
    {
      title: "Systèmes d'AEP",
      description: "60 systèmes d'AEP dont 10 solaires sont réalisés avec espaces á vivres pour 60 centres de 10 000 á 20 000 habitants",
      imageUrl: "/images/phase1/aep.jpg"
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
          PHASE I
        </h1>
      </div>

      <Container>
        <AchievementList 
          phase=""
          achievements={achievements}
        />
      </Container>
    </>
  );
};

export default Phase1Page; 