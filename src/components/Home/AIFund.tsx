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

const AIFundContainer = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 0;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(20px);
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
  }

  &:active {
    transform: translateY(0);
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
  }

  &:active {
    transform: translateY(0);
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(245, 192, 74, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  backdrop-filter: blur(20px);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5c04a;
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
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
    color: #f5c04a;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.375rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 8px;
  color: #eef5ff;
  font-size: 0.8125rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #f5c04a;
    box-shadow: 0 0 0 3px rgba(245, 192, 74, 0.1);
  }
  
  &::placeholder {
    color: rgba(238, 245, 255, 0.5);
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
  margin-top: 0.375rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const BalanceItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 0.375rem;
  background: rgba(11, 26, 43, 0.3);
  border-radius: 6px;
  border: 1px solid rgba(245, 192, 74, 0.1);
`;

const BalanceLabel = styled.div`
  font-size: 0.5rem;
  color: #eef5ff;
  opacity: 0.7;
  margin-bottom: 0.125rem;
`;

const BalanceValue = styled.div`
  font-size: 0.625rem;
  color: #f5c04a;
  font-weight: 600;
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
  margin-top: 1rem;
`;

const PaymentMethodLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.75rem;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

const RadioOption = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${props => props.$disabled ? 'rgba(11, 26, 43, 0.3)' : 'rgba(11, 26, 43, 0.5)'};
  border: 2px solid ${props => props.$disabled ? 'rgba(128, 128, 128, 0.3)' : 'rgba(245, 192, 74, 0.2)'};
  border-radius: 10px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.$disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.$disabled ? 'rgba(11, 26, 43, 0.3)' : 'rgba(11, 26, 43, 0.7)'};
    border-color: ${props => props.$disabled ? 'rgba(128, 128, 128, 0.3)' : 'rgba(245, 192, 74, 0.4)'};
  }
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #f5c04a;
  cursor: pointer;
`;

const RadioText = styled.span<{ $disabled?: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.$disabled ? 'rgba(238, 245, 255, 0.4)' : '#eef5ff'};
  font-weight: 500;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ConfirmButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 10px;
  color: #0b1a2b;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
  }
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 2px solid #f5c04a;
  border-radius: 10px;
  color: #f5c04a;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5c04a;
    color: #0b1a2b;
  }
`;

interface AIFundProps {
  onNavigate?: (page: string) => void;
}

const AIFund: React.FC<AIFundProps> = ({ onNavigate }) => {
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <StatCard>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          </motion.div>
        ))}
      </AIFundStats>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <AIFundActions>
          <PrimaryButton onClick={handleStakeClick}>
            Stake
          </PrimaryButton>
          <SecondaryButton onClick={() => onNavigate?.('investment-records')}>
            Records
          </SecondaryButton>
        </AIFundActions>
      </motion.div>
      
      {/* Stake Modal */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  <DollarSign size={24} />
                  Stake AI Fund
                </ModalTitle>
                <CloseButton onClick={handleCloseModal}>
                  <X size={20} />
                </CloseButton>
              </ModalHeader>
              
              <ModalBody>
                <InputGroup>
                  <Label>Amount to Stake (USDT)</Label>
                  <Input
                    type="number"
                    placeholder="Minimum Stake $100"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    min="100"
                    step="0.01"
                  />
                  
                  <BalanceContainer>
                    <BalanceItem>
                      <BalanceLabel>USDT Balance</BalanceLabel>
                      <BalanceValue>{usdtBalance}</BalanceValue>
                    </BalanceItem>
                    <BalanceItem>
                      <BalanceLabel>FTL Balance</BalanceLabel>
                      <BalanceValue>{ftlBalance}</BalanceValue>
                    </BalanceItem>
                  </BalanceContainer>
                  
                  <PaymentMethodGroup>
                    <PaymentMethodLabel>Payment Method</PaymentMethodLabel>
                    <RadioGroup>
                      <RadioOption>
                        <RadioInput
                          type="radio"
                          name="paymentMethod"
                          value="100% USDT"
                          checked={paymentMethod === '100% USDT'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <RadioText>100% USDT</RadioText>
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
                        <RadioText $disabled={true}>50% USDT + 50% FTL</RadioText>
                      </RadioOption>
                    </RadioGroup>
                    
                    {stakeAmount && parseFloat(stakeAmount) > 0 && (
                      <PaymentCalculation>
                        <CalculationTitle>Payment Breakdown</CalculationTitle>
                        {paymentMethod === '100% USDT' && (
                          <CalculationRow>
                            <CalculationLabel>USDT Amount:</CalculationLabel>
                            <CalculationAmount>{usdtAmount} USDT = ${usdtAmount}</CalculationAmount>
                          </CalculationRow>
                        )}
                        {paymentMethod === '50% USDT + 50% FTL' && (
                          <>
                            <CalculationRow>
                              <CalculationLabel>USDT Amount:</CalculationLabel>
                              <CalculationAmount>{usdtAmount} USDT = ${usdtAmount}</CalculationAmount>
                            </CalculationRow>
                            <CalculationRow>
                              <CalculationLabel>FTL Amount:</CalculationLabel>
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
                  Cancel
                </CancelButton>
                <ConfirmButton 
                  onClick={handleConfirmStake}
                  disabled={!stakeAmount || parseFloat(stakeAmount) < 100}
                >
               Stake Now
                </ConfirmButton>
              </ModalActions>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </AIFundContainer>
  );
};

export default AIFund;
