import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'lucide-react';

const SubBannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SubBannerCard = styled.div`
  background: ${({ theme }) => theme.colors.gradient.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardAction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SubBanner: React.FC = () => {
  const cards = [
    {
      icon: Clock,
      title: 'Quick Start',
      description: 'Get started with staking in just a few clicks. No complex setup required.',
      action: 'Start Now',
      stats: [
        { icon: Clock, value: '2 min' },
        { icon: Users, value: '10K+' },
      ],
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our growing community of DeFi enthusiasts and earn together.',
      action: 'Join Now',
      stats: [
        { icon: Users, value: '50K+' },
        { icon: Clock, value: '24/7' },
      ],
    },
  ];

  return (
    <SubBannerContainer>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <SubBannerCard>
            <CardHeader>
              <CardIcon>
                <card.icon size={24} />
              </CardIcon>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            
            <CardDescription>{card.description}</CardDescription>
            
            <CardFooter>
              <CardAction>
                {card.action}
                <ArrowRight size={16} />
              </CardAction>
              
              <CardStats>
                {card.stats.map((stat, statIndex) => (
                  <StatItem key={statIndex}>
                    <stat.icon size={16} />
                    {stat.value}
                  </StatItem>
                ))}
              </CardStats>
            </CardFooter>
          </SubBannerCard>
        </motion.div>
      ))}
    </SubBannerContainer>
  );
};

export default SubBanner;
