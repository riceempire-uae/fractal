import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Calendar, DollarSign, Hash, TrendingUp, Gift, Users, Star, Award, Crown } from 'lucide-react';

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
    
    @media (max-width: 768px) {
      transform: none;
    }
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
  
  @media (max-width: 768px) {
    backdrop-filter: none;
    padding: 1rem;
  }
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
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(11, 26, 43, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(245, 192, 74, 0.3);
    border-radius: 2px;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #f5c04a 0%, #d4a843 100%)' 
    : 'transparent'
  };
  color: ${props => props.$active ? '#0b1a2b' : '#eef5ff'};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  
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
  gap: 1rem;
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
  gap: 1rem;
  
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

const DateCell = styled(TableCell)`
  color: #eef5ff;
  opacity: 0.9;
`;

const AmountCell = styled(TableCell)`
  font-weight: 700;
  color: #f5c04a;
  justify-content: center;
`;

const TypeCell = styled(TableCell)`
  color: #eef5ff;
  opacity: 0.8;
  font-size: 0.8rem;
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

interface ActiveIncomeRecordsProps {
  onNavigate?: (page: string) => void;
}

const ActiveIncomeRecords: React.FC<ActiveIncomeRecordsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'generation' | 'newacc' | 'management' | 'level'>('all');

  const allRecords = [
    {
      date: '15-01-25 14:30:15',
      amount: '89.25',
      type: 'Generation Bonus'
    },
    {
      date: '14-01-25 13:45:30',
      amount: '45.50',
      type: 'New Acc Bonus'
    },
    {
      date: '13-01-25 12:20:45',
      amount: '67.80',
      type: 'Management Bonus'
    },
    {
      date: '12-01-25 11:15:20',
      amount: '32.40',
      type: 'Level Bonus'
    },
    {
      date: '11-01-25 10:30:10',
      amount: '91.75',
      type: 'Generation Bonus'
    },
    {
      date: '10-01-25 09:45:35',
      amount: '28.90',
      type: 'New Acc Bonus'
    },
    {
      date: '09-01-25 08:20:25',
      amount: '54.15',
      type: 'Management Bonus'
    },
    {
      date: '08-01-25 07:35:40',
      amount: '76.60',
      type: 'Level Bonus'
    },
    {
      date: '07-01-25 06:50:15',
      amount: '43.25',
      type: 'Generation Bonus'
    },
    {
      date: '06-01-25 05:25:50',
      amount: '58.80',
      type: 'New Acc Bonus'
    }
  ];

  const filteredRecords = activeTab === 'all' 
    ? allRecords 
    : allRecords.filter(record => {
        switch (activeTab) {
          case 'generation':
            return record.type === 'Generation Bonus';
          case 'newacc':
            return record.type === 'New Acc Bonus';
          case 'management':
            return record.type === 'Management Bonus';
          case 'level':
            return record.type === 'Level Bonus';
          default:
            return true;
        }
      });

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'all':
        return <Gift size={16} />;
      case 'generation':
        return <TrendingUp size={16} />;
      case 'newacc':
        return <Users size={16} />;
      case 'management':
        return <Award size={16} />;
      case 'level':
        return <Crown size={16} />;
      default:
        return <Gift size={16} />;
    }
  };

  return (
    <RecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('earnings')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>
            <TrendingUp size={24} />
            Active Records
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
                <TrendingUp size={30} />
              </RecordsIcon>
              <RecordsTitle>Transactions</RecordsTitle>
            </RecordsHeader>

            <TabContainer>
              <TabButton 
                $active={activeTab === 'all'} 
                onClick={() => setActiveTab('all')}
              >
                {getTabIcon('all')}
                All Bonuses
              </TabButton>
              <TabButton 
                $active={activeTab === 'generation'} 
                onClick={() => setActiveTab('generation')}
              >
                {getTabIcon('generation')}
                Generation Bonus
              </TabButton>
              <TabButton 
                $active={activeTab === 'newacc'} 
                onClick={() => setActiveTab('newacc')}
              >
                {getTabIcon('newacc')}
                New Acc Bonus
              </TabButton>
              <TabButton 
                $active={activeTab === 'management'} 
                onClick={() => setActiveTab('management')}
              >
                {getTabIcon('management')}
                Management Bonus
              </TabButton>
              <TabButton 
                $active={activeTab === 'level'} 
                onClick={() => setActiveTab('level')}
              >
                {getTabIcon('level')}
                Level Bonus
              </TabButton>
            </TabContainer>

            <RecordsTable>
              <TableHeader>
                <HeaderCell>
                  <Calendar size={16} />
                  Date
                </HeaderCell>
                <HeaderCell>
                  Amount
                </HeaderCell>
                <HeaderCell>
                  Type
                </HeaderCell>
              </TableHeader>

              <TableBody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record, index) => (
                    <TableRow key={index}>
                      <DateCell>{record.date}</DateCell>
                      <AmountCell>{record.amount}</AmountCell>
                      <TypeCell>{record.type}</TypeCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell style={{ gridColumn: 'span 3' }}>
                      <EmptyState>
                        <EmptyIcon>
                          <TrendingUp size={40} />
                        </EmptyIcon>
                        <EmptyTitle>No Records Found</EmptyTitle>
                        <EmptyDescription>
                          Your {activeTab === 'all' ? 'bonus' : activeTab.replace('newacc', 'new account')} records will appear here
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

export default ActiveIncomeRecords;
