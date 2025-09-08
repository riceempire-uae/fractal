import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, Megaphone, Calendar, Clock, Share2 } from 'lucide-react';

const AnnouncementDetailContainer = styled.div`
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
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
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


const ActionButton = styled.button`
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
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const Content = styled.div`
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AnnouncementCard = styled.div`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border-radius: 20px;
  border: 1px solid rgba(245, 192, 74, 0.2);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    backdrop-filter: none;
  }
`;

const AnnouncementHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(245, 192, 74, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const AnnouncementIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  flex-shrink: 0;
`;

const AnnouncementInfo = styled.div`
  flex: 1;
`;

const AnnouncementTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

const AnnouncementMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
  color: #eef5ff;
  opacity: 0.8;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnnouncementBody = styled.div`
  padding: 2rem;
`;

const AnnouncementContent = styled.div`
  font-size: 1.1rem;
  color: #eef5ff;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  
  p {
    margin: 0 0 1.5rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AnnouncementFooter = styled.div`
  padding: 2rem;
  background: rgba(11, 26, 43, 0.6);
  border-top: 1px solid rgba(245, 192, 74, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
`;

const FooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RelatedSection = styled.div`
  margin-top: 3rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 1.5rem 0;
`;

const RelatedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RelatedItem = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border: 1px solid rgba(245, 192, 74, 0.1);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(11, 26, 43, 0.8);
    border-color: rgba(245, 192, 74, 0.3);
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const RelatedItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.5rem;
`;

const RelatedItemMeta = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
`;

interface AnnouncementDetailProps {
  onNavigate?: (page: string) => void;
}

const AnnouncementDetail: React.FC<AnnouncementDetailProps> = ({ onNavigate }) => {
  // This would typically receive the announcement ID as a prop or from URL params
  // For now, we'll show a sample detailed announcement
  const announcement = {
    id: 1,
    title: '🎉 New AI Fund Launch',
    content: `
      <p>We are excited to announce the launch of our revolutionary 360° AI Fund! This groundbreaking investment opportunity represents a major milestone in our platform's evolution and offers unprecedented benefits to our community.</p>
      
      <p>This new fund leverages cutting-edge artificial intelligence technology to optimize investment strategies and maximize returns. With up to 25% APY, early investors will receive exclusive benefits including:</p>
      
      <ul>
        <li>Priority access to future features and updates</li>
        <li>Exclusive investment opportunities</li>
        <li>Enhanced staking rewards</li>
        <li>Dedicated customer support</li>
        <li>Early withdrawal privileges</li>
      </ul>
      
      <p>The fund is designed to provide sustainable, long-term growth while maintaining the highest standards of security and transparency. Our AI algorithms continuously analyze market conditions and adjust strategies to optimize performance.</p>
      
      <p>Don't miss this opportunity to be part of the future of decentralized finance. The fund will be available for investment starting January 20th, 2025 at 00:00 UTC.</p>
    `,
    date: '15-01-25',
    time: '14:30',
    author: 'Fractal Team'
  };

  const relatedAnnouncements = [
    {
      id: 2,
      title: '⚡ System Maintenance Scheduled',
      date: '14-01-25',
      time: '09:15'
    },
    {
      id: 3,
      title: '🔒 Security Update',
      date: '13-01-25',
      time: '16:45'
    },
    {
      id: 4,
      title: '📈 FTL Token Price Update',
      date: '12-01-25',
      time: '11:20'
    }
  ];

  return (
    <AnnouncementDetailContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('announcement')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Announcement Details</HeaderTitle>
        </HeaderLeft>
        
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnnouncementCard>
            <AnnouncementHeader>
              <AnnouncementIcon>
                <Megaphone size={32} />
              </AnnouncementIcon>
              <AnnouncementInfo>
                <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                <AnnouncementMeta>
                  <MetaItem>
                    <Calendar size={20} />
                    {announcement.date}
                  </MetaItem>
                  <MetaItem>
                    <Clock size={20} />
                    {announcement.time}
                  </MetaItem>
                </AnnouncementMeta>
              </AnnouncementInfo>
            </AnnouncementHeader>
            
            <AnnouncementBody>
              <AnnouncementContent dangerouslySetInnerHTML={{ __html: announcement.content }} />
            </AnnouncementBody>
            
            <AnnouncementFooter>
              <FooterInfo>
                <span>By {announcement.author}</span>
              </FooterInfo>
              
              <FooterActions>
                <ActionButton>
                  <Share2 size={16} />
                  Share
                </ActionButton>
              </FooterActions>
            </AnnouncementFooter>
          </AnnouncementCard>

          <RelatedSection>
            <RelatedTitle>Related Announcements</RelatedTitle>
            <RelatedList>
              {relatedAnnouncements.map((item) => (
                <RelatedItem key={item.id} onClick={() => onNavigate?.('announcement')}>
                  <RelatedItemTitle>{item.title}</RelatedItemTitle>
                  <RelatedItemMeta>
                    {item.date} • {item.time}
                  </RelatedItemMeta>
                </RelatedItem>
              ))}
            </RelatedList>
          </RelatedSection>
        </motion.div>
      </Content>
    </AnnouncementDetailContainer>
  );
};

export default AnnouncementDetail;
