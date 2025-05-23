import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDesServicesPhase1 = () => {
  const contracts = [
    {
      title: "Formation agricole",
      date: "2024-01-20",
      description: "Services de formation pour les agriculteurs sur les techniques modernes d'agriculture.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-1/formation-agricole.pdf"
    },
    {
      title: "Consultation technique",
      date: "2023-11-15",
      description: "Services de consultation technique pour l'optimisation des pratiques agricoles.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-1/consultation-technique.pdf"
    },
    {
      title: "Études environnementales",
      date: "2024-03-01",
      description: "Services d'évaluation de l'impact environnemental des projets agricoles.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-1/etudes-environnementales.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase I"
        type="Contrat des services"
      />
    </Container>
  );
};

export default ContratDesServicesPhase1; 