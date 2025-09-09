import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, DollarSign, Coins, Zap, Calendar, Download, Wrench, X, Eye } from 'lucide-react';

const PassiveIncomeDetailsContainer = styled.div`
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
  max-width: 1200px;
  margin: 0 auto;
`;

const BalanceCard = styled.div`
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
  margin-bottom: 2rem;
`;

const BalanceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BalanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const BalanceItem = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  text-align: center;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.2);
    transform: translateY(-2px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const HistoryButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 6px;
  color: #f5c04a;
  padding: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: scale(1.05);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const BalanceIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #0b1a2b;
  box-shadow: 0 8px 20px rgba(245, 192, 74, 0.3);
`;

const BalanceLabel = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const BalanceValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5c04a;
`;

const BalanceExtractButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 6px;
  color: #f5c04a;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const BalanceMineButton = styled.button`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 6px;
  color: #3b82f6;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const BalanceTransferButton = styled.button`
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 6px;
  color: #22c55e;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  
  &:hover {
    background: rgba(34, 197, 94, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const BalanceHistoryButton = styled.button`
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 6px;
  color: #a855f7;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  
  &:hover {
    background: rgba(168, 85, 247, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const BalanceButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
`;

const Ftl2MiningStatus = styled.div`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  color: #3b82f6;
  padding: 0.75rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const Ftl2MiningText = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
`;

const Ftl2NextProfit = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;
`;


const Ftl2TerminateButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 6px;
  color: #ef4444;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin: 0.5rem auto 0;
  width: 100%;
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const RecordsCard = styled.div`
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
  margin-bottom: 2rem;
`;

const RecordsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MiningButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #f5c04a;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const MiningInProgressButton = styled.div`
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  color: #22c55e;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 120px;
`;

const MiningStatus = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
`;

const MaturityDate = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;
`;

const GasMiningInProgressButton = styled.div`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 120px;
`;

const GasMiningStatus = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
`;

const NextProfitDate = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;
`;

const TerminateButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #ef4444;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const MineGasButton = styled.button`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;


const RecordsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecordRow = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto auto auto;
  gap: 1rem;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }
`;

const RecordDate = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RecordOrderId = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  font-weight: 500;
  text-align: left;
`;

const RecordAmount = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f5c04a;
  text-align: left;
`;

const ExtractButton = styled.button`
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #f5c04a;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #eef5ff;
  opacity: 0.6;
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #f5c04a;
`;

const EmptyTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #eef5ff;
  margin: 0 0 0.5rem 0;
`;

const EmptyDescription = styled.p`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
  margin: 0;
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
  max-width: 400px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
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

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const ModalQuestion = styled.p`
  font-size: 1rem;
  color: #eef5ff;
  opacity: 0.8;
  margin: 0 0 2rem 0;
  text-align: center;
  font-style: italic;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #eef5ff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const QuantityInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #eef5ff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #f5c04a;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.3);
  }
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #f5c04a;
`;

const RadioText = styled.span`
  color: #eef5ff;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #f5c04a;
  border-radius: 12px;
  color: #f5c04a;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
  }
