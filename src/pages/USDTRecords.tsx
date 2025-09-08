import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, List, ArrowDown, ArrowUp } from 'lucide-react';

const USDTRecordsContainer = styled.div`
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

const TabContainer = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 16px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  margin-bottom: 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const TabHeader = styled.div`
  display: flex;
  background: rgba(11, 26, 43, 0.6);
  border-bottom: 1px solid rgba(245, 192, 74, 0.2);
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 1rem;
  background: ${({ $active }) => $active ? 'rgba(245, 192, 74, 0.1)' : 'transparent'};
  border: none;
  color: ${({ $active }) => $active ? '#f5c04a' : '#eef5ff'};
  font-weight: ${({ $active }) => $active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
  }
`;

const RecordsTable = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 16px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  overflow: hidden;
`;

const TableHeader = styled.div`
  background: rgba(11, 26, 43, 0.6);
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.2);
`;

const TableHeaderCell = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #f5c04a;
  text-align: center;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(11, 26, 43, 0.6);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  text-align: center;
`;

const DateCell = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.8;
  text-align: left;
`;

const AmountCell = styled.div<{ $type: 'in' | 'out' }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $type }) => $type === 'in' ? '#22c55e' : '#ef4444'};
  text-align: center;
`;

const TypeCell = styled.div<{ $type: 'in' | 'out' }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $type }) => $type === 'in' ? '#22c55e' : '#ef4444'};
  text-align: center;
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

interface USDTRecordsProps {
  onNavigate?: (page: string) => void;
}

const USDTRecords: React.FC<USDTRecordsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'in' | 'out'>('all');

  const allRecords = [
    {
      id: 1,
      date: '2025-01-15 14:30:25',
      amount: '1,250.50',
      type: 'in' as const,
      description: 'Deposit'
    },
    {
      id: 2,
      date: '2025-01-15 10:15:10',
      amount: '500.00',
      type: 'out' as const,
      description: 'Withdrawal'
    },
    {
      id: 3,
      date: '2025-01-14 16:45:30',
      amount: '2,100.75',
      type: 'in' as const,
      description: 'Deposit'
    },
    {
      id: 4,
      date: '2025-01-14 09:20:15',
      amount: '750.25',
      type: 'out' as const,
      description: 'Withdrawal'
    },
    {
      id: 5,
      date: '2025-01-13 18:10:45',
      amount: '3,500.00',
      type: 'in' as const,
      description: 'Deposit'
    },
    {
      id: 6,
      date: '2025-01-13 12:30:20',
      amount: '150.75',
      type: 'in' as const,
      description: 'Passive Income'
    },
    {
      id: 7,
      date: '2025-01-12 15:45:10',
      amount: '85.50',
      type: 'in' as const,
      description: 'Active Income'
    },
    {
      id: 8,
      date: '2025-01-12 08:20:35',
      amount: '200.00',
      type: 'in' as const,
      description: 'Passive Income'
    },
    {
      id: 9,
      date: '2025-01-11 14:15:45',
      amount: '120.25',
      type: 'in' as const,
      description: 'Active Income'
    }
  ];

  const filteredRecords = activeTab === 'all' 
    ? allRecords 
    : allRecords.filter(record => record.type === activeTab);

  return (
    <USDTRecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('assets')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>USDT Records</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TabContainer>
            <TabHeader>
              <TabButton 
                $active={activeTab === 'all'} 
                onClick={() => setActiveTab('all')}
              >
                <List size={16} />
                All
              </TabButton>
              <TabButton 
                $active={activeTab === 'in'} 
                onClick={() => setActiveTab('in')}
              >
                <ArrowDown size={16} />
                In
              </TabButton>
              <TabButton 
                $active={activeTab === 'out'} 
                onClick={() => setActiveTab('out')}
              >
                <ArrowUp size={16} />
                Out
              </TabButton>
            </TabHeader>
          </TabContainer>

          <RecordsTable>
            <TableHeader>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
            </TableHeader>
            
            <TableBody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <TableRow key={record.id}>
                    <DateCell>
                      {record.date}
                    </DateCell>
                    <AmountCell $type={record.type}>
                      {record.amount}
                    </AmountCell>
                    <TypeCell $type={record.type}>
                      {record.description}
                    </TypeCell>
                  </TableRow>
                ))
              ) : (
                <EmptyState>
                  <EmptyIcon>
                    <FileText size={40} />
                  </EmptyIcon>
                  <EmptyTitle>No Records Found</EmptyTitle>
                  <EmptyDescription>
                    Your USDT transaction records will appear here
                  </EmptyDescription>
                </EmptyState>
              )}
            </TableBody>
          </RecordsTable>
        </motion.div>
      </Content>
    </USDTRecordsContainer>
  );
};

export default USDTRecords;
