import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(245, 192, 74, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(245, 192, 74, 0.6), 0 0 60px rgba(245, 192, 74, 0.3);
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1a2b 0%, #1a2a3a 50%, #0b1a2b 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(245, 192, 74, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%);
  animation: ${pulse} 4s ease-in-out infinite;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled.div<{ $delay: number; $duration: number; $x: number; $y: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, rgba(245, 192, 74, 0.3), rgba(59, 130, 246, 0.3));
  border-radius: 50%;
  animation: ${float} ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  position: relative;
`;

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 900;
  color: #0b1a2b;
  animation: ${glow} 2s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(245, 192, 74, 0.3);
`;

const LogoRing = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(245, 192, 74, 0.3);
  border-radius: 40px;
  animation: ${rotate} 3s linear infinite;
`;

const LoadingText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 1rem 0;
  text-align: center;
  background: linear-gradient(135deg, #eef5ff 0%, #f5c04a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #eef5ff;
  opacity: 0.8;
  margin: 0 0 3rem 0;
  text-align: center;
  font-weight: 300;
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(245, 192, 74, 0.2);
  border-top: 3px solid #f5c04a;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  background: #f5c04a;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const ProgressContainer = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(245, 192, 74, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #f5c04a 0%, #d4a843 100%);
  border-radius: 2px;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(245, 192, 74, 0.5);
`;

const ProgressText = styled.div`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
  text-align: center;
`;

const PoweredByText = styled.div`
  font-size: 0.8rem;
  color: #f5c04a;
  opacity: 0.6;
  text-align: center;
  margin: 1rem 0;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  max-width: 400px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(245, 192, 74, 0.1);
  border-radius: 8px;
  color: #eef5ff;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const FeatureIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #f5c04a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #0b1a2b;
  font-weight: bold;
`;

interface LoadingProps {
  onComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    const loadingSteps = [
      { progress: 20, text: 'Loading components...' },
      { progress: 40, text: 'Connecting to secure network...' },
      { progress: 60, text: 'Syncing blocks data...' },
      { progress: 80, text: 'Preparing interface...' },
      { progress: 100, text: 'Entering platform...' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 800);

    // Fallback timeout in case animations don't work
    const fallbackTimeout = setTimeout(() => {
      onComplete();
    }, 10000); // 10 seconds max

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [onComplete, isClient]);

  // Fallback for when styled-components doesn't work
  if (!isClient) {
    return (
      <div className="loading-container">
        <div className="loading-logo">F</div>
        <div className="loading-text">Fractal</div>
        <div className="loading-subtext">Decentralized Finance Platform</div>
        <div className="loading-spinner"></div>
        <div className="loading-progress">
          <div className="loading-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-status">{loadingText}</div>
      </div>
    );
  }

  return (
    <LoadingContainer>
      <BackgroundPattern />
      
      <FloatingElements>
        <FloatingElement $delay={0} $duration={6} $x={10} $y={20} />
        <FloatingElement $delay={1} $duration={8} $x={80} $y={30} />
        <FloatingElement $delay={2} $duration={7} $x={20} $y={70} />
        <FloatingElement $delay={3} $duration={9} $x={70} $y={80} />
        <FloatingElement $delay={4} $duration={5} $x={50} $y={10} />
        <FloatingElement $delay={5} $duration={6} $x={90} $y={60} />
      </FloatingElements>

      <MainContent>
        <LogoContainer>
          <Logo>F</Logo>
          <LogoRing />
        </LogoContainer>

        <LoadingText>Fractal Community</LoadingText>
        <SubText>Decentralized Finance Platform</SubText>

        <LoadingSpinner>
          <Spinner />
          <LoadingDots>
            <Dot $delay={0} />
            <Dot $delay={0.2} />
            <Dot $delay={0.4} />
          </LoadingDots>
        </LoadingSpinner>

        <ProgressContainer>
          <ProgressBar $progress={progress} />
        </ProgressContainer>

        <ProgressText>{loadingText}</ProgressText>

        <PoweredByText>Powered by Fractal Technology</PoweredByText>

        <FeatureList>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            AI-Powered Trading
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            Secure Staking
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            DeFi Mining
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            Cross-Chain
          </FeatureItem>
        </FeatureList>
      </MainContent>
    </LoadingContainer>
  );
};

export default Loading;