`;

const ConfirmButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 12px;
  color: #0b1a2b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

interface PassiveIncomeDetailsProps {
  onNavigate?: (page: string) => void;
}

const PassiveIncomeDetails: React.FC<PassiveIncomeDetailsProps> = ({ onNavigate }) => {
  const [balanceData] = useState({
    usdt: '1,250.50',
    ftl: '2,340.75',
    ftl2: '1,890.25',
    gas: '890.25'
  });

  const [ftl2MiningData] = useState({
    isMining: true,
    nextProfitTime: '2025-9-06 16:45:30',
    autoMineGas: false
  });

  const [records] = useState([
    {
      orderId: 'PA001',
      date: '2025-9-01 19:06:40',
      amount: '125.50 USDT'
    },
    {
      orderId: 'PA002',
      date: '2025-9-02 14:30:15',
      amount: '89.25 USDT',
      maturityDate: '2025-9-03 14:30:15'
    },
    {
      orderId: 'PA003',
      date: '2025-9-03 10:15:30',
      amount: '200.75 USDT'
    },
    {
      orderId: 'PA004',
      date: '2025-9-04 08:45:20',
      amount: '150.30 USDT',
      nextProfitDate: '2025-9-05 08:45:20'
    }
  ]);

  const [showMiningModal, setShowMiningModal] = useState(false);
  const [showMiningSuccessModal, setShowMiningSuccessModal] = useState(false);
  const [showGasMiningModal, setShowGasMiningModal] = useState(false);
  const [showGasMiningSuccessModal, setShowGasMiningSuccessModal] = useState(false);
  const [showExtractConfirmModal, setShowExtractConfirmModal] = useState(false);
  const [showExtractModal, setShowExtractModal] = useState(false);
  const [showBalanceExtractConfirmModal, setShowBalanceExtractConfirmModal] = useState(false);
  const [showBalanceExtractModal, setShowBalanceExtractModal] = useState(false);
  const [extractIndex, setExtractIndex] = useState<number | null>(null);
  const [extractableQuantity, setExtractableQuantity] = useState('55.0000');
  const [paymentMethod, setPaymentMethod] = useState('usdt');
  const [extractMessage, setExtractMessage] = useState('');
  const [balanceExtractType, setBalanceExtractType] = useState<'ftl' | 'gas' | null>(null);
  const [showTerminateModal, setShowTerminateModal] = useState(false);
  const [showFtl2TerminateModal, setShowFtl2TerminateModal] = useState(false);
  const [showExtractSuccessModal, setShowExtractSuccessModal] = useState(false);
  const [showBalanceExtractSuccessModal, setShowBalanceExtractSuccessModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showTransferSuccessModal, setShowTransferSuccessModal] = useState(false);
  const [transferUid, setTransferUid] = useState('');
  const [transferAmount, setTransferAmount] = useState('');

  const handleExtract = (index: number) => {
    setExtractIndex(index);
    if (index === 2) {
      setExtractMessage('Are you sure want extract USDT? This order still valid for Mine GAS');
    } else {
      setExtractMessage('Are you sure want extract USDT? This order still valid for Mine FTL');
    }
    setShowExtractConfirmModal(true);
  };

  const handleMining = () => {
    setShowMiningModal(true);
  };

  const handleMineGas = () => {
    setShowGasMiningModal(true);
  };

  const handleConfirmGasMining = () => {
    console.log('Starting GAS mining');
    setShowGasMiningModal(false);
    setShowGasMiningSuccessModal(true);
    // Add GAS mining logic here
  };

  const handleCancelGasMining = () => {
    setShowGasMiningModal(false);
  };

  const handleCloseGasMiningSuccess = () => {
    setShowGasMiningSuccessModal(false);
  };

  const handleTerminateMining = () => {
    setShowTerminateModal(true);
  };

  const handleConfirmTerminate = () => {
    console.log('Terminating GAS mining');
    setShowTerminateModal(false);
    // Add termination logic here
  };

  const handleCancelTerminate = () => {
    setShowTerminateModal(false);
  };

  const handleFtl2TerminateMining = () => {
    setShowFtl2TerminateModal(true);
  };

  const handleConfirmFtl2Terminate = () => {
    console.log('Terminating FTL2 GAS mining');
    setShowFtl2TerminateModal(false);
    // Add FTL2 termination logic here
  };

  const handleCancelFtl2Terminate = () => {
    setShowFtl2TerminateModal(false);
  };

  const handleBalanceExtract = (type: 'ftl' | 'gas') => {
    setBalanceExtractType(type);
    if (type === 'ftl') {
      setExtractMessage('Are you sure want to extract FTL? After this extraction amount will not able to Mine GAS anymore!');
    } else {
      setExtractMessage('Are you sure want to extract GAS? After this extraction amount will not able to deduct extract fee!');
    }
    setShowBalanceExtractConfirmModal(true);
  };

  const handleCancelBalanceExtractConfirm = () => {
    setShowBalanceExtractConfirmModal(false);
    setBalanceExtractType(null);
  };

  const handleConfirmBalanceExtractConfirm = () => {
    setShowBalanceExtractConfirmModal(false);
    setShowBalanceExtractModal(true);
  };

  const handleCancelBalanceExtract = () => {
    setShowBalanceExtractModal(false);
    setBalanceExtractType(null);
  };

  const handleConfirmBalanceExtract = () => {
    if (balanceExtractType) {
      console.log(`Extracting ${balanceExtractType.toUpperCase()} from balance`);
      // Add balance extraction logic here
    }
    setShowBalanceExtractModal(false);
    setShowBalanceExtractSuccessModal(true);
    setBalanceExtractType(null);
  };

  const handleCloseExtractSuccess = () => {
    setShowExtractSuccessModal(false);
  };

  const handleCloseBalanceExtractSuccess = () => {
    setShowBalanceExtractSuccessModal(false);
  };

  const handleBalanceMineGas = () => {
    console.log('Starting GAS mining from FTL balance');
    setShowGasMiningModal(true);
  };

  const handleBalanceTransfer = (type: 'gas') => {
    setShowTransferModal(true);
  };

  const handleCancelTransfer = () => {
    setShowTransferModal(false);
    setTransferUid('');
    setTransferAmount('');
  };

  const handleConfirmTransfer = () => {
    if (transferUid && transferAmount) {
      console.log(`Transferring ${transferAmount} GAS to UID: ${transferUid}`);
      // Add transfer logic here
      setShowTransferModal(false);
      setShowTransferSuccessModal(true);
      setTransferUid('');
      setTransferAmount('');
    }
  };

  const handleCloseTransferSuccess = () => {
    setShowTransferSuccessModal(false);
  };

  const handleBalanceHistory = (type: 'usdt' | 'ftl' | 'ftl2' | 'gas') => {
    if (type === 'ftl' || type === 'gas') {
      onNavigate?.('mining-records');
    } else if (type === 'usdt') {
      onNavigate?.('usdt-passive-records');
    } else {
      console.log(`Viewing ${type.toUpperCase()} history`);
      // Add history navigation logic here
    }
  };


  const handleConfirmMining = () => {
    console.log('Starting FTL mining');
    setShowMiningModal(false);
    setShowMiningSuccessModal(true);
    // Add mining logic here
  };

  const handleCancelMining = () => {
    setShowMiningModal(false);
  };

  const handleCloseMiningSuccess = () => {
    setShowMiningSuccessModal(false);
  };

  const handleConfirmExtract = () => {
    if (extractIndex !== null) {
      console.log(`Extracting record ${extractIndex}`);
      // Add extraction logic here
    }
    setShowExtractModal(false);
    setShowExtractSuccessModal(true);
    setExtractIndex(null);
  };

  const handleCancelExtractConfirm = () => {
    setShowExtractConfirmModal(false);
    setExtractIndex(null);
  };

  const handleConfirmExtractConfirm = () => {
    setShowExtractConfirmModal(false);
    setShowExtractModal(true);
  };

  const handleCancelExtract = () => {
    setShowExtractModal(false);
    setExtractIndex(null);
  };

  return (
    <PassiveIncomeDetailsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Passive Income Details</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BalanceCard>
            <BalanceTitle>
              <DollarSign size={24} />
              Balance Overview
            </BalanceTitle>
            
            <BalanceGrid>
              <BalanceItem>
                <HistoryButton onClick={() => handleBalanceHistory('usdt')}>
                  <Eye size={16} />
                </HistoryButton>
                <BalanceIcon>
                  <DollarSign size={24} />
                </BalanceIcon>
                <BalanceLabel>USDT</BalanceLabel>
                <BalanceValue>{balanceData.usdt}</BalanceValue>
              </BalanceItem>
              
              <BalanceItem>
                <HistoryButton onClick={() => handleBalanceHistory('ftl')}>
                  <Eye size={16} />
                </HistoryButton>
                <BalanceIcon>
                  <Coins size={24} />
                </BalanceIcon>
                <BalanceLabel>FTL</BalanceLabel>
                <BalanceValue>{balanceData.ftl}</BalanceValue>
                <BalanceButtonGroup>
                  <BalanceExtractButton onClick={() => handleBalanceExtract('ftl')}>
                    <Download size={14} />
                    Extract
                  </BalanceExtractButton>
                  <BalanceMineButton onClick={handleBalanceMineGas}>
                    <Zap size={14} />
                    Mine Gas
                  </BalanceMineButton>
                </BalanceButtonGroup>
              </BalanceItem>
              
              <BalanceItem>
                <HistoryButton onClick={() => handleBalanceHistory('ftl2')}>
                  <Eye size={16} />
                </HistoryButton>
                <BalanceIcon>
                  <Coins size={24} />
                </BalanceIcon>
                <BalanceLabel>FTL 2</BalanceLabel>
                <BalanceValue>{balanceData.ftl2}</BalanceValue>
                
                {ftl2MiningData.isMining ? (
                  <>
                    <Ftl2MiningStatus>
                      <Ftl2MiningText>GAS Mining in Progress</Ftl2MiningText>
                      <Ftl2NextProfit>Next Profit: {ftl2MiningData.nextProfitTime}</Ftl2NextProfit>
                    </Ftl2MiningStatus>
                    <Ftl2TerminateButton onClick={handleFtl2TerminateMining}>
                      <X size={14} />
                      Terminate GAS Mining
                    </Ftl2TerminateButton>
                  </>
                ) : (
                  <BalanceButtonGroup>
                    <BalanceExtractButton onClick={() => handleBalanceExtract('ftl')}>
                      <Download size={14} />
                      Extract
                    </BalanceExtractButton>
                    <BalanceMineButton onClick={handleBalanceMineGas}>
                      <Zap size={14} />
                      Mine Gas
                    </BalanceMineButton>
                  </BalanceButtonGroup>
                )}
              </BalanceItem>
              
              <BalanceItem>
                <HistoryButton onClick={() => handleBalanceHistory('gas')}>
                  <Eye size={16} />
                </HistoryButton>
                <BalanceIcon>
                  <Zap size={24} />
                </BalanceIcon>
                <BalanceLabel>GAS</BalanceLabel>
                <BalanceValue>{balanceData.gas}</BalanceValue>
                <BalanceButtonGroup>
                  <BalanceExtractButton onClick={() => handleBalanceExtract('gas')}>
                    <Download size={14} />
                    Extract
                  </BalanceExtractButton>
                  <BalanceTransferButton onClick={() => handleBalanceTransfer('gas')}>
                    <Coins size={14} />
                    Transfer
                  </BalanceTransferButton>
                </BalanceButtonGroup>
              </BalanceItem>
            </BalanceGrid>
          </BalanceCard>

          <RecordsCard>
            <RecordsHeader>
              <RecordsTitle>
                <Calendar size={24} />
                Income Records
              </RecordsTitle>
            </RecordsHeader>

            <RecordsList>
              {records.length > 0 ? (
                records.map((record, index) => (
                  <RecordRow key={index}>
                    <RecordOrderId>Order ID: {record.orderId}</RecordOrderId>
                    <RecordDate>
                      <Calendar size={16} />
                      {record.date}
                    </RecordDate>
                    <RecordAmount>{record.amount}</RecordAmount>
                    {index === 1 ? (
                      <MiningInProgressButton>
                        <MiningStatus>FTL Mining in Progress</MiningStatus>
                        <MaturityDate>Maturity: {record.maturityDate}</MaturityDate>
                      </MiningInProgressButton>
                    ) : index === 2 ? (
                      <MineGasButton onClick={handleMineGas}>
                        <Zap size={16} />
                        Mine GAS
                      </MineGasButton>
                    ) : index === 3 ? (
                      <GasMiningInProgressButton>
                        <GasMiningStatus>GAS Mining in Progress</GasMiningStatus>
                        <NextProfitDate>Next Profit: {record.nextProfitDate}</NextProfitDate>
                      </GasMiningInProgressButton>
                    ) : (
                      <MiningButton onClick={handleMining}>
                        <Wrench size={16} />
                        Mine FTL
                      </MiningButton>
                    )}
                    {index === 0 && (
                      <ExtractButton onClick={() => handleExtract(index)}>
                        <Download size={16} />
                        Extract USDT
                      </ExtractButton>
                    )}
                    {index === 2 && (
                      <ExtractButton onClick={() => handleExtract(index)}>
                        <Download size={16} />
                        Extract USDT
                      </ExtractButton>
                    )}
                    {index === 3 && (
                      <TerminateButton onClick={handleTerminateMining}>
                        <X size={16} />
                        Terminate GAS Mining
                      </TerminateButton>
                    )}
                  </RecordRow>
                ))
              ) : (
                <EmptyState>
                  <EmptyIcon>
                    <Calendar size={40} />
                  </EmptyIcon>
                  <EmptyTitle>No Records Found</EmptyTitle>
                  <EmptyDescription>
                    Your passive income records will appear here
                  </EmptyDescription>
                </EmptyState>
              )}
            </RecordsList>
          </RecordsCard>
        </motion.div>
      </Content>

      <AnimatePresence>
        {showMiningModal && (
          <ModalOverlay onClick={handleCancelMining}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>Are you sure you want to participate in mining?</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelMining}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmMining}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showMiningSuccessModal && (
          <ModalOverlay onClick={handleCloseMiningSuccess}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Success</ModalTitle>
              <ModalQuestion>Participate FTL mining successfully, mining period will be 30 hours.</ModalQuestion>
              <ButtonGroup>
                <ConfirmButton onClick={handleCloseMiningSuccess}>
                  Close
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showGasMiningModal && (
          <ModalOverlay onClick={handleCancelGasMining}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>Are you sure you want to participate in GAS mining?</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelGasMining}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmGasMining}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showGasMiningSuccessModal && (
          <ModalOverlay onClick={handleCloseGasMiningSuccess}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Success</ModalTitle>
              <ModalQuestion>Participate GAS mining successfully, mining profit will distribute 24 hours after mining.</ModalQuestion>
              <ButtonGroup>
                <ConfirmButton onClick={handleCloseGasMiningSuccess}>
                  Close
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showTerminateModal && (
          <ModalOverlay onClick={handleCancelTerminate}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>Are you sure you want to terminate GAS mining?</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelTerminate}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmTerminate}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showFtl2TerminateModal && (
          <ModalOverlay onClick={handleCancelFtl2Terminate}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>Are you sure you want to terminate FTL2 GAS mining?</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelFtl2Terminate}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmFtl2Terminate}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showExtractConfirmModal && (
          <ModalOverlay onClick={handleCancelExtractConfirm}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>{extractMessage}</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelExtractConfirm}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmExtractConfirm}>
                  Continue
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showBalanceExtractConfirmModal && (
          <ModalOverlay onClick={handleCancelBalanceExtractConfirm}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Prompt</ModalTitle>
              <ModalQuestion>{extractMessage}</ModalQuestion>
              <ButtonGroup>
                <CancelButton onClick={handleCancelBalanceExtractConfirm}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmBalanceExtractConfirm}>
                  Continue
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showBalanceExtractModal && (
          <ModalOverlay onClick={handleCancelBalanceExtract}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCancelBalanceExtract}>
                <X size={20} />
              </CloseButton>
              <ModalTitle>Extract {balanceExtractType?.toUpperCase()}</ModalTitle>
              
              <FormGroup>
                <FormLabel>Extract Amount:</FormLabel>
                <QuantityInput
                  type="text"
                  value={extractableQuantity}
                  onChange={(e) => setExtractableQuantity(e.target.value)}
                />
              </FormGroup>

              <ButtonGroup>
                <ConfirmButton onClick={handleConfirmBalanceExtract}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showExtractSuccessModal && (
          <ModalOverlay onClick={handleCloseExtractSuccess}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Success</ModalTitle>
              <ModalQuestion>Extraction Successfully, please check on my assets.</ModalQuestion>
              <ButtonGroup>
                <ConfirmButton onClick={handleCloseExtractSuccess}>
                  Close
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showBalanceExtractSuccessModal && (
          <ModalOverlay onClick={handleCloseBalanceExtractSuccess}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Success</ModalTitle>
              <ModalQuestion>Extraction Successfully, please check on my assets.</ModalQuestion>
              <ButtonGroup>
                <ConfirmButton onClick={handleCloseBalanceExtractSuccess}>
                  Close
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showTransferModal && (
          <ModalOverlay onClick={handleCancelTransfer}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCancelTransfer}>
                <X size={20} />
              </CloseButton>
              <ModalTitle>Transfer GAS</ModalTitle>
              
              <FormGroup>
                <FormLabel>Recipient UID:</FormLabel>
                <QuantityInput
                  type="text"
                  placeholder="Enter UID"
                  value={transferUid}
                  onChange={(e) => setTransferUid(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Transfer Amount:</FormLabel>
                <QuantityInput
                  type="text"
                  placeholder="Enter amount"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
              </FormGroup>

              <ButtonGroup>
                <CancelButton onClick={handleCancelTransfer}>
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={handleConfirmTransfer}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showTransferSuccessModal && (
          <ModalOverlay onClick={handleCloseTransferSuccess}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>Success</ModalTitle>
              <ModalQuestion>GAS transfer completed successfully!</ModalQuestion>
              <ButtonGroup>
                <ConfirmButton onClick={handleCloseTransferSuccess}>
                  Close
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}

        {showExtractModal && (
          <ModalOverlay onClick={handleCancelExtract}>
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCancelExtract}>
                <X size={20} />
              </CloseButton>
              <ModalTitle>Extract Income</ModalTitle>
              
              <FormGroup>
                <FormLabel>Extract Amount:</FormLabel>
                <QuantityInput
                  type="text"
                  value={extractableQuantity}
                  onChange={(e) => setExtractableQuantity(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Fee Payment Method:</FormLabel>
                <RadioGroup>
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="usdt"
                      checked={paymentMethod === 'usdt'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <RadioText>USDT(10%)</RadioText>
                  </RadioOption>
                  
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="ftl"
                      checked={paymentMethod === 'ftl'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <RadioText>FTL(5%)</RadioText>
                  </RadioOption>
                  
                  <RadioOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="gas"
                      checked={paymentMethod === 'gas'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <RadioText>GAS(10%)</RadioText>
                  </RadioOption>
                </RadioGroup>
              </FormGroup>

              <ButtonGroup>
                <ConfirmButton onClick={handleConfirmExtract}>
                  Confirm
                </ConfirmButton>
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PassiveIncomeDetailsContainer>
  );
};

export default PassiveIncomeDetails;
