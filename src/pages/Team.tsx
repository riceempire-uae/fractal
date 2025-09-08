import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, User, Copy, Eye, TrendingUp, BarChart3, ChevronRight, List } from 'lucide-react';

const TeamContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const PerformanceSection = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  color: white;
  position: relative;
`;

const PerformanceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const PerformanceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const PerformanceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const PerformanceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PerformanceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PerformanceItem = styled.div`
  text-align: center;
`;

const PerformanceLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
`;

const PerformanceValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const TodayPerformance = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const TodayLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
`;

const TodayValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;

const ReferralListSection = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const ReferralListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ReferralListIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5c04a;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const ReferralList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReferralItem = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: left;
  }
`;

const NextLevelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 8px;
  color: #f5c04a;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: scale(1.05);
  }
`;

const UID = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #eef5ff;
`;

const Address = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  font-family: monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #f5c04a;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
  }
`;

const Performance = styled.div`
  text-align: left;
`;

const ReferralPerformanceValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #f5c04a;
  margin-bottom: 0.25rem;
`;

const ReferralPerformanceLabel = styled.div`
  font-size: 0.8rem;
  color: #eef5ff;
  opacity: 0.7;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #eef5ff;
  opacity: 0.6;
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #f5c04a;
`;

const EmptyTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #eef5ff;
  margin: 0 0 0.5rem 0;
`;

const EmptyDescription = styled.p`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
  margin: 0;
`;

const Team: React.FC = () => {
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [selectedReferral, setSelectedReferral] = React.useState<string | null>(null);

  const referrals = [
    {
      uid: '209121',
      address: '0xE86e8...bD93F6',
      personalPerformance: '0',
      teamPerformance: '0'
    },
    {
      uid: '999204',
      address: '0x5a689...759811',
      personalPerformance: '100,000',
      teamPerformance: '350,430'
    },
    {
      uid: '123456',
      address: '0xAbCdE...123456',
      personalPerformance: '250,000',
      teamPerformance: '215,000'
    },
    {
      uid: '789012',
      address: '0x98765...fedcba',
      personalPerformance: '500',
      teamPerformance: '75,000'
    }
  ];

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const handleNextLevel = (referralUid: string) => {
    setSelectedReferral(referralUid);
    setCurrentLevel(prev => prev + 1);
    // Here you would typically fetch the sub-referrals for the selected UID
    console.log(`Navigating to next level for UID: ${referralUid}`);
  };

  const handleBackToLevel = (level: number) => {
    setCurrentLevel(level);
    if (level === 0) {
      setSelectedReferral(null);
    }
  };

  return (
    <TeamContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PerformanceSection>
          <PerformanceHeader>
            <PerformanceIcon>
              <BarChart3 size={24} />
            </PerformanceIcon>
            <PerformanceTitle>Team Overview</PerformanceTitle>
          </PerformanceHeader>
          
          <PerformanceGrid>
            <PerformanceRow>
              <PerformanceItem>
                <PerformanceLabel>Direct Referral</PerformanceLabel>
                <PerformanceValue>5</PerformanceValue>
              </PerformanceItem>
              <PerformanceItem>
                <PerformanceLabel>Team Users</PerformanceLabel>
                <PerformanceValue>516</PerformanceValue>
              </PerformanceItem>
            </PerformanceRow>
            <PerformanceRow>
              <PerformanceItem>
                <PerformanceLabel>Direct Performance</PerformanceLabel>
                <PerformanceValue>18,600</PerformanceValue>
              </PerformanceItem>
              <PerformanceItem>
                <PerformanceLabel>Team Performance</PerformanceLabel>
                <PerformanceValue>840,750</PerformanceValue>
              </PerformanceItem>
            </PerformanceRow>
          </PerformanceGrid>
          <TodayPerformance>
            <TodayLabel>Today's New Performance</TodayLabel>
            <TodayValue>57,550</TodayValue>
          </TodayPerformance>
        </PerformanceSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ReferralListSection>
          <ReferralListTitle>
            <ReferralListIcon>
              <List size={18} />
            </ReferralListIcon>
            Referral list
            {currentLevel > 0 && (
              <span style={{ fontSize: '0.9rem', fontWeight: 'normal', opacity: 0.7, marginLeft: '1rem' }}>
                Level {currentLevel} - UID: {selectedReferral}
              </span>
            )}
          </ReferralListTitle>
          {currentLevel > 0 && (
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={() => handleBackToLevel(currentLevel - 1)}
                style={{
                  background: 'rgba(245, 192, 74, 0.1)',
                  border: '1px solid rgba(245, 192, 74, 0.3)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: '#f5c04a',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ← Back to Level {currentLevel - 1}
              </button>
              <button 
                onClick={() => handleBackToLevel(0)}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  color: '#ef4444',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Reset to Root
              </button>
            </div>
          )}
          <ReferralList>
            {referrals.length > 0 ? (
              referrals.map((referral, index) => (
                <ReferralItem key={index} onClick={() => handleNextLevel(referral.uid)}>
                  <UID>UID: {referral.uid}</UID>
                  <Address>
                    Address: {referral.address}
                  </Address>
                  <Performance>
                    <ReferralPerformanceValue>{referral.personalPerformance}</ReferralPerformanceValue>
                    <ReferralPerformanceLabel>Direct Performance</ReferralPerformanceLabel>
                  </Performance>
                  <Performance>
                    <ReferralPerformanceValue>{referral.teamPerformance}</ReferralPerformanceValue>
                    <ReferralPerformanceLabel>Team Performance</ReferralPerformanceLabel>
                  </Performance>
                  <NextLevelButton>
                    <ChevronRight size={16} />
                  </NextLevelButton>
                </ReferralItem>
              ))
            ) : (
              <EmptyState>
                <EmptyIcon>
                  <Users size={40} />
                </EmptyIcon>
                <EmptyTitle>No Referrals Found</EmptyTitle>
                <EmptyDescription>
                  Your referral list will appear here when you start referring users
                </EmptyDescription>
              </EmptyState>
            )}
          </ReferralList>
        </ReferralListSection>
      </motion.div>
    </TeamContainer>
  );
};

export default Team;
