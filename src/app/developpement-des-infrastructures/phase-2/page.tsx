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
    <Container>
      <AchievementList 
        phase="PHASE II"
        achievements={achievements}
      />
    </Container>
  );
};

export default Phase2Page; 