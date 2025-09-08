import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Shield, Check, AlertCircle } from 'lucide-react';

const PasswordContainer = styled.div`
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
  max-width: 500px;
  margin: 0 auto;
`;

const PasswordCard = styled.div`
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

const PasswordHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PasswordIcon = styled.div`
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
`;

const PasswordTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #eef5ff;
  margin: 0 0 0.5rem 0;
`;

const PasswordSubtitle = styled.p`
  font-size: 0.9rem;
  color: #eef5ff;
  opacity: 0.7;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #eef5ff;
  margin-bottom: 0.25rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(11, 26, 43, 0.8);
  border: 2px solid rgba(245, 192, 74, 0.2);
  border-radius: 12px;
  padding: 1rem 3rem 1rem 1rem;
  color: #eef5ff;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #eef5ff;
    opacity: 0.5;
  }
  
  &:focus {
    border-color: rgba(245, 192, 74, 0.6);
    box-shadow: 0 0 0 3px rgba(245, 192, 74, 0.1);
  }
  
  &:invalid {
    border-color: rgba(239, 68, 68, 0.6);
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #eef5ff;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #f5c04a;
    background: rgba(245, 192, 74, 0.1);
  }
`;

const PasswordStrength = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const StrengthBar = styled.div<{ $strength: number }>`
  height: 4px;
  background: ${props => {
    if (props.$strength === 0) return 'rgba(107, 114, 128, 0.3)';
    if (props.$strength === 1) return 'rgba(239, 68, 68, 0.6)';
    if (props.$strength === 2) return 'rgba(245, 192, 74, 0.6)';
    if (props.$strength === 3) return 'rgba(34, 197, 94, 0.6)';
    return 'rgba(107, 114, 128, 0.3)';
  }};
  border-radius: 2px;
  flex: 1;
  transition: all 0.3s ease;
`;

const StrengthText = styled.div<{ $strength: number }>`
  font-size: 0.75rem;
  color: ${props => {
    if (props.$strength === 0) return '#6b7280';
    if (props.$strength === 1) return '#ef4444';
    if (props.$strength === 2) return '#f5c04a';
    if (props.$strength === 3) return '#22c55e';
    return '#6b7280';
  }};
  font-weight: 600;
  margin-top: 0.25rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #22c55e;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #f5c04a 0%, #d4a843 100%);
  border: none;
  border-radius: 12px;
  color: #0b1a2b;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(245, 192, 74, 0.4);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
  
  &:active {
    transform: translateY(0);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const PasswordRequirements = styled.div`
  background: rgba(11, 26, 43, 0.6);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid rgba(245, 192, 74, 0.1);
`;

const RequirementsTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #eef5ff;
  margin: 0 0 0.75rem 0;
`;

const Requirement = styled.div<{ $met: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${props => props.$met ? '#22c55e' : '#6b7280'};
  margin-bottom: 0.5rem;
`;

interface SecurePasswordProps {
  onNavigate?: (page: string) => void;
}

const SecurePassword: React.FC<SecurePasswordProps> = ({ onNavigate }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return Math.min(strength, 3);
  };

  const getStrengthText = (strength: number) => {
    switch (strength) {
      case 0: return 'Very Weak';
      case 1: return 'Weak';
      case 2: return 'Medium';
      case 3: return 'Strong';
      default: return 'Very Weak';
    }
  };

  const checkRequirements = (password: string) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword === currentPassword) {
      setError('New password must be different from current password');
      return;
    }

    const requirements = checkRequirements(newPassword);
    if (!Object.values(requirements).every(Boolean)) {
      setError('New password does not meet all requirements');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 2000);
  };

  const passwordStrength = calculatePasswordStrength(newPassword);
  const requirements = checkRequirements(newPassword);

  return (
    <PasswordContainer>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => onNavigate?.('home')}>
            <ArrowLeft size={20} />
          </BackButton>
          <HeaderTitle>Secure Password</HeaderTitle>
        </HeaderLeft>
      </Header>

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PasswordCard>
            <PasswordHeader>
              <PasswordIcon>
                <Shield size={40} />
              </PasswordIcon>
              <PasswordTitle>Change Password</PasswordTitle>
              <PasswordSubtitle>Update your account password for better security</PasswordSubtitle>
            </PasswordHeader>

            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Current Password</Label>
                <InputContainer>
                  <Input
                    type={showCurrentPassword ? 'text' : 'password'}
                    placeholder="Enter your current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                  <ToggleButton
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </ToggleButton>
                </InputContainer>
              </InputGroup>

              <InputGroup>
                <Label>New Password</Label>
                <InputContainer>
                  <Input
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <ToggleButton
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </ToggleButton>
                </InputContainer>
                {newPassword && (
                  <>
                    <PasswordStrength>
                      {[1, 2, 3].map((level) => (
                        <StrengthBar
                          key={level}
                          $strength={passwordStrength >= level ? passwordStrength : 0}
                        />
                      ))}
                    </PasswordStrength>
                    <StrengthText $strength={passwordStrength}>
                      Password Strength: {getStrengthText(passwordStrength)}
                    </StrengthText>
                  </>
                )}
              </InputGroup>

              <InputGroup>
                <Label>Confirm New Password</Label>
                <InputContainer>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <ToggleButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </ToggleButton>
                </InputContainer>
                {confirmPassword && newPassword !== confirmPassword && (
                  <ErrorMessage>
                    <AlertCircle size={16} />
                    Passwords do not match
                  </ErrorMessage>
                )}
                {confirmPassword && newPassword === confirmPassword && (
                  <SuccessMessage>
                    <Check size={16} />
                    Passwords match
                  </SuccessMessage>
                )}
              </InputGroup>

              {error && (
                <ErrorMessage>
                  <AlertCircle size={16} />
                  {error}
                </ErrorMessage>
              )}

              {success && (
                <SuccessMessage>
                  <Check size={16} />
                  {success}
                </SuccessMessage>
              )}

              <PasswordRequirements>
                <RequirementsTitle>Password Requirements:</RequirementsTitle>
                <Requirement $met={requirements.length}>
                  <Check size={16} />
                  At least 8 characters
                </Requirement>
                <Requirement $met={requirements.uppercase}>
                  <Check size={16} />
                  One uppercase letter
                </Requirement>
                <Requirement $met={requirements.number}>
                  <Check size={16} />
                  One number
                </Requirement>
                <Requirement $met={requirements.special}>
                  <Check size={16} />
                  One special character
                </Requirement>
              </PasswordRequirements>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Password'}
              </Button>
            </Form>
          </PasswordCard>
        </motion.div>
      </Content>
    </PasswordContainer>
  );
};

export default SecurePassword;
