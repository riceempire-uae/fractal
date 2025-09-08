import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Coins, Zap, Calendar, Download, Wrench, TrendingUp, TrendingDown } from 'lucide-react';

const MiningRecordsContainer = styled.div`
  min-height: 100vh;
  background: #0b1a2b;
  color: #eef5ff;
  padding: 0;
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #eef5ff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
`;

const Content = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  margin-bottom: 2rem;
`;

const MainTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.2);
  padding-bottom: 1rem;
`;

const MainTab = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'rgba(245, 192, 74, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.active ? 'rgba(245, 192, 74, 0.3)' : 'rgba(245, 192, 74, 0.1)'};
  border-radius: 12px;
  color: ${props => props.active ? '#f5c04a' : '#eef5ff'};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
    border-color: rgba(245, 192, 74, 0.3);
  }
`;

const SubTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const SubTab = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'rgba(59, 130, 246, 0.1)' : 'rgba(11, 26, 43, 0.6)'};
  border: 1px solid ${props => props.active ? 'rgba(59, 130, 246, 0.3)' : 'rgba(245, 192, 74, 0.2)'};
  border-radius: 8px;
  color: ${props => props.active ? '#3b82f6' : '#eef5ff'};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const RecordsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecordRow = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  transition: all 0.2s ease;
  
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
    text-align: center;
  }
`;

const RecordDate = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RecordType = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  font-weight: 500;
  text-align: left;
`;

const RecordOrderId = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  font-weight: 500;
  text-align: left;
`;

const RecordAmount = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f5c04a;
  text-align: left;
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

interface MiningRecordsProps {
  onNavigate?: (page: string) => void;
}

const MiningRecords: React.FC<MiningRecordsProps> = ({ onNavigate }) => {
  const [activeMainTab, setActiveMainTab] = useState<'ftl' | 'gas'>('ftl');
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'in' | 'out'>('all');

  const ftlInRecords = [
    {
      id: 'FTL001',
      date: '2025-9-01 19:06:40',
      type: 'Mining Reward',
      amount: '+125.50 FTL'
    },
    {
      id: 'FTL002',
      date: '2025-9-02 14:30:15',
      type: 'Mining Reward',
      amount: '+89.25 FTL'
    },
    {
      id: 'FTL003',
      date: '2025-9-03 10:15:30',
      type: 'Mining Reward',
      amount: '+200.75 FTL'
    }
  ];

  const ftlOutRecords = [
    {
      id: 'FTL004',
      date: '2025-9-01 20:15:22',
      type: 'Extraction',
      amount: '-50.00 FTL'
    }
  ];

  const gasInRecords = [
    {
      id: 'GAS001',
      date: '2025-9-01 19:06:40',
      type: 'Mining Reward',
      amount: '+45.30 GAS'
    },
    {
      id: 'GAS002',
      date: '2025-9-02 14:30:15',
      type: 'Mining Reward',
      amount: '+32.15 GAS'
    },
    {
      id: 'GAS003',
      date: '2025-9-03 10:15:30',
      type: 'Mining Reward',
      amount: '+78.90 GAS'
    }
  ];

  const gasOutRecords = [
    {
      id: 'GAS004',
      date: '2025-9-01 20:15:22',
      type: 'Extraction',
      amount: '-25.00 GAS'
    },
    {
      id: 'GAS005',
      date: '2025-9-02 16:45:10',
      type: 'Fee Payment',
      amount: '-5.50 GAS'
    }
  ];

  const getCurrentRecords = () => {
    if (activeMainTab === 'ftl') {
      if (activeSubTab === 'all') {
        return [...ftlInRecords, ...ftlOutRecords];
      }
      return activeSubTab === 'in' ? ftlInRecords : ftlOutRecords;
    } else {
      if (activeSubTab === 'all') {
        return [...gasInRecords, ...gasOutRecords];
      }
      return activeSubTab === 'in' ? gasInRecords : gasOutRecords;
    }
  };

  const currentRecords = getCurrentRecords();

  return (
    <MiningRecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('passive-income-details')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Mining Records</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TabContainer>
            <MainTabs>
              <MainTab
                active={activeMainTab === 'ftl'}
                onClick={() => setActiveMainTab('ftl')}
              >
                <Coins size={20} />
                FTL
              </MainTab>
              <MainTab
                active={activeMainTab === 'gas'}
                onClick={() => setActiveMainTab('gas')}
              >
                <Zap size={20} />
                GAS
              </MainTab>
            </MainTabs>

            <SubTabs>
              <SubTab
                active={activeSubTab === 'all'}
                onClick={() => setActiveSubTab('all')}
              >
                <Calendar size={16} />
                All
              </SubTab>
              <SubTab
                active={activeSubTab === 'in'}
                onClick={() => setActiveSubTab('in')}
              >
                <TrendingUp size={16} />
                IN
              </SubTab>
              <SubTab
                active={activeSubTab === 'out'}
                onClick={() => setActiveSubTab('out')}
              >
                <TrendingDown size={16} />
                OUT
              </SubTab>
            </SubTabs>

            <RecordsList>
              {currentRecords.length > 0 ? (
                currentRecords.map((record) => (
                  <RecordRow key={record.id}>
                    <RecordOrderId>Order ID: {record.id}</RecordOrderId>
                    <RecordDate>
                      <Calendar size={16} />
                      {record.date}
                    </RecordDate>
                    <RecordType>{record.type}</RecordType>
                    <RecordAmount>{record.amount}</RecordAmount>
                  </RecordRow>
                ))
              ) : (
                <EmptyState>
                  <EmptyIcon>
                    <Calendar size={40} />
                  </EmptyIcon>
                  <EmptyTitle>No Records Found</EmptyTitle>
                  <EmptyDescription>
                    Your {activeMainTab.toUpperCase()} {activeSubTab === 'all' ? 'ALL' : activeSubTab.toUpperCase()} records will appear here
                  </EmptyDescription>
                </EmptyState>
              )}
            </RecordsList>
          </TabContainer>
        </motion.div>
      </Content>
    </MiningRecordsContainer>
  );
};

export default MiningRecords;
