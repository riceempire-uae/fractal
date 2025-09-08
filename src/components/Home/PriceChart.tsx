import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ChartIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
`;

const ChartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeframeSelector = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

const TimeframeButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.gradient.primary : 'transparent'};
  border: none;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.background : theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.gradient.primary : theme.colors.cardHover};
  }
`;

const MoreButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient.glass};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cardHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const PriceChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ $positive }) => $positive ? '#4ade80' : '#ef4444'};
`;

const ChartWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const PriceChart: React.FC = () => {
  const [timeframe, setTimeframe] = React.useState('24h');
  
  // Sample data for the chart
  const data = [
    { time: '00:00', price: 2.45, volume: 1000 },
    { time: '04:00', price: 2.52, volume: 1200 },
    { time: '08:00', price: 2.38, volume: 800 },
    { time: '12:00', price: 2.61, volume: 1500 },
    { time: '16:00', price: 2.58, volume: 1100 },
    { time: '20:00', price: 2.67, volume: 1300 },
    { time: '24:00', price: 2.73, volume: 1400 },
  ];

  const timeframes = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
  ];

  const currentPrice = data[data.length - 1].price;
  const previousPrice = data[0].price;
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;
  const isPositive = priceChange >= 0;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: '#1a2a3a',
          border: '1px solid #3a4a5a',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}>
          <p style={{ color: '#eef5ff', margin: '0 0 4px 0', fontSize: '14px' }}>
            {`Time: ${label}`}
          </p>
          <p style={{ color: '#f5c04a', margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
            {`Price: $${payload[0].value.toFixed(2)}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>
          <ChartIcon>
            <TrendingUp size={20} />
          </ChartIcon>
          FTL
        </ChartTitle>
        
        <ChartControls>
          <TimeframeSelector>
            {timeframes.map((tf) => (
              <TimeframeButton
                key={tf.value}
                $active={timeframe === tf.value}
                onClick={() => setTimeframe(tf.value)}
              >
                {tf.label}
              </TimeframeButton>
            ))}
          </TimeframeSelector>
          
          
        </ChartControls>
      </ChartHeader>

      <PriceInfo>
        <CurrentPrice>${currentPrice.toFixed(2)}</CurrentPrice>
        <PriceChange $positive={isPositive}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {Math.abs(priceChange).toFixed(2)}%
        </PriceChange>
      </PriceInfo>

      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f5c04a" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f5c04a" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#3a4a5a" />
            <XAxis 
              dataKey="time" 
              stroke="#eef5ff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#eef5ff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 0.1', 'dataMax + 0.1']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#f5c04a"
              strokeWidth={2}
              fill="url(#priceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  );
};

export default PriceChart;
