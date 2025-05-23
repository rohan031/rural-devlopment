import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDeTravauxPhase2 = () => {
  const contracts = [
    {
      title: "Construction de centres de formation",
      date: "2024-02-20",
      description: "Construction de centres de formation agricole dans les zones rurales.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-2/centres-formation.pdf"
    },
    {
      title: "Installation de systèmes solaires",
      date: "2024-01-10",
      description: "Installation de systèmes d'énergie solaire pour les installations agricoles.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-2/systemes-solaires.pdf"
    },
    {
      title: "Aménagement des terres",
      date: "2023-11-15",
      description: "Travaux d'aménagement des terres pour l'agriculture durable.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-2/amenagement-terres.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase II"
        type="Contrat de travaux"
      />
    </Container>
  );
};

export default ContratDeTravauxPhase2; 