import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Share2, QrCode, Download } from 'lucide-react';

const InvitationContainer = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
`;

const InvitationCard = styled.div`
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

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b1a2b;
  margin: 0 auto 1rem;
  box-shadow: 0 8px 20px rgba(245, 192, 74, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #f5c04a;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: #eef5ff;
  opacity: 0.8;
  margin: 0;
`;

const LinkSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #eef5ff;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LinkContainer = styled.div`
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const LinkText = styled.div`
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #f5c04a;
  word-break: break-all;
  line-height: 1.4;
`;

const CopyButton = styled.button`
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 8px;
  color: #0b1a2b;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
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
`;

const QRCodeSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const QRCodeContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: inline-block;
  margin: 1rem 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
`;

const QRCodeText = styled.p`
  font-size: 0.875rem;
  color: #eef5ff;
  opacity: 0.8;
  margin: 1rem 0 0 0;
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%);
  border: 2px solid rgba(245, 192, 74, 0.3);
  border-radius: 12px;
  color: #f5c04a;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(245, 192, 74, 0.1);
    border-color: #f5c04a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.2);
    
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

interface InvitationLinkProps {
  onNavigate?: (page: string) => void;
}

const InvitationLink: React.FC<InvitationLinkProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  
  const referralLink = 'http://dapp.fractaltech.ai/wap/#/?intro=0xb48dbd5fe736124F9AdCE253393B135794cc6d38';
  const qrCodeData = 'https://fractal.app/ref/ABC123XYZ';
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Fractal Community',
          text: 'Join me on Fractal - the future of decentralized finance!',
          url: referralLink,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying link
      handleCopyLink();
    }
  };
  
  const handleDownloadQR = () => {
    // Create a link to download the QR code
    const link = document.createElement('a');
    link.href = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=hhttp://dapp.fractaltech.ai/wap/#/?intro=0xb48dbd5fe736124F9AdCE253393B135794cc6d38';
    link.download = 'fractal-referral-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <InvitationContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Invitation Link</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <InvitationCard>
            <BackgroundPattern />
            <CardHeader>
              <CardIcon>
                <Share2 size={32} />
              </CardIcon>
              <CardTitle>Invite Friends</CardTitle>
              <CardSubtitle>Share your referral link and earn rewards together</CardSubtitle>
            </CardHeader>

            <LinkSection>
              <SectionTitle>
                <Copy size={20} />
                Your Referral Link
              </SectionTitle>
              <LinkContainer>
                <LinkText>{referralLink}</LinkText>
                <CopyButton onClick={handleCopyLink}>
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </LinkContainer>
            </LinkSection>

            <QRCodeSection>
              <SectionTitle>
                <QrCode size={20} />
                QR Code
              </SectionTitle>
              <QRCodeContainer>
                <QRCodeImage 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http://dapp.fractaltech.ai/wap/#/?intro=0xb48dbd5fe736124F9AdCE253393B135794cc6d38" 
                  alt="Fractal Referral QR Code"
                  onError={(e) => {
                    // Fallback if QR code image is not found
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div style={{ 
                  display: 'none', 
                  width: '200px', 
                  height: '200px', 
                  background: '#f8f9fa', 
                  border: '2px solid #e9ecef', 
                  borderRadius: '8px', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#6c757d', 
                  fontSize: '0.875rem',
                  margin: '0 auto'
                }}>
                  QR Code
                  <br />
                  (200x200)
                </div>
              </QRCodeContainer>
              <QRCodeText>Scan to join Fractal Community</QRCodeText>
            </QRCodeSection>

            <ActionButtons>
              <ActionButton onClick={handleShare}>
                <Share2 size={20} />
                Share
              </ActionButton>
              <ActionButton onClick={handleDownloadQR}>
                <Download size={20} />
                Download
              </ActionButton>
            </ActionButtons>

          </InvitationCard>
        </motion.div>
      </Content>
    </InvitationContainer>
  );
};

export default InvitationLink;
