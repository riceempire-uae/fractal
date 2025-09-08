import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Calendar, DollarSign, Hash, Wrench, Coins, Zap } from 'lucide-react';

const RecordsContainer = styled.div`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Content = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
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
`;

const RecordsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
`;

const RecordsIcon = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  box-shadow: 0 8px 20px rgba(245, 192, 74, 0.3);
  flex-shrink: 0;
`;

const RecordsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(245, 192, 74, 0.1);
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #f5c04a 0%, #d4a843 100%)' 
    : 'transparent'
  };
  color: ${props => props.$active ? '#0b1a2b' : '#eef5ff'};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #f5c04a 0%, #d4a843 100%)' 
      : 'rgba(245, 192, 74, 0.1)'
    };
    color: ${props => props.$active ? '#0b1a2b' : '#f5c04a'};
  }
`;

const RecordsTable = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(245, 192, 74, 0.1);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgba(245, 192, 74, 0.1);
  padding: 1rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.2);
`;

const HeaderCell = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #f5c04a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TableBody = styled.div`
  max-height: 400px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(11, 26, 43, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(245, 192, 74, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(245, 192, 74, 0.5);
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.05);
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IdCell = styled(TableCell)`
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: #f5c04a;
`;

const DateCell = styled(TableCell)`
  color: #eef5ff;
  opacity: 0.9;
`;

const AmountCell = styled(TableCell)`
  font-weight: 700;
  color: #f5c04a;
  justify-content: flex-end;
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

interface MiningIncomeRecordsProps {
  onNavigate?: (page: string) => void;
}

const MiningIncomeRecords: React.FC<MiningIncomeRecordsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ftl' | 'gas'>('ftl');

  const ftlRecords = [
    {
      id: 'FA12345',
      date: '15-01-25 14:30:15',
      amount: '89.25'
    },
    {
      id: 'FA12346',
      date: '14-01-25 13:45:30',
      amount: '92.80'
    },
    {
      id: 'FA12347',
      date: '13-01-25 12:20:45',
      amount: '87.50'
    },
    {
      id: 'FA12348',
      date: '12-01-25 11:15:20',
      amount: '95.40'
    },
    {
      id: 'FA12349',
      date: '11-01-25 10:30:10',
      amount: '91.75'
    },
    {
      id: 'FA12350',
      date: '10-01-25 09:45:35',
      amount: '88.90'
    },
    {
      id: 'FA12351',
      date: '09-01-25 08:20:25',
      amount: '94.15'
    },
    {
      id: 'FA12352',
      date: '08-01-25 07:35:40',
      amount: '86.60'
    },
    {
      id: 'FA12353',
      date: '07-01-25 06:50:15',
      amount: '93.25'
    },
    {
      id: 'FA12354',
      date: '06-01-25 05:25:50',
      amount: '90.80'
    }
  ];

  const gasRecords = [
    {
      id: 'GA12345',
      date: '15-01-25 14:30:15',
      amount: '45.50'
    },
    {
      id: 'GA12346',
      date: '14-01-25 13:45:30',
      amount: '48.20'
    },
    {
      id: 'GA12347',
      date: '13-01-25 12:20:45',
      amount: '42.75'
    },
    {
      id: 'GA12348',
      date: '12-01-25 11:15:20',
      amount: '51.30'
    },
    {
      id: 'GA12349',
      date: '11-01-25 10:30:10',
      amount: '47.85'
    },
    {
      id: 'GA12350',
      date: '10-01-25 09:45:35',
      amount: '44.60'
    },
    {
      id: 'GA12351',
      date: '09-01-25 08:20:25',
      amount: '49.75'
    },
    {
      id: 'GA12352',
      date: '08-01-25 07:35:40',
      amount: '43.20'
    },
    {
      id: 'GA12353',
      date: '07-01-25 06:50:15',
      amount: '46.90'
    },
    {
      id: 'GA12354',
      date: '06-01-25 05:25:50',
      amount: '45.15'
    }
  ];

  const currentRecords = activeTab === 'ftl' ? ftlRecords : gasRecords;

  return (
    <RecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('earnings')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>
            <Wrench size={24} />
            Mining Records
          </HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RecordsCard>
            <RecordsHeader>
              <RecordsIcon>
                <Wrench size={30} />
              </RecordsIcon>
              <RecordsTitle>Mining Income</RecordsTitle>
            </RecordsHeader>

            <TabContainer>
              <TabButton 
                $active={activeTab === 'ftl'} 
                onClick={() => setActiveTab('ftl')}
              >
                <Coins size={18} />
                FTL
              </TabButton>
              <TabButton 
                $active={activeTab === 'gas'} 
                onClick={() => setActiveTab('gas')}
              >
                <Zap size={18} />
                GAS
              </TabButton>
            </TabContainer>

            <RecordsTable>
              <TableHeader>
                <HeaderCell>
                  <Hash size={16} />
                  ID
                </HeaderCell>
                <HeaderCell>
                  <Calendar size={16} />
                  Date
                </HeaderCell>
                <HeaderCell>
                  <DollarSign size={16} />
                  Amount
                </HeaderCell>
              </TableHeader>

              <TableBody>
                {currentRecords.length > 0 ? (
                  currentRecords.map((record, index) => (
                    <TableRow key={record.id}>
                      <IdCell>{record.id}</IdCell>
                      <DateCell>{record.date}</DateCell>
                      <AmountCell>{record.amount}</AmountCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell style={{ gridColumn: 'span 3' }}>
                      <EmptyState>
                        <EmptyIcon>
                          {activeTab === 'ftl' ? <Coins size={40} /> : <Zap size={40} />}
                        </EmptyIcon>
                        <EmptyTitle>No Records Found</EmptyTitle>
                        <EmptyDescription>
                          Your {activeTab.toUpperCase()} records will appear here
                        </EmptyDescription>
                      </EmptyState>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </RecordsTable>
          </RecordsCard>
        </motion.div>
      </Content>
    </RecordsContainer>
  );
};

export default MiningIncomeRecords;
