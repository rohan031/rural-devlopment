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
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: 'white',
            fontWeight: 'bold',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Contrat de travaux
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'white',
            margin: '0.5rem 0 0 0',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}>
            PRISE Phase I
          </p>
        </div>
      </div>

      <Container>
        <ContractList 
          contracts={contracts}
          phase=""
          type=""
        />
      </Container>
    </>
  );
};

export default ContratDeTravauxPhase1; 