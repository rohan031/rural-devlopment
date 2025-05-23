import React from 'react';
import styles from './ContractList.module.scss';

interface Contract {
  title: string;
  date: string;
  description: string;
  downloadUrl?: string;
  status: 'active' | 'completed' | 'pending';
}

interface ContractListProps {
  contracts: Contract[];
  phase: string;
  type: string;
}

const ContractList: React.FC<ContractListProps> = ({ contracts, phase, type }) => {
  return (
    <div className={styles.contractList}>
      <div className={styles.header}>
        <h1>{type}</h1>
        <p className={styles.phase}>{phase}</p>
      </div>
      
      <div className={styles.contracts}>
        {contracts.map((contract, index) => (
          <div key={index} className={styles.contractCard}>
            <div className={styles.contractInfo}>
              <h3>{contract.title}</h3>
              <p className={styles.date}>{contract.date}</p>
              <p className={styles.description}>{contract.description}</p>
              <div className={styles.status}>
                <span className={`${styles.statusBadge} ${styles[contract.status]}`}>
                  {contract.status}
                </span>
              </div>
            </div>
            {contract.downloadUrl && (
              <a href={contract.downloadUrl} className={styles.downloadButton}>
                Télécharger le contrat
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractList; 