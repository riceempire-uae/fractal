import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  DollarSign,
  Coins,
  FileText,
  X
} from 'lucide-react';

const AssetsContainer = styled.div`
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

const AssetCard = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 16px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
  margin-bottom: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(245, 192, 74, 0.3);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const AssetHeader = styled.div<{ $bgColor: string }>`
  background: ${({ $bgColor }) => $bgColor};
  padding: 1.5rem;
  position: relative;
  border-radius: 16px 16px 0 0;
`;

const AssetHeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AssetHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AssetHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AssetIcon = styled.div<{ $bgColor: string }>`
  width: 50px;
  height: 50px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const AssetInfo = styled.div`
  color: white;
`;

const AssetName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const AssetBalance = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const BalanceLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
`;

const AssetBody = styled.div`
  background: #1a2a3a;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 0 0 16px 16px;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 1rem;
  
  &:hover {
    transform: scale(1.05);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const ActionIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(245, 192, 74, 0.1);
  border: 2px solid #f5c04a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #f5c04a;
  }
`;

const ActionText = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
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
  margin: 0 0 1.5rem 0;
  text-align: center;
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

const AmountInput = styled.input`
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

const ApproveButton = styled.button`
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

const DepositButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
  }
`;

const AmountDisplay = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  color: #eef5ff;
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
`;

const WithdrawButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
  }
`;

const SuccessButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
  }
`;

const ModalQuestion = styled.p`
  font-size: 1rem;
  color: #eef5ff;
  opacity: 0.8;
  margin: 0 0 2rem 0;
  text-align: center;
  font-style: italic;
