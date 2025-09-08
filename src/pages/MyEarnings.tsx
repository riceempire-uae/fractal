import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, DollarSign, Clock, FileText, ChevronRight } from 'lucide-react';

const EarningsContainer = styled.div`
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

const EarningsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const IncomeCard = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
`;

const IncomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;


const IncomeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ViewRecordButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #f5c04a;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
  }
`;

const EarningsSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f5c04a;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EarningsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
  }
`;

const EarningsLabel = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  font-weight: 500;
`;

const EarningsValue = styled.div`
  font-size: 1.1rem;
  color: #f5c04a;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;



interface MyEarningsProps {
  onNavigate?: (page: string) => void;
}

const MyEarnings: React.FC<MyEarningsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'passive' | 'active'>('passive');

  const passiveIncomeData = {
    todayEarnings: '125.50',
    accumulatedEarnings: '2,847.30'
  };

  const activeIncomeData = {
    todayEarnings: '89.75',
    accumulatedEarnings: '1,456.80'
  };

  const miningIncomeData = {
    ftlTodayEarnings: '156.20',
    ftlAccumulatedEarnings: '2,340.50',
    gasTodayEarnings: '89.75',
    gasAccumulatedEarnings: '1,456.80'
  };


  const handleViewRecords = (type: 'passive' | 'active' | 'mining') => {
    if (type === 'passive') {
      onNavigate?.('passive-income-records');
    } else if (type === 'mining') {
      onNavigate?.('mining-income-records');
    } else if (type === 'active') {
      onNavigate?.('active-income-records');
    }
  };

  return (
    <EarningsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>My Earnings</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <EarningsGrid>
            <IncomeCard>
              <IncomeHeader>
                <div>
                  <IncomeTitle>Passive Income</IncomeTitle>
                </div>
                <ViewRecordButton onClick={() => handleViewRecords('passive')}>
                  <FileText size={20} />
                </ViewRecordButton>
              </IncomeHeader>

              <EarningsSection>
                <SectionTitle>
                  <Clock size={20} />
                  Today's Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>Amount</EarningsLabel>
                  <EarningsValue>
                    {passiveIncomeData.todayEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>

              <EarningsSection>
                <SectionTitle>
                  <DollarSign size={20} />
                  Accumulated Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>Total Amount</EarningsLabel>
                  <EarningsValue>
                    {passiveIncomeData.accumulatedEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>
            </IncomeCard>

            <IncomeCard>
              <IncomeHeader>
                <div>
                  <IncomeTitle>Active Income</IncomeTitle>
                </div>
                <ViewRecordButton onClick={() => handleViewRecords('active')}>
                  <FileText size={20} />
                </ViewRecordButton>
              </IncomeHeader>

              <EarningsSection>
                <SectionTitle>
                  <Clock size={20} />
                  Today's Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>Amount</EarningsLabel>
                  <EarningsValue>
                    {activeIncomeData.todayEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>

              <EarningsSection>
                <SectionTitle>
                  <DollarSign size={20} />
                  Accumulated Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>Total Amount</EarningsLabel>
                  <EarningsValue>
                    {activeIncomeData.accumulatedEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>
            </IncomeCard>

            <IncomeCard>
              <IncomeHeader>
                <div>
                  <IncomeTitle>Mining Income</IncomeTitle>
                </div>
                <ViewRecordButton onClick={() => handleViewRecords('mining')}>
                  <FileText size={20} />
                </ViewRecordButton>
              </IncomeHeader>

              <EarningsSection>
                <SectionTitle>
                  <Clock size={20} />
                  Today's Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>FTL</EarningsLabel>
                  <EarningsValue>
                    {miningIncomeData.ftlTodayEarnings}
                  </EarningsValue>
                </EarningsRow>
                <EarningsRow>
                  <EarningsLabel>GAS</EarningsLabel>
                  <EarningsValue>
                    {miningIncomeData.gasTodayEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>

              <EarningsSection>
                <SectionTitle>
                  <DollarSign size={20} />
                  Accumulated Earnings
                </SectionTitle>
                <EarningsRow>
                  <EarningsLabel>FTL</EarningsLabel>
                  <EarningsValue>
                    {miningIncomeData.ftlAccumulatedEarnings}
                  </EarningsValue>
                </EarningsRow>
                <EarningsRow>
                  <EarningsLabel>GAS</EarningsLabel>
                  <EarningsValue>
                    {miningIncomeData.gasAccumulatedEarnings}
                  </EarningsValue>
                </EarningsRow>
              </EarningsSection>
            </IncomeCard>
          </EarningsGrid>
        </motion.div>
      </Content>
    </EarningsContainer>
  );
};

export default MyEarnings;
