import React from 'react';
import styled from 'styled-components';
import { Download, Figma } from 'lucide-react';
import { exportToFigma } from '../utils/figmaExport';

const ExportButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 20px;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    transition: none;
  }
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
    
    @media (max-width: 768px) {
      transform: none;
    }
  }

  &:active {
    transform: translateY(-2px);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    bottom: 140px;
    right: 15px;
    padding: 0.875rem 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const ExportButtonComponent: React.FC = () => {
  const handleExport = () => {
    try {
      const figmaData = exportToFigma();
      console.log('Figma design system exported:', figmaData);
      
      // Show success message
      const event = new CustomEvent('toast', {
        detail: {
          message: 'Design system exported to Figma format!',
          type: 'success',
        },
      });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Export failed:', error);
      
      // Show error message
      const event = new CustomEvent('toast', {
        detail: {
          message: 'Export failed. Please try again.',
          type: 'error',
        },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <ExportButton onClick={handleExport}>
      <Figma size={20} />
      Export to Figma
      <Download size={16} />
    </ExportButton>
  );
};

export default ExportButtonComponent;
