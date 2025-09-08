import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  TrendingUp, 
  Lock, 
  Play, 
  History,
  X,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AIFundContainer = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 0;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const AIFundHeader = styled.div`
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const AIFundIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(11, 26, 43, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5c04a;
  margin: 0 auto 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`;

const AIFundTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #0b1a2b;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AIFundStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 1.5rem;
  gap: 1rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem 0.75rem;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(245, 192, 74, 0.2);
    background: rgba(245, 192, 74, 0.15);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f5c04a, #d4a843);
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #f5c04a;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #eef5ff;
  font-weight: 600;
  opacity: 0.8;
`;

const AIFundActions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 2rem;
`;

const PrimaryButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 12px;
  color: #0b1a2b;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(245, 192, 74, 0.3);

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

const SecondaryButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  background: transparent;
  border: 2px solid #f5c04a;
  border-radius: 12px;
  color: #f5c04a;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #f5c04a;
    color: #0b1a2b;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.3);
    
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

const BackgroundPattern = styled.div`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(245, 192, 74, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
`;

// Modal Styles
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
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  border: 1px solid rgba(245, 192, 74, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
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
  justify-content: space-between;
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
  flex: 1;
  min-width: 0;
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

const ModalBody = styled.div`
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  margin-bottom: 0.75rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #eef5ff;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  min-height: 48px;
  
  &:focus {
    outline: none;
    border-color: #f5c04a;
    box-shadow: 0 0 0 2px rgba(245, 192, 74, 0.1);
  }
  
  &::placeholder {
    color: rgba(238, 245, 255, 0.6);
  }
  
  @media (max-width: 768px) {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 1rem;
    min-height: 52px;
  }
`;

const InfoText = styled.div`
  font-size: 0.75rem;
  color: #f5c04a;
  margin-top: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const BalanceText = styled.div`
  font-size: 0.75rem;
  color: #eef5ff;
  margin-top: 0.5rem;
  text-align: left;
  opacity: 0.8;
`;

const BalanceContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

const BalanceItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 0.75rem 0.5rem;
  background: rgba(11, 26, 43, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const BalanceLabel = styled.div`
  font-size: 0.75rem;
  color: #eef5ff;
  opacity: 0.8;
  margin-bottom: 0.25rem;
`;

const BalanceValue = styled.div`
  font-size: 0.875rem;
  color: #f5c04a;
  font-weight: 700;
`;

const PaymentCalculation = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(245, 192, 74, 0.2);
`;

const CalculationTitle = styled.div`
  font-size: 0.75rem;
  color: #eef5ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CalculationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CalculationLabel = styled.span`
  font-size: 0.75rem;
  color: #eef5ff;
  opacity: 0.8;
`;

const CalculationAmount = styled.span`
  font-size: 0.75rem;
  color: #f5c04a;
  font-weight: 600;
`;

const PaymentMethodGroup = styled.div`
  margin-top: 0.75rem;
`;

const PaymentMethodLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.75rem;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioOption = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem;
  background: ${props => props.$disabled ? 'rgba(11, 26, 43, 0.3)' : 'rgba(11, 26, 43, 0.4)'};
  border: 1px solid ${props => props.$disabled ? 'rgba(128, 128, 128, 0.3)' : 'rgba(245, 192, 74, 0.2)'};
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  opacity: ${props => props.$disabled ? 0.5 : 1};
  min-height: 52px;
  
  &:hover {
    background: ${props => props.$disabled ? 'rgba(11, 26, 43, 0.3)' : 'rgba(11, 26, 43, 0.6)'};
    border-color: ${props => props.$disabled ? 'rgba(128, 128, 128, 0.3)' : 'rgba(245, 192, 74, 0.4)'};
  }
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #f5c04a;
  cursor: pointer;
`;

const RadioText = styled.span<{ $disabled?: boolean }>`
  font-size: 0.875rem;
  color: ${props => props.$disabled ? 'rgba(238, 245, 255, 0.4)' : '#eef5ff'};
  font-weight: 500;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(245, 192, 74, 0.1);
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    padding-top: 0.5rem;
  }
`;

const ConfirmButton = styled.button`
  flex: 1;
  padding: 0.875rem 1rem;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 8px;
  color: #0b1a2b;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  min-height: 48px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 192, 74, 0.3);
    
    @media (max-width: 768px) {
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

const CancelButton = styled.button`
  flex: 1;
  padding: 0.875rem 1rem;
  background: transparent;
  border: 1px solid #f5c04a;
  border-radius: 8px;
  color: #f5c04a;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  min-height: 48px;
  
  &:hover {
    background: #f5c04a;
    color: #0b1a2b;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
    min-height: 52px;
  }
`;

interface AIFundProps {
  onNavigate?: (page: string) => void;
}

const AIFund: React.FC<AIFundProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('50% USDT + 50% FTL');
  const [usdtBalance] = useState('1,250.50'); // Mock USDT balance
  const [ftlBalance] = useState('850.25'); // Mock FTL balance
  
  // Calculate USDT and FTL amounts based on stake amount and payment method
  const calculatePaymentSplit = () => {
    if (!stakeAmount || isNaN(parseFloat(stakeAmount))) {
      return { usdtAmount: 0, ftlAmount: 0, ftlDollarValue: 0 };
    }
    const amount = parseFloat(stakeAmount);
    
    if (paymentMethod === '100% USDT') {
      return {
        usdtAmount: amount.toFixed(2),
        ftlAmount: 0,
        ftlDollarValue: 0
      };
    } else { // 50% USDT + 50% FTL
      const usdtAmount = (amount * 0.5).toFixed(2);
      const ftlDollarValue = (amount * 0.5).toFixed(2);
      const ftlAmount = (parseFloat(ftlDollarValue) / 0.2).toFixed(2);
      return {
        usdtAmount,
        ftlAmount,
        ftlDollarValue
      };
    }
  };
  
  const { usdtAmount, ftlAmount, ftlDollarValue } = calculatePaymentSplit();
  
  const stats = [
    {
      value: '360',
      label: 'Round (Day)',
    },
    {
      value: '1.0',
      label: 'Daily ROI (%)',
    },
    {
      value: '100',
      label: 'Minimum (USDT)',
    },
  ];

  const handleStakeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStakeAmount('');
  };

  const handleConfirmStake = () => {
    // Here you would handle the actual staking logic
    console.log('Staking amount:', stakeAmount);
    handleCloseModal();
  };

  return (
    <>
      <AIFundContainer>
        <BackgroundPattern />
        <AIFundHeader>
          <AIFundIcon>
            <Brain size={24} />
          </AIFundIcon>
          <AIFundTitle>360 Ai Fund</AIFundTitle>
        </AIFundHeader>
        
        <AIFundStats>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </AIFundStats>

        <AIFundActions>
          <PrimaryButton onClick={handleStakeClick}>
            {t('button.stake')}
          </PrimaryButton>
          <SecondaryButton onClick={() => onNavigate?.('investment-records')}>
            {t('button.records')}
          </SecondaryButton>
        </AIFundActions>
      </AIFundContainer>
      
      {/* Stake Modal - Outside the card container */}
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
                  <DollarSign size={20} />
                  {t('modal.stakeAIFund')}
                </ModalTitle>
                <CloseButton onClick={handleCloseModal}>
                  <X size={20} />
                </CloseButton>
              </ModalHeader>
              
              <ModalBody>
                <InputGroup>
                  <Label>{t('form.amountToStake')}</Label>
                  <Input
                    type="number"
                    placeholder={t('form.minimumStake')}
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    min="100"
                    step="0.01"
                  />
                  
                  <BalanceContainer>
                    <BalanceItem>
                      <BalanceLabel>{t('form.usdtBalance')}</BalanceLabel>
                      <BalanceValue>{usdtBalance}</BalanceValue>
                    </BalanceItem>
                    <BalanceItem>
                      <BalanceLabel>{t('form.ftlBalance')}</BalanceLabel>
                      <BalanceValue>{ftlBalance}</BalanceValue>
                    </BalanceItem>
                  </BalanceContainer>
                  
                  <PaymentMethodGroup>
                    <PaymentMethodLabel>{t('form.paymentMethod')}</PaymentMethodLabel>
                    <RadioGroup>
                      <RadioOption>
                        <RadioInput
                          type="radio"
                          name="paymentMethod"
                          value="100% USDT"
                          checked={paymentMethod === '100% USDT'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <RadioText>{t('form.100USDT')}</RadioText>
                      </RadioOption>
                      <RadioOption $disabled={true}>
                        <RadioInput
                          type="radio"
                          name="paymentMethod"
                          value="50% USDT + 50% FTL"
                          checked={paymentMethod === '50% USDT + 50% FTL'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          disabled
                        />
                        <RadioText $disabled={true}>{t('form.50USDT50FTL')}</RadioText>
                      </RadioOption>
                    </RadioGroup>
                    
                    {stakeAmount && parseFloat(stakeAmount) > 0 && (
                      <PaymentCalculation>
                        <CalculationTitle>{t('form.paymentBreakdown')}</CalculationTitle>
                        {paymentMethod === '100% USDT' && (
                          <CalculationRow>
                            <CalculationLabel>{t('form.usdtAmount')}:</CalculationLabel>
                            <CalculationAmount>{usdtAmount} USDT = ${usdtAmount}</CalculationAmount>
                          </CalculationRow>
                        )}
                        {paymentMethod === '50% USDT + 50% FTL' && (
                          <>
                            <CalculationRow>
                              <CalculationLabel>{t('form.usdtAmount')}:</CalculationLabel>
                              <CalculationAmount>{usdtAmount} USDT = ${usdtAmount}</CalculationAmount>
                            </CalculationRow>
                            <CalculationRow>
                              <CalculationLabel>{t('form.ftlAmount')}:</CalculationLabel>
                              <CalculationAmount>{ftlAmount} FTL = ${ftlDollarValue}</CalculationAmount>
                            </CalculationRow>
                          </>
                        )}
                      </PaymentCalculation>
                    )}
                  </PaymentMethodGroup>
                </InputGroup>
              </ModalBody>
              
              <ModalActions>
                <CancelButton onClick={handleCloseModal}>
                  {t('button.cancel')}
                </CancelButton>
                <ConfirmButton 
                  onClick={handleConfirmStake}
                  disabled={!stakeAmount || parseFloat(stakeAmount) < 100}
                >
                  {t('button.stakeNow')}
                </ConfirmButton>
              </ModalActions>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIFund;
