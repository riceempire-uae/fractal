import React from 'react';
import styled from 'styled-components';
import { Home, Users, Wallet } from 'lucide-react';

const NavigatorContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ theme }) => theme.colors.gradient.glass};
  backdrop-filter: blur(20px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.75rem 0;
`;

const NavigatorContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.accent : theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme, $active }) => 
    $active ? theme.fontWeights.semibold : theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  min-width: 80px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.card};
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease;
  }

  ${({ $active, theme }) => $active && `
    background: ${theme.colors.card};
    box-shadow: ${theme.shadows.glow};
  `}
`;

const NavLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: inherit;
`;

interface BottomNavigatorProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'assets', label: 'Assets', icon: Wallet },
  ];

  return (
    <NavigatorContainer>
      <NavigatorContent>
        {navItems.map(({ id, label, icon: Icon }) => (
          <NavItem
            key={id}
            $active={activeTab === id}
            onClick={() => onTabChange(id)}
          >
            <Icon />
            <NavLabel>{label}</NavLabel>
          </NavItem>
        ))}
      </NavigatorContent>
    </NavigatorContainer>
  );
};

export default BottomNavigator;
