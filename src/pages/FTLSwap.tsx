import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, ArrowUpDown, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SwapContainer = styled.div`
  min-height: 100vh;
  background: #0b1a2b;
  color: #eef5ff;
  padding: 0;
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #eef5ff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
`;

const Content = styled.div`
  padding: 2rem 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const SwapCard = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const SwapSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionLabel = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #eef5ff;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  background: none;
  border: none;
  color: #eef5ff;
  font-size: 1rem;
  font-weight: 500;
  flex: 1;
  outline: none;
  
  &::placeholder {
    color: #eef5ff;
    opacity: 0.5;
    font-style: italic;
  }
`;

const CurrencyLabel = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #eef5ff;
  font-style: italic;
`;

const BalanceText = styled.div`
  font-size: 0.875rem;
  color: #eef5ff;
  opacity: 0.8;
  margin-left: 0.5rem;
`;

const SwapIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SwapIcon = styled.button`
  width: 50px;
  height: 50px;
  background: #eef5ff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(238, 245, 255, 0.3);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const OutputContainer = styled.div`
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const OutputValue = styled.div`
  color: #eef5ff;
  font-size: 1rem;
  font-weight: 500;
  flex: 1;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #eef5ff;
  opacity: 0.8;
`;

const ExchangeButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 12px;
  color: #0b1a2b;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const RecordsSection = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const RecordsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const RecordsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5c04a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RefreshButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #f5c04a;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
  }
