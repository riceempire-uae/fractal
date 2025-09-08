import React from 'react';
import styled from 'styled-components';
import { Wallet, Globe, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ theme }) => theme.colors.gradient.glass};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 1.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AddressHolder = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cardHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cardHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-width: 120px;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cardHover};
  }

  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg};
  }
`;

const Header: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ZH', name: '中文' },
    { code: 'JA', name: '日本語' },
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>
            <Image 
              src="/logo.svg" 
              alt="Fractal Logo" 
              width={40} 
              height={40}
              priority
            />
          </LogoIcon>
          
        </Logo>
        
        <RightSection>
          <AddressHolder>
            <Wallet size={20} />
            0x1234...5678
          </AddressHolder>
          
          <LanguageSelector>
            <LanguageButton onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
              <Globe size={20} />
              {selectedLanguage}
              <ChevronDown size={16} />
            </LanguageButton>
            
            {isLanguageOpen && (
              <LanguageDropdown>
                {languages.map((lang) => (
                  <LanguageOption
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                  >
                    {lang.name}
                  </LanguageOption>
                ))}
              </LanguageDropdown>
            )}
          </LanguageSelector>
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
