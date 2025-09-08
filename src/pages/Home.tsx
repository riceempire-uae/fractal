import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link } from 'lucide-react';
import MainBanner from '../components/Home/MainBanner';
import ShortcutsMenu from '../components/Home/ShortcutsMenu';
import { useLanguage } from '../contexts/LanguageContext';
import AIFund from '../components/Home/AIFund';
import DAOMiningData from '../components/Home/DAOMiningData';
import EarningsDisplay from '../components/Home/EarningsDisplay';
import PriceChart from '../components/Home/PriceChart';

const HomeContainer = styled.div`
  padding: 2rem 0;
`;

const ContentGrid = styled.div`
  display: grid !important;
  grid-template-columns: 400px 1fr !important;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 350px 1fr !important;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  min-height: 350px;
  border: 2px solid rgba(245, 192, 74, 0.3);
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(245, 192, 74, 0.2);
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #f5c04a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CloseButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 2px solid rgba(245, 192, 74, 0.3);
  color: #f5c04a;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    border-color: rgba(245, 192, 74, 0.5);
    transform: scale(1.05);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 700;
  color: #eef5ff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(11, 26, 43, 0.9);
  border: 2px solid rgba(245, 192, 74, 0.3);
  border-radius: 12px;
  padding: 1rem;
  color: #eef5ff;
  font-size: 1.1rem;
  font-weight: 600;
  outline: none;
  transition: all 0.3s ease;
  min-height: 56px;
  
  &::placeholder {
    color: rgba(238, 245, 255, 0.6);
    font-weight: 500;
  }
  
  &:focus {
    border-color: #f5c04a;
    box-shadow: 0 0 0 4px rgba(245, 192, 74, 0.2);
    background: rgba(11, 26, 43, 1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(245, 192, 74, 0.2);
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-height: 60px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
    color: #0b1a2b;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(245, 192, 74, 0.5);
    }
  ` : `
    background: transparent;
    color: #f5c04a;
    border: 2px solid #f5c04a;
    
    &:hover {
      background: #f5c04a;
      color: #0b1a2b;
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(245, 192, 74, 0.3);
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const TriggerButton = styled.button`
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 12px;
  color: #0b1a2b;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 2rem auto;
  display: block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const { t } = useLanguage();
  const [address, setAddress] = useState('0x5a689f6d108ae6aa585A5fF93873d98703759811');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      setAddress('');
      // In a real app, you would handle the registration here
      console.log('Address registered:', address);
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAddress('');
  };

  return (
    <HomeContainer>
      <MainBanner />
      <ShortcutsMenu onNavigate={onNavigate} />
      
      <ContentGrid>
        <LeftColumn>
          <AIFund onNavigate={onNavigate} />
        </LeftColumn>
        <RightColumn>
          <EarningsDisplay onNavigate={onNavigate} />
          <PriceChart />
          <DAOMiningData />
        </RightColumn>
      </ContentGrid>

      <TriggerButton onClick={() => setIsModalOpen(true)}>
        {t('button.bindingRegistration')}
      </TriggerButton>

      <TriggerButton onClick={() => setIsNewsModalOpen(true)}>
        {t('button.newsPopup')}
      </TriggerButton>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  <Link size={24} />
                  {t('modal.bindingRegistration')}
                </ModalTitle>
              </ModalHeader>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label htmlFor="address">{t('form.referralAddress')}</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder={t('form.enterReferralAddress')}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </InputGroup>

                <ButtonGroup>
                  <Button type="button" $variant="secondary" onClick={handleCloseModal}>
                    {t('button.cancel')}
                  </Button>
                  <Button type="submit" $variant="primary" disabled={isLoading || !address.trim()}>
                    {isLoading ? t('form.registering') : t('form.register')}
                  </Button>
                </ButtonGroup>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}

        {isNewsModalOpen && (
          <ModalOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNewsModalOpen(false)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  📰 {t('modal.latestNews')}
                </ModalTitle>
              </ModalHeader>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    🎉 {t('news.newAIFundLaunch')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    {t('news.newAIFundDescription')}
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    ⚡ {t('news.systemMaintenance')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    {t('news.systemMaintenanceDescription')}
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    🔒 {t('news.securityUpdate')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    {t('news.securityUpdateDescription')}
                  </p>
                </div>
              </div>

              <ButtonGroup>
                <Button type="button" $variant="primary" onClick={() => setIsNewsModalOpen(false)}>
                  {t('button.close')}
                </Button>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </HomeContainer>
  );
};

export default Home;