`;

interface AssetsProps {
  onNavigate?: (page: string) => void;
}

const Assets: React.FC<AssetsProps> = ({ onNavigate }) => {
  const [showDepositModal, setShowDepositModal] = React.useState(false);
  const [showApproveModal, setShowApproveModal] = React.useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = React.useState(false);
  const [showWithdrawSuccessModal, setShowWithdrawSuccessModal] = React.useState(false);
  const [depositAmount, setDepositAmount] = React.useState('');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [selectedAsset, setSelectedAsset] = React.useState('');

  const assets = [
    {
      name: 'Tether USDT',
      symbol: 'T',
      balance: '6,870.40',
      headerColor: '#1f2937',
      iconColor: '#16a34a',
    },
    {
      name: 'FTL TOKEN',
      symbol: 'F',
      balance: '897.7381',
      headerColor: '#1f2937',
      iconColor: '#f97316',
    },
  ];

  const handleDeposit = (assetName: string) => {
    setSelectedAsset(assetName);
    setShowDepositModal(true);
  };

  const handleCloseDeposit = () => {
    setShowDepositModal(false);
    setDepositAmount('');
    setSelectedAsset('');
  };

  const handleApproveDeposit = () => {
    if (depositAmount) {
      setShowDepositModal(false);
      setShowApproveModal(true);
    }
  };

  const handleCloseApprove = () => {
    setShowApproveModal(false);
    setDepositAmount('');
    setSelectedAsset('');
  };

  const handleConfirmDeposit = () => {
    console.log(`Depositing ${depositAmount} ${selectedAsset}`);
    // Add deposit logic here
    handleCloseApprove();
  };

  const handleWithdraw = (assetName: string) => {
    setSelectedAsset(assetName);
    setShowWithdrawModal(true);
  };

  const handleCloseWithdraw = () => {
    setShowWithdrawModal(false);
    setWithdrawAmount('');
    setSelectedAsset('');
  };

  const handleConfirmWithdraw = () => {
    if (withdrawAmount) {
      console.log(`Withdrawing ${withdrawAmount} ${selectedAsset}`);
      // Add withdrawal logic here
      setShowWithdrawModal(false);
      setShowWithdrawSuccessModal(true);
    }
  };

  const handleCloseWithdrawSuccess = () => {
    setShowWithdrawSuccessModal(false);
    setWithdrawAmount('');
    setSelectedAsset('');
  };

  return (
    <AssetsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>My Assets</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {assets.map((asset, index) => (
            <AssetCard key={index}>
              <AssetHeader $bgColor={asset.headerColor}>
                <AssetHeaderTop>
                  <AssetIcon $bgColor={asset.iconColor}>
                    {asset.symbol}
                  </AssetIcon>
                  <AssetInfo>
                    <AssetName>{asset.name}</AssetName>
                  </AssetInfo>
                </AssetHeaderTop>
                <AssetHeaderBottom>
                  <BalanceLabel>Available Balance</BalanceLabel>
                  <AssetBalance>{asset.balance}</AssetBalance>
                </AssetHeaderBottom>
              </AssetHeader>
              
              <AssetBody>
                <ActionButton onClick={() => handleDeposit(asset.name)}>
                  <ActionIcon>
                    <ArrowDown size={16} />
                  </ActionIcon>
                  <ActionText>Deposit</ActionText>
                </ActionButton>
                
                <ActionButton onClick={() => handleWithdraw(asset.name)}>
                  <ActionIcon>
                    <ArrowUp size={16} />
                  </ActionIcon>
                  <ActionText>Withdraw</ActionText>
                </ActionButton>
                
                <ActionButton onClick={() => onNavigate?.('usdt-records')}>
                  <ActionIcon>
                    <FileText size={16} />
                  </ActionIcon>
                  <ActionText>Records</ActionText>
                </ActionButton>
              </AssetBody>
            </AssetCard>
          ))}
        </motion.div>
      </Content>

      {showDepositModal && (
        <ModalOverlay onClick={handleCloseDeposit}>
          <ModalContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleCloseDeposit}>
              <X size={20} />
            </CloseButton>
            <ModalTitle>Approve {selectedAsset}</ModalTitle>
            
            <FormGroup>
              <FormLabel>Amount:</FormLabel>
              <AmountInput
                type="text"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </FormGroup>

            <ButtonGroup>
              <CancelButton onClick={handleCloseDeposit}>
                Cancel
              </CancelButton>
              <ApproveButton onClick={handleApproveDeposit}>
                Approve {selectedAsset}
              </ApproveButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {showApproveModal && (
        <ModalOverlay onClick={handleCloseApprove}>
          <ModalContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleCloseApprove}>
              <X size={20} />
            </CloseButton>
            <ModalTitle>Deposit {selectedAsset}</ModalTitle>
            
            <FormGroup>
              <FormLabel>Amount:</FormLabel>
              <AmountDisplay>{depositAmount} {selectedAsset}</AmountDisplay>
            </FormGroup>

            <ButtonGroup>
              <CancelButton onClick={handleCloseApprove}>
                Cancel
              </CancelButton>
              <DepositButton onClick={handleConfirmDeposit}>
                Deposit
              </DepositButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {showWithdrawModal && (
        <ModalOverlay onClick={handleCloseWithdraw}>
          <ModalContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleCloseWithdraw}>
              <X size={20} />
            </CloseButton>
            <ModalTitle>Withdraw {selectedAsset}</ModalTitle>
            
            <FormGroup>
              <FormLabel>Amount:</FormLabel>
              <AmountInput
                type="text"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </FormGroup>

            <ButtonGroup>
              <CancelButton onClick={handleCloseWithdraw}>
                Cancel
              </CancelButton>
              <WithdrawButton onClick={handleConfirmWithdraw}>
                Confirm
              </WithdrawButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {showWithdrawSuccessModal && (
        <ModalOverlay onClick={handleCloseWithdrawSuccess}>
          <ModalContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalTitle>Success</ModalTitle>
            <ModalQuestion>Withdrawal completed successfully!</ModalQuestion>
            <ButtonGroup>
              <SuccessButton onClick={handleCloseWithdrawSuccess}>
                Close
              </SuccessButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </AssetsContainer>
  );
};

export default Assets;
