import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link } from 'lucide-react';
import MainBanner from '../components/Home/MainBanner';
import ShortcutsMenu from '../components/Home/ShortcutsMenu';
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #eef5ff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
    color: #f5c04a;
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
  font-size: 0.9rem;
  font-weight: 600;
  color: #eef5ff;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: #eef5ff;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #eef5ff;
    opacity: 0.5;
  }
  
  &:focus {
    border-color: rgba(245, 192, 74, 0.6);
    box-shadow: 0 0 0 3px rgba(245, 192, 74, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
    color: #0b1a2b;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
    }
  ` : `
    background: rgba(11, 26, 43, 0.8);
    color: #eef5ff;
    border: 2px solid rgba(245, 192, 74, 0.2);
    
    &:hover {
      background: rgba(11, 26, 43, 1);
      border-color: rgba(245, 192, 74, 0.4);
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
        Binding Registration
      </TriggerButton>

      <TriggerButton onClick={() => setIsNewsModalOpen(true)}>
        News Popup
      </TriggerButton>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  <Link size={24} />
                  Binding Registration
                </ModalTitle>
                <CloseButton onClick={handleCloseModal}>
                  <X size={24} />
                </CloseButton>
              </ModalHeader>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label htmlFor="address">Referral Address</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your referral address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </InputGroup>

                <ButtonGroup>
                  <Button type="button" $variant="secondary" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                  <Button type="submit" $variant="primary" disabled={isLoading || !address.trim()}>
                    {isLoading ? 'Registering...' : 'Register'}
                  </Button>
                </ButtonGroup>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}

        {isNewsModalOpen && (
          <ModalOverlay onClick={() => setIsNewsModalOpen(false)}>
            <ModalContent
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  📰 Latest News
                </ModalTitle>
                <CloseButton onClick={() => setIsNewsModalOpen(false)}>
                  <X size={24} />
                </CloseButton>
              </ModalHeader>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    🎉 New AI Fund Launch
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    We are excited to announce the launch of our revolutionary 360° AI Fund! 
                    This new investment opportunity offers enhanced staking rewards with up to 25% APY.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    ⚡ System Maintenance
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    Scheduled maintenance will be performed on our trading system on January 20th, 2025 
                    from 02:00 to 04:00 UTC.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#eef5ff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    🔒 Security Update
                  </h3>
                  <p style={{ color: '#eef5ff', opacity: 0.8, lineHeight: 1.6 }}>
                    We have implemented additional security measures to protect your assets. 
                    Please ensure your account is secured with two-factor authentication.
                  </p>
                </div>
              </div>

              <ButtonGroup>
                <Button type="button" $variant="primary" onClick={() => setIsNewsModalOpen(false)}>
                  Close
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
