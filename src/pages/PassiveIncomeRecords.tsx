import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Calendar, DollarSign, Hash } from 'lucide-react';

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
  justify-content: center;
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

interface PassiveIncomeRecordsProps {
  onNavigate?: (page: string) => void;
}

const PassiveIncomeRecords: React.FC<PassiveIncomeRecordsProps> = ({ onNavigate }) => {
  const passiveIncomeRecords = [
    {
      date: '15-01-25 13:14:50',
      amount: '125.50',
      type: 'ROI'
    },
    {
      date: '14-01-25 12:30:25',
      amount: '118.75',
      type: 'ROI'
    },
    {
      date: '13-01-25 11:45:15',
      amount: '132.25',
      type: 'ROI'
    },
    {
      date: '12-01-25 10:20:40',
      amount: '109.80',
      type: 'ROI'
    },
    {
      date: '11-01-25 09:15:30',
      amount: '142.30',
      type: 'ROI'
    },
    {
      date: '10-01-25 08:45:20',
      amount: '98.45',
      type: 'ROI'
    },
    {
      date: '09-01-25 07:30:10',
      amount: '156.20',
      type: 'ROI'
    },
    {
      date: '08-01-25 06:25:45',
      amount: '134.90',
      type: 'ROI'
    },
    {
      date: '07-01-25 05:40:35',
      amount: '121.60',
      type: 'ROI'
    },
    {
      date: '06-01-25 04:55:50',
      amount: '147.85',
      type: 'ROI'
    }
  ];

  return (
    <RecordsContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('earnings')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>
            <FileText size={24} />
            Passive Records
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
                <FileText size={30} />
              </RecordsIcon>
              <RecordsTitle>Transactions</RecordsTitle>
            </RecordsHeader>

            <RecordsTable>
              <TableHeader>
                <HeaderCell>
                  <Calendar size={16} />
                  Date
                </HeaderCell>
                <HeaderCell>
                  Amount
                </HeaderCell>
                <HeaderCell style={{ justifyContent: 'center', textAlign: 'center' }}>
                  Type
                </HeaderCell>
              </TableHeader>

              <TableBody>
                {passiveIncomeRecords.length > 0 ? (
                  passiveIncomeRecords.map((record, index) => (
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
                          <FileText size={40} />
                        </EmptyIcon>
                        <EmptyTitle>No Records Found</EmptyTitle>
                        <EmptyDescription>
                          Your passive income records will appear here
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

export default PassiveIncomeRecords;
