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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    align-items: flex-end;
  }
`;

const ModalContent = styled(motion.div)`
  background: #1a2a3a;
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    border-radius: 16px 16px 0 0;
    max-height: 85vh;
    padding: 1.25rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
`;

const ModalTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f5c04a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.2);
  color: #f5c04a;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    border-color: rgba(245, 192, 74, 0.4);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #eef5ff;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  padding: 0.875rem;
  color: #eef5ff;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  min-height: 48px;
  
  &::placeholder {
    color: rgba(238, 245, 255, 0.6);
  }
  
  &:focus {
    border-color: #f5c04a;
    box-shadow: 0 0 0 2px rgba(245, 192, 74, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 1rem;
    min-height: 52px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(245, 192, 74, 0.1);
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    padding-top: 0.5rem;
  }
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  border: none;
  min-height: 48px;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
    color: #0b1a2b;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(245, 192, 74, 0.3);
      
      @media (max-width: 768px) {
        transform: none;
      }
    }
  ` : `
    background: transparent;
    color: #f5c04a;
    border: 1px solid #f5c04a;
    
    &:hover {
      background: #f5c04a;
      color: #0b1a2b;
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    &:active {
      transform: none;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
    min-height: 52px;
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
  
  @media (max-width: 768px) {
    transition: none;
  }
  margin: 2rem auto;
  display: block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
    
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  📰 {t('modal.latestNews')}
                </ModalTitle>
              </ModalHeader>

              <div style={{ padding: '0' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                    🎉 {t('news.newAIFundLaunch')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.5, fontSize: '0.875rem' }}>
                    {t('news.newAIFundDescription')}
                  </p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                    ⚡ {t('news.systemMaintenance')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.5, fontSize: '0.875rem' }}>
                    {t('news.systemMaintenanceDescription')}
                  </p>
                </div>

                <div style={{ marginBottom: '0' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                    🔒 {t('news.securityUpdate')}
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.5, fontSize: '0.875rem' }}>
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
