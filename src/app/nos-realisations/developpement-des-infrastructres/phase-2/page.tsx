import React from 'react';
import Container from '@/components/Container/Container';
import AchievementList from '@/components/Achievements/AchievementList';

const Phase2Page = () => {
  const achievements = [
    {
      title: "Réhabilitations dans la cité de Luekeshi",
      description: "Réhabilitations de l'EP BENA NGANZA, construction du centres de santé de LUEKESHI, aménagement des 2 Latrines publiques à l'EP MBINGA à Luekeshi ainsi que la construction du marché de LUEKESHI et la fourniture des mobiliers scolaires à l'EP Bena Nganza dans la cité de Luekeshi, territoire de Dibaya",
      imageUrl: "/images/phase2/luekeshi.jpg"
    },
    {
      title: "Développement à Kalambambuji",
      description: "Réhabilitations de l'EP WITU, construction du centres de santé de KALAMBA MBUJI, et aménagement des 02 latrines publique de l'EP MUKUANDANGA ainsi que la construction du marché de Kalambambuji et la fourniture des mobiliers scolaires à l'EP Witu dans le site de Kalambambuji, territoire de Luiza",
      imageUrl: "/images/phase2/kalambambuji.jpg"
    },
    {
      title: "Infrastructures à DIFUMA II",
      description: "Réhabilitations d'un bâtiment Scolaires, un centres de santé, et aménagement des 04 latrines publiques ainsi que la construction des places à vivre (Marches) et la fourniture des mobiliers scolaires dans la province de Maniema au cité de DIFUMA II",
      imageUrl: "/images/phase2/difuma.jpg"
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
          PHASE II
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

export default Phase2Page; 