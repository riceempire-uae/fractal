import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Database, 
  Coins, 
  Zap, 
  TrendingUp, 
  Activity,
  Shield,
  BarChart3
} from 'lucide-react';

const DAOMiningContainer = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
`;

const DAOMiningHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const DAOMiningIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  margin: 0 auto 1rem;
  box-shadow: 0 8px 20px rgba(245, 192, 74, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`;

const DAOMiningTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #f5c04a;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const DAOMiningGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const DataSection = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f5c04a, #d4a843);
  }
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const DataLabel = styled.span`
  font-size: 0.875rem;
  color: #eef5ff;
  opacity: 0.8;
  font-weight: 500;
`;

const DataValue = styled.span`
  font-size: 0.875rem;
  color: #f5c04a;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: -30%;
  right: -20%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(245, 192, 74, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
`;

const DAOMiningData: React.FC = () => {
  const miningPoolData = [
    { label: 'Total Mining Pool', value: '40,000,000 FTL' },
    { label: 'Pool Remaining', value: '39,250,000 FTL' },
    { label: 'Total Mined', value: '1,250,000 FTL' },
    { label: 'Total Destroyed', value: '250,000 FTL' },
    { label: 'Circulating Supply', value: '1,000,000 FTL' },
  ];

  const todayData = [
    { label: "Today's Hash Power", value: '5,250 H/day' },
    { label: "Today's Emission", value: '10,000 FTL' },
    { label: "Today's Distribution", value: '6,000 FTL' },
    { label: "Today's Destroy", value: '4,000 FTL' },
  ];

  return (
    <DAOMiningContainer>
      <BackgroundPattern />
      <DAOMiningHeader>
        <DAOMiningIcon>
          <Database size={24} />
        </DAOMiningIcon>
        <DAOMiningTitle>DAO Mining Data</DAOMiningTitle>
      </DAOMiningHeader>
      
      <DAOMiningGrid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <DataSection>
            <SectionTitle>
              <Coins size={20} />
              Mining Pool Stats
            </SectionTitle>
            {miningPoolData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <DataRow>
                  <DataLabel>{item.label}</DataLabel>
                  <DataValue>{item.value}</DataValue>
                </DataRow>
              </motion.div>
            ))}
          </DataSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <DataSection>
            <SectionTitle>
              <Activity size={20} />
              Today's Activity
            </SectionTitle>
            {todayData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <DataRow>
                  <DataLabel>{item.label}</DataLabel>
                  <DataValue>{item.value}</DataValue>
                </DataRow>
              </motion.div>
            ))}
          </DataSection>
        </motion.div>
      </DAOMiningGrid>
    </DAOMiningContainer>
  );
};

export default DAOMiningData;
