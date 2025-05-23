import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDesBiensPhase1 = () => {
  const contracts = [
    {
      title: "Fourniture d'équipements agricoles",
      date: "2024-01-15",
      description: "Contrat pour la fourniture d'équipements agricoles modernes pour les communautés rurales.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-1/equipements-agricoles.pdf"
    },
    {
      title: "Matériaux de construction",
      date: "2023-12-01",
      description: "Approvisionnement en matériaux de construction pour les infrastructures rurales.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-1/materiaux-construction.pdf"
    },
    {
      title: "Systèmes d'irrigation",
      date: "2024-02-01",
      description: "Fourniture de systèmes d'irrigation pour l'agriculture durable.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-1/systemes-irrigation.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase I"
        type="Contrat des biens"
      />
    </Container>
  );
};

export default ContratDesBiensPhase1; 