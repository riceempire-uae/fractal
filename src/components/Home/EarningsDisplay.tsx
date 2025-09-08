import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Activity, 
  FileText, 
  ArrowUpRight,
  DollarSign,
  Clock
} from 'lucide-react';

const EarningsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const EarningsCard = styled.div`
  background: ${({ theme }) => theme.colors.gradient.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
`;

const EarningsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const EarningsTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const EarningsIcon = styled.div<{ $type: 'passive' | 'active' }>`
  width: 40px;
  height: 40px;
  background: ${({ theme, $type }) => 
    $type === 'passive' 
      ? theme.colors.gradient.primary 
      : 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
`;

const ViewDetailsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.card};
  }
`;

const EarningsAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 0.5rem;
`;

const EarningsSubtext = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 1.5rem;
`;

const EarningsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const StatIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const TrendIndicator = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $positive }) => $positive ? '#4ade80' : '#ef4444'};
`;

interface EarningsDisplayProps {
  onNavigate?: (page: string) => void;
}

const EarningsDisplay: React.FC<EarningsDisplayProps> = ({ onNavigate }) => {
  const earnings = [
    {
      type: 'passive' as const,
      title: 'Passive Income',
      amount: '$2,847.32',
      subtext: 'From staking and rewards',
      icon: TrendingUp,
      stats: [
        { icon: DollarSign, value: '100', label: 'Today Payout' },
        { icon: Clock, value: '24h', label: 'Next Payout' },
      ],
    },
    {
      type: 'active' as const,
      title: 'Active Income',
      amount: '$1,523.18',
      subtext: 'From trading and activities',
      icon: Activity,
      stats: [
        { icon: Activity, value: '159.99', label: 'Today Earnings' },
        { icon: Clock, value: '09:00', label: 'Payout Time' },
      ],
    },
  ];

  return (
    <EarningsContainer>
      {earnings.map((earning, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <EarningsCard>
            <EarningsHeader>
              <EarningsTitle>
                <EarningsIcon $type={earning.type}>
                  <earning.icon size={20} />
                </EarningsIcon>
                {earning.title}
              </EarningsTitle>
              <ViewDetailsButton onClick={() => onNavigate?.('passive-income-details')}>
                <FileText size={20} />
              </ViewDetailsButton>
            </EarningsHeader>

            <EarningsAmount>{earning.amount}</EarningsAmount>
            <EarningsSubtext>{earning.subtext}</EarningsSubtext>

            <EarningsStats>
              {earning.stats.map((stat, statIndex) => (
                <StatItem key={statIndex}>
                  <StatIcon>
                    <stat.icon size={16} />
                  </StatIcon>
                  <StatContent>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatContent>
                </StatItem>
              ))}
            </EarningsStats>
          </EarningsCard>
        </motion.div>
      ))}
    </EarningsContainer>
  );
};

export default EarningsDisplay;
