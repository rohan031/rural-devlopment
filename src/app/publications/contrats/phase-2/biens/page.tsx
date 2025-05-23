import React from 'react';
import Container from '@/components/Container/Container';
import ContractList from '@/components/Contracts/ContractList';

const ContratDesBiensPhase2 = () => {
  const contracts = [
    {
      title: "Équipements de transformation",
      date: "2024-02-01",
      description: "Fourniture d'équipements de transformation des produits agricoles.",
      status: "active" as const,
      downloadUrl: "/contracts/phase-2/equipements-transformation.pdf"
    },
    {
      title: "Véhicules de transport",
      date: "2024-01-15",
      description: "Acquisition de véhicules pour le transport des produits agricoles.",
      status: "pending" as const,
      downloadUrl: "/contracts/phase-2/vehicules-transport.pdf"
    },
    {
      title: "Matériel informatique",
      date: "2023-12-15",
      description: "Fourniture de matériel informatique pour la gestion des projets.",
      status: "completed" as const,
      downloadUrl: "/contracts/phase-2/materiel-informatique.pdf"
    }
  ];

  return (
    <Container>
      <ContractList 
        contracts={contracts}
        phase="PRISE Phase II"
        type="Contrat des biens"
      />
    </Container>
  );
};

export default ContratDesBiensPhase2; 