`;

const RecordItem = styled.div`
  background: rgba(26, 42, 58, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  transition: all 0.2s ease;
`;

const RecordInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecordType = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.25rem;
`;

const RecordField = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
`;

const RecordLabel = styled.div`
  font-size: 0.75rem;
  color: #eef5ff;
  opacity: 0.8;
  margin-bottom: 0.25rem;
`;

const RecordValue = styled.div`
  font-size: 0.85rem;
  color: #eef5ff;
  font-weight: 500;
`;

const RecordOrderId = styled(RecordField)``;

const RecordOrderIdLabel = styled(RecordLabel)``;

const RecordOrderIdValue = styled(RecordValue)``;

const RecordDate = styled(RecordField)``;

const RecordDateLabel = styled(RecordLabel)``;

const RecordDateValue = styled(RecordValue)``;

const RecordAmount = styled(RecordField)``;

const RecordAmountLabel = styled(RecordLabel)``;

const RecordAmountValue = styled(RecordValue)`
  font-size: 0.9rem;
  font-weight: 600;
`;

const RecordSwapPrice = styled(RecordField)``;

const RecordSwapPriceLabel = styled(RecordLabel)``;

const RecordSwapPriceValue = styled(RecordValue)``;

const RecordStatus = styled.div<{ $status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => {
    switch (props.$status) {
      case 'completed':
        return 'rgba(34, 197, 94, 0.2)';
      case 'pending':
        return 'rgba(245, 192, 74, 0.2)';
      case 'failed':
        return 'rgba(239, 68, 68, 0.2)';
      default:
        return 'rgba(107, 114, 128, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'completed':
        return '#22c55e';
      case 'pending':
        return '#f5c04a';
      case 'failed':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }};
`;

const NoRecordsText = styled.div`
  text-align: center;
  color: #eef5ff;
  opacity: 0.6;
  font-size: 0.875rem;
  padding: 2rem;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: -30%;
  right: -20%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(245, 192, 74, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
`;

interface FTLSwapProps {
  onNavigate?: (page: string) => void;
}

const FTLSwap: React.FC<FTLSwapProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0');
  const [isSwapping, setIsSwapping] = useState(false);
  
  const ftlBalance = '306.88';
  const ftlPrice = '1.00';
  const destructionRatio = '40%';
  
  const swapRecords = [
    {
      id: 1,
      orderId: 'SWP-2024-001',
      type: t('swap.ftlToUsdt'),
      amount: '100 FTL → 3.18 USDT',
      swapPrice: '0.0318',
      status: 'completed',
      time: '2 hours ago',
      date: '2024-01-15 14:30'
    }
  ];
  
  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    
    if (value && !isNaN(parseFloat(value))) {
      const calculated = (parseFloat(value) * parseFloat(ftlPrice)).toFixed(4);
      setToAmount(calculated);
    } else {
      setToAmount('0');
    }
  };

  const getSwapInfo = () => {
    if (!fromAmount || isNaN(parseFloat(fromAmount))) {
      return { usdtAmount: '0', destroyedAmount: '0' };
    }
    
    const inputAmount = parseFloat(fromAmount);
    const usdtAmount = (inputAmount * parseFloat(ftlPrice)).toFixed(4);
    const destroyedAmount = (inputAmount * 0.4).toFixed(4); // 40% destruction ratio
    
    return { usdtAmount, destroyedAmount };
  };

  const { usdtAmount, destroyedAmount } = getSwapInfo();
  
  const handleSwap = async () => {
    if (!fromAmount || parseFloat(fromAmount) <= 0) return;
    
    setIsSwapping(true);
    
    // Simulate swap process
    setTimeout(() => {
      setIsSwapping(false);
      // In a real app, this would trigger the actual swap
      console.log(`Swapping ${fromAmount} FTL to ${toAmount} USDT`);
    }, 2000);
  };
  
  const handleRefresh = () => {
    // Refresh swap records
    console.log('Refreshing swap records...');
  };

  return (
    <SwapContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>{t('swap.title')}</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SwapCard>
            <BackgroundPattern />
            
            <SwapSection>
              <SectionLabel>{t('swap.from')}</SectionLabel>
              <InputContainer>
                <InputField
                  type="number"
                  placeholder={t('swap.enterQuantity')}
                  value={fromAmount}
                  onChange={handleFromAmountChange}
                />
                <CurrencyLabel>FTL</CurrencyLabel>
              </InputContainer>
              <BalanceText>{t('swap.balance')}: {ftlBalance}</BalanceText>
            </SwapSection>

            <SwapIconContainer>
              <SwapIcon>
                <RefreshCw size={24} />
              </SwapIcon>
            </SwapIconContainer>

            <SwapSection>
              <SectionLabel>{t('swap.to')}</SectionLabel>
              <OutputContainer>
                <OutputValue>{toAmount}</OutputValue>
                <CurrencyLabel>USDT</CurrencyLabel>
              </OutputContainer>
              <PriceInfo>
                <span>{t('swap.price')}: {ftlPrice}</span>
                <span>{t('swap.destroyRatio')}: {destructionRatio}</span>
              </PriceInfo>
              
              {fromAmount && parseFloat(fromAmount) > 0 && (
                <PriceInfo style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(245, 192, 74, 0.1)', borderRadius: '8px', border: '1px solid rgba(245, 192, 74, 0.2)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#22c55e', fontWeight: '600' }}>
                        {t('swap.youWillGet')}: {usdtAmount} {t('swap.usdt')}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ef4444', fontWeight: '600' }}>
                        {t('swap.willBeDestroyed')}: {destroyedAmount} {t('swap.ftl')}
                      </span>
                    </div>
                  </div>
                </PriceInfo>
              )}
            </SwapSection>

            <ExchangeButton 
              onClick={handleSwap}
              disabled={!fromAmount || parseFloat(fromAmount) <= 0 || isSwapping}
            >
              {isSwapping ? t('swap.swapping') : t('swap.exchange')}
            </ExchangeButton>
          </SwapCard>

          <RecordsSection>
            <RecordsHeader>
              <RecordsTitle>
                <Clock size={20} />
                {t('swap.records')}
              </RecordsTitle>
              <RefreshButton onClick={handleRefresh}>
                <RefreshCw size={16} />
              </RefreshButton>
            </RecordsHeader>

            {swapRecords.length > 0 ? (
              swapRecords.map((record) => (
                <RecordItem key={record.id}>
                  <RecordInfo>
                    <RecordOrderId>
                      <RecordOrderIdLabel>{t('swap.orderId')}:</RecordOrderIdLabel>
                      <RecordOrderIdValue>{record.orderId}</RecordOrderIdValue>
                    </RecordOrderId>
                    <RecordDate>
                      <RecordDateLabel>{t('records.date')}:</RecordDateLabel>
                      <RecordDateValue>{record.date}</RecordDateValue>
                    </RecordDate>
                    <RecordAmount>
                      <RecordAmountLabel>{t('swap.swapAmount')}:</RecordAmountLabel>
                      <RecordAmountValue>{record.amount}</RecordAmountValue>
                    </RecordAmount>
                    <RecordSwapPrice>
                      <RecordSwapPriceLabel>{t('swap.price')}:</RecordSwapPriceLabel>
                      <RecordSwapPriceValue>${record.swapPrice}</RecordSwapPriceValue>
                    </RecordSwapPrice>
                  </RecordInfo>
                </RecordItem>
              ))
            ) : (
              <NoRecordsText>{t('swap.noRecords')}</NoRecordsText>
            )}
          </RecordsSection>
        </motion.div>
      </Content>
    </SwapContainer>
  );
};

export default FTLSwap;
