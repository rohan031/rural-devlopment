import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDeTravauxPhase1 = () => {
  const contracts = [
    {
      title: "Construction de systèmes d'irrigation",
      date: "2024-02-15",
      description: "Travaux de construction des systèmes d'irrigation pour les zones agricoles.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-1/construction-irrigation.pdf"
    },
    {
      title: "Réhabilitation des routes rurales",
      date: "2023-10-01",
      description: "Travaux de réhabilitation des routes d'accès aux zones agricoles.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-1/rehabilitation-routes.pdf"
    },
    {
      title: "Construction d'entrepôts",
      date: "2024-03-15",
      description: "Construction d'entrepôts de stockage pour les produits agricoles.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-1/construction-entrepots.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase I"
        type="Contrat de travaux"
      />
    </Container>
  );
};

export default ContratDeTravauxPhase1; 