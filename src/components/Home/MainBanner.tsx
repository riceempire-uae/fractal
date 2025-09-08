import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, Award, Wallet } from 'lucide-react';
import { mobile, tablet } from '../../styles/responsive';

const BannerContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gradient.card};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
`;

const BannerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 1rem;
  line-height: 1.2;

  ${mobile`
    font-size: 1.875rem;
  `}

  ${tablet`
    font-size: 2.25rem;
  `}
`;

const BannerSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  ${mobile`
    grid-template-columns: 1fr;
    gap: 1rem;
  `}

  ${tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 0.25rem;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(245, 192, 74, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
`;

const MainBanner: React.FC = () => {
  const stats = [
    {
      icon: User,
      value: 'UID: 12345',
      label: 'User ID',
    },
    {
      icon: Award,
      value: 'Ranking: T9',
      label: 'Current Rank',
    },
    {
      icon: Wallet,
      value: '0x1234...5678',
      label: 'Wallet Address',
    },
  ];

  return (
    <BannerContainer>
      <BackgroundPattern />
      <BannerContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BannerTitle>
            Welcome to Fractal
            <br />
            <span style={{ color: '#f5c04a' }}>Community Platform</span>
          </BannerTitle>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatsContainer>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <StatItem>
                  <StatIcon>
                    <stat.icon size={20} />
                  </StatIcon>
                  <StatContent>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatContent>
                </StatItem>
              </motion.div>
            ))}
          </StatsContainer>
        </motion.div>
      </BannerContent>
    </BannerContainer>
  );
};

export default MainBanner;
