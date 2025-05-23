import React from 'react';
import styles from './AchievementList.module.scss';

interface Achievement {
  title: string;
  description: string;
  imageUrl?: string;
}

interface AchievementListProps {
  phase: string;
  achievements: Achievement[];
}

const AchievementList: React.FC<AchievementListProps> = ({ phase, achievements }) => {
  return (
    <div className={styles.achievementList}>
      <h1>{phase}</h1>
      <div className={styles.achievements}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
            {achievement.imageUrl && (
              <div className={styles.imageContainer}>
                <img src={achievement.imageUrl} alt={achievement.title} />
              </div>
            )}
            <div className={styles.content}>
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementList; 