import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Link, 
  ArrowLeftRight, 
  ChevronRight,
  Megaphone
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ShortcutsContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
`;

const ShortcutsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ShortcutsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0;
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ShortcutsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ShortcutItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 80px;

  &:hover {
    background: ${({ theme }) => theme.colors.cardHover};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    
    @media (max-width: 768px) {
      transform: none;
    }
  }

  &:active {
    transform: translateY(0);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const ShortcutIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  flex-shrink: 0;
`;

const ShortcutContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ShortcutTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 0.25rem;
`;

const ShortcutDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.4;
`;

const ShortcutArrow = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  transition: all 0.2s ease;
  
  ${ShortcutItem}:hover & {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
  }
`;

interface ShortcutsMenuProps {
  onNavigate?: (page: string) => void;
}

const ShortcutsMenu: React.FC<ShortcutsMenuProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  const shortcuts = [
    {
      icon: DollarSign,
      title: t('shortcuts.myEarnings'),
      description: t('shortcuts.myEarningsDesc'),
      action: () => onNavigate?.('earnings'),
    },
    {
      icon: Link,
      title: t('shortcuts.invitationLink'),
      description: t('shortcuts.invitationLinkDesc'),
      action: () => onNavigate?.('invitation-link'),
    },
    {
      icon: ArrowLeftRight,
      title: t('shortcuts.ftlSwap'),
      description: t('shortcuts.ftlSwapDesc'),
      action: () => onNavigate?.('ftl-swap'),
    },
    {
      icon: Megaphone,
      title: t('shortcuts.announcement'),
      description: t('shortcuts.announcementDesc'),
      action: () => onNavigate?.('announcement'),
    },
  ];

  return (
    <ShortcutsContainer>
      <ShortcutsHeader>
        <ShortcutsTitle>{t('shortcuts.quickActions')}</ShortcutsTitle>
        <ViewAllButton>
          {t('shortcuts.viewAll')}
          <ChevronRight size={16} />
        </ViewAllButton>
      </ShortcutsHeader>
      
      <ShortcutsGrid>
        {shortcuts.map((shortcut, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ShortcutItem onClick={shortcut.action}>
              <ShortcutIcon>
                <shortcut.icon size={24} />
              </ShortcutIcon>
              
              <ShortcutContent>
                <ShortcutTitle>{shortcut.title}</ShortcutTitle>
                <ShortcutDescription>{shortcut.description}</ShortcutDescription>
              </ShortcutContent>
              
              <ShortcutArrow>
                <ChevronRight size={20} />
              </ShortcutArrow>
            </ShortcutItem>
          </motion.div>
        ))}
      </ShortcutsGrid>
    </ShortcutsContainer>
  );
};

export default ShortcutsMenu;
