import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, Megaphone, Calendar, Clock, ChevronRight } from 'lucide-react';

const AnnouncementContainer = styled.div`
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

const AnnouncementCard = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 16px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: rgba(245, 192, 74, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const AnnouncementHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AnnouncementIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  flex-shrink: 0;
`;

const AnnouncementInfo = styled.div`
  flex: 1;
`;

const AnnouncementTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 0.5rem 0;
`;

const AnnouncementMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnnouncementBody = styled.div`
  padding: 1.5rem;
`;

const AnnouncementContent = styled.p`
  font-size: 1rem;
  color: #eef5ff;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  opacity: 0.9;
`;

const AnnouncementFooter = styled.div`
  padding: 1rem 1.5rem;
  background: rgba(11, 26, 43, 0.6);
  border-top: 1px solid rgba(245, 192, 74, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(245, 192, 74, 0.1);
  border: 1px solid rgba(245, 192, 74, 0.3);
  border-radius: 8px;
  color: #f5c04a;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(245, 192, 74, 0.2);
    transform: translateY(-1px);
  }
`;


const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
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

interface AnnouncementProps {
  onNavigate?: (page: string) => void;
}

const Announcement: React.FC<AnnouncementProps> = ({ onNavigate }) => {
  const [announcements] = useState([
    {
      id: 1,
      title: '🎉 New AI Fund Launch',
      content: 'We are excited to announce the launch of our revolutionary 360° AI Fund! This new investment opportunity offers enhanced staking rewards with up to 25% APY. Early investors will receive exclusive benefits and priority access to future features.',
      date: '15-01-25',
      time: '14:30',
      readMore: true
    },
    {
      id: 2,
      title: '⚡ System Maintenance Scheduled',
      content: 'Scheduled maintenance will be performed on our trading system on January 20th, 2025 from 02:00 to 04:00 UTC. During this time, trading and withdrawal functions will be temporarily unavailable. We apologize for any inconvenience.',
      date: '14-01-25',
      time: '09:15',
      readMore: false
    },
    {
      id: 3,
      title: '🔒 Security Update',
      content: 'We have implemented additional security measures to protect your assets. Please ensure your account is secured with two-factor authentication. Contact support if you need assistance setting up 2FA.',
      date: '13-01-25',
      time: '16:45',
      readMore: true
    },
    {
      id: 4,
      title: '📈 FTL Token Price Update',
      content: 'FTL token has reached a new all-time high! The current price is $0.25, representing a 150% increase from last month. Thank you to our community for the continued support and trust.',
      date: '12-01-25',
      time: '11:20',
      readMore: false
    },
    {
      id: 5,
      title: '🎁 Referral Program Enhancement',
      content: 'Our referral program has been enhanced with new rewards and benefits. Refer friends and earn up to 10% commission on their trading volume. Additional bonuses are available for top referrers.',
      date: '11-01-25',
      time: '13:10',
      readMore: true
    }
  ]);

  return (
    <AnnouncementContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Announcements</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {announcements.length > 0 ? (
            announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AnnouncementCard>
                  <AnnouncementHeader>
                    <AnnouncementIcon>
                      <Megaphone size={24} />
                    </AnnouncementIcon>
                    <AnnouncementInfo>
                      <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                      <AnnouncementMeta>
                        <MetaItem>
                          <Calendar size={16} />
                          {announcement.date}
                        </MetaItem>
                        <MetaItem>
                          <Clock size={16} />
                          {announcement.time}
                        </MetaItem>
                      </AnnouncementMeta>
                    </AnnouncementInfo>
                  </AnnouncementHeader>
                  
                  <AnnouncementBody>
                    <AnnouncementContent>
                      {announcement.content}
                    </AnnouncementContent>
                  </AnnouncementBody>
                  
                  {announcement.readMore && (
                    <AnnouncementFooter>
                      <div></div>
                      <ReadMoreButton onClick={() => onNavigate?.('announcement-detail')}>
                        Read More
                        <ChevronRight size={16} />
                      </ReadMoreButton>
                    </AnnouncementFooter>
                  )}
                </AnnouncementCard>
              </motion.div>
            ))
          ) : (
            <EmptyState>
              <EmptyIcon>
                <Megaphone size={40} />
              </EmptyIcon>
              <EmptyTitle>No Announcements</EmptyTitle>
              <EmptyDescription>
                Check back later for the latest updates and news
              </EmptyDescription>
            </EmptyState>
          )}
        </motion.div>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
