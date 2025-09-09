import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BottomNavigator from './BottomNavigator';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const MainContent = styled.main`
  padding-top: 80px; /* Header height */
  padding-bottom: 100px; /* Bottom navigator height */
  min-height: calc(100vh - 180px);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainContent>
      <BottomNavigator activeTab={activeTab} onTabChange={onTabChange} />
    </LayoutContainer>
  );
};

export default Layout;
