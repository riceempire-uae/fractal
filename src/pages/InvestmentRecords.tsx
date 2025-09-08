import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Layout from '../components/Layout/Layout';

const InvestmentRecordsContainer = styled.div`
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

const CloseButton = styled.button`
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

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  font-weight: 700;
  font-size: 0.875rem;
`;

const SummaryCard = styled.div`
  background: #1a2a3a;
  margin: 1rem;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 1rem;
  align-items: center;
`;

const SummaryItem = styled.div`
  text-align: center;
`;

const SummaryLabel = styled.div`
  font-size: 0.75rem;
  color: #eef5ff;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const SummaryValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  line-height: 1.2;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(245, 192, 74, 0.3);
`;

const InvestmentDetails = styled.div`
  background: #1a2a3a;
  margin: 0 1rem 1rem;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: #eef5ff;
  opacity: 0.8;
`;

const DetailValue = styled.span`
  font-size: 0.875rem;
  color: #eef5ff;
  font-weight: 600;
`;

const StatusBadge = styled.div<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    switch (props.$status) {
      case 'active':
        return 'rgba(34, 197, 94, 0.2)';
      case 'pending':
        return 'rgba(245, 192, 74, 0.2)';
      case 'completed':
        return 'rgba(59, 130, 246, 0.2)';
      case 'ended':
        return 'rgba(156, 163, 175, 0.2)';
      case 'suspended':
        return 'rgba(239, 68, 68, 0.2)';
      default:
        return 'rgba(107, 114, 128, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'active':
        return '#22c55e';
      case 'pending':
        return '#f5c04a';
      case 'completed':
        return '#3b82f6';
      case 'ended':
        return '#9ca3af';
      case 'suspended':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$status) {
      case 'active':
        return 'rgba(34, 197, 94, 0.3)';
      case 'pending':
        return 'rgba(245, 192, 74, 0.3)';
      case 'completed':
        return 'rgba(59, 130, 246, 0.3)';
      case 'ended':
        return 'rgba(156, 163, 175, 0.3)';
      case 'suspended':
        return 'rgba(239, 68, 68, 0.3)';
      default:
        return 'rgba(107, 114, 128, 0.3)';
    }
  }};
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 8px;
  color: #0b1a2b;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 0.5rem;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 192, 74, 0.3);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    &:active {
      transform: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const NoDataSection = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #eef5ff;
  opacity: 0.6;
  font-size: 1rem;
`;



interface InvestmentRecordsProps {
  onNavigate?: (page: string) => void;
}

const InvestmentRecords: React.FC<InvestmentRecordsProps> = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleWithdraw = (orderNumber: string) => {
    console.log(`Withdrawing investment: ${orderNumber}`);
    // Add withdraw logic here
  };

  const handleReinvest = (orderNumber: string) => {
    console.log(`Reinvesting investment: ${orderNumber}`);
    // Add reinvest logic here
  };

  const summaryData = {
    accumulatedInvestment: '5000',
    totalReward: '45000',
    remainingCredit: '32000',
    ranking: 'T9'
  };

  const investmentRecords = [
    {
      orderNumber: 'ORD-2025-0903-001',
      quantity: '5500',
      type: 'USDT',
      time: '2025-09-03 19:05:55',
      cycle: '360 Days',
      maturityDate: '2026-08-28 19:05:55',
      status: 'active'
    },
    {
      orderNumber: 'ORD-2025-0801-002',
      quantity: '3000',
      type: 'USDT',
      time: '2025-08-01 14:30:22',
      cycle: '180 Days',
      maturityDate: '2025-12-28 14:30:22',
      status: 'ended'
    },
    {
      orderNumber: 'ORD-2025-0701-003',
      quantity: '2000',
      type: 'USDT',
      time: '2025-07-01 10:15:30',
      cycle: '90 Days',
      maturityDate: '2025-09-29 10:15:30',
      status: 'suspended'
    }
  ];

  return (
    <InvestmentRecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Investment Records</HeaderTitle>
        </HeaderLeft>
       
       
      </Header>

      <SummaryCard>
        <SummaryGrid>
          <SummaryItem>
            <SummaryLabel>Ranking</SummaryLabel>
            <SummaryValue>{summaryData.ranking}</SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Total Invested</SummaryLabel>
            <SummaryValue>{summaryData.accumulatedInvestment}</SummaryValue>
          </SummaryItem>
        </SummaryGrid>
        <SummaryGrid style={{ marginTop: '1rem' }}>
          <SummaryItem>
            <SummaryLabel>Total Limit</SummaryLabel>
            <SummaryValue>{summaryData.totalReward}</SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Remain Limit</SummaryLabel>
            <SummaryValue>{summaryData.remainingCredit}</SummaryValue>
          </SummaryItem>
        </SummaryGrid>
      </SummaryCard>

      {investmentRecords.map((record, index) => (
        <InvestmentDetails key={index}>
          <DetailRow>
            <DetailLabel>Order Number:</DetailLabel>
            <DetailValue>{record.orderNumber}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Investment Amount:</DetailLabel>
            <DetailValue>{record.quantity}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Payment Method:</DetailLabel>
            <DetailValue>{record.type}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Investment Time:</DetailLabel>
            <DetailValue>{record.time}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Maturity Date:</DetailLabel>
            <DetailValue>{record.maturityDate}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Status:</DetailLabel>
            <StatusBadge $status={record.status}>
              {record.status}
            </StatusBadge>
          </DetailRow>
          {record.status === 'ended' && (
            <DetailRow>
              <DetailLabel></DetailLabel>
              <ButtonContainer>
                <ActionButton onClick={() => handleWithdraw(record.orderNumber)}>
                  Withdraw
                </ActionButton>
                <ActionButton onClick={() => handleReinvest(record.orderNumber)}>
                  Reinvest
                </ActionButton>
              </ButtonContainer>
            </DetailRow>
          )}
        </InvestmentDetails>
      ))}

      <NoDataSection>
        No More Data
      </NoDataSection>
    </InvestmentRecordsContainer>
  );
};

export default InvestmentRecords;
