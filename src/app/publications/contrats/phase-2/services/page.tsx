import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDesServicesPhase2 = () => {
  const contracts = [
    {
      title: "Formation en gestion",
      date: "2024-02-10",
      description: "Services de formation en gestion d'entreprise agricole.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-2/formation-gestion.pdf"
    },
    {
      title: "Études de marché",
      date: "2024-01-05",
      description: "Services d'études de marché pour les produits agricoles.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-2/etudes-marche.pdf"
    },
    {
      title: "Support technique",
      date: "2024-03-01",
      description: "Services de support technique pour les équipements agricoles.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-2/support-technique.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase II"
        type="Contrat des services"
      />
    </Container>
  );
};

export default ContratDesServicesPhase2; 