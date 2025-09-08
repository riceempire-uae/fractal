import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Layout from '../components/Layout/Layout';
import Home from './Home';
import Team from './Team';
import Assets from './Assets';
import InvestmentRecords from './InvestmentRecords';
import InvitationLink from './InvitationLink';
import FTLSwap from './FTLSwap';
import SecurePassword from './SecurePassword';
import MyEarnings from './MyEarnings';
import PassiveIncomeRecords from './PassiveIncomeRecords';
import MiningIncomeRecords from './MiningIncomeRecords';
import ActiveIncomeRecords from './ActiveIncomeRecords';
import PassiveIncomeDetails from './PassiveIncomeDetails';
import MiningRecords from './MiningRecords';
import USDTRecords from './USDTRecords';
import USDTPassiveRecords from './USDTPassiveRecords';
import Announcement from './Announcement';
import AnnouncementDetail from './AnnouncementDetail';
import Loading from './Loading';
import ExportButtonComponent from '../components/ExportButton';
import { Toaster } from 'react-hot-toast';
import StyledComponentsRegistry from '../lib/registry';
import '../styles/globals.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'team':
        return <Team />;
      case 'assets':
        return <Assets onNavigate={setActiveTab} />;
      case 'investment-records':
        return <InvestmentRecords onNavigate={setActiveTab} />;
      case 'invitation-link':
        return <InvitationLink onNavigate={setActiveTab} />;
      case 'ftl-swap':
        return <FTLSwap onNavigate={setActiveTab} />;
      case 'security':
        return <SecurePassword onNavigate={setActiveTab} />;
      case 'earnings':
        return <MyEarnings onNavigate={setActiveTab} />;
      case 'passive-income-records':
        return <PassiveIncomeRecords onNavigate={setActiveTab} />;
      case 'mining-income-records':
        return <MiningIncomeRecords onNavigate={setActiveTab} />;
      case 'active-income-records':
        return <ActiveIncomeRecords onNavigate={setActiveTab} />;
      case 'passive-income-details':
        return <PassiveIncomeDetails onNavigate={setActiveTab} />;
      case 'mining-records':
        return <MiningRecords onNavigate={setActiveTab} />;
      case 'usdt-records':
        return <USDTRecords onNavigate={setActiveTab} />;
      case 'usdt-passive-records':
        return <USDTPassiveRecords onNavigate={setActiveTab} />;
      case 'announcement':
        return <Announcement onNavigate={setActiveTab} />;
      case 'announcement-detail':
        return <AnnouncementDetail onNavigate={setActiveTab} />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <Loading onComplete={handleLoadingComplete} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    );
  }

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Layout activeTab={activeTab} onTabChange={setActiveTab}>
          {renderPage()}
        </Layout>
        <ExportButtonComponent />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a2a3a',
              color: '#eef5ff',
              border: '1px solid #3a4a5a',
            },
          }}
        />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default App;
