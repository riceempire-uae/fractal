// Figma Export Utility
// This utility helps export design tokens and component specifications to Figma

export interface FigmaDesignToken {
  name: string;
  value: string;
  type: 'color' | 'typography' | 'spacing' | 'borderRadius' | 'shadow';
  description?: string;
}

export interface FigmaComponent {
  name: string;
  description: string;
  properties: {
    [key: string]: any;
  };
  variants?: {
    [key: string]: any;
  };
}

export const exportDesignTokens = (): FigmaDesignToken[] => {
  return [
    // Colors
    { name: 'Background', value: '#0b1a2b', type: 'color', description: 'Primary background color' },
    { name: 'Primary Text', value: '#eef5ff', type: 'color', description: 'Main text color' },
    { name: 'Secondary Text', value: '#f5c04a', type: 'color', description: 'Accent text color' },
    { name: 'Card', value: '#1a2a3a', type: 'color', description: 'Card background color' },
    { name: 'Card Hover', value: '#2a3a4a', type: 'color', description: 'Card hover state' },
    { name: 'Border', value: '#3a4a5a', type: 'color', description: 'Border color' },
    { name: 'Success', value: '#4ade80', type: 'color', description: 'Success state color' },
    { name: 'Warning', value: '#f59e0b', type: 'color', description: 'Warning state color' },
    { name: 'Error', value: '#ef4444', type: 'color', description: 'Error state color' },
    
    // Typography
    { name: 'Primary Font', value: 'DM Sans', type: 'typography', description: 'Main font family' },
    { name: 'Secondary Font', value: 'Noto Sans SC', type: 'typography', description: 'Secondary font family' },
    { name: 'Font Size XS', value: '0.75rem', type: 'typography', description: 'Extra small text' },
    { name: 'Font Size SM', value: '0.875rem', type: 'typography', description: 'Small text' },
    { name: 'Font Size Base', value: '1rem', type: 'typography', description: 'Base text size' },
    { name: 'Font Size LG', value: '1.125rem', type: 'typography', description: 'Large text' },
    { name: 'Font Size XL', value: '1.25rem', type: 'typography', description: 'Extra large text' },
    { name: 'Font Size 2XL', value: '1.5rem', type: 'typography', description: '2X large text' },
    { name: 'Font Size 3XL', value: '1.875rem', type: 'typography', description: '3X large text' },
    { name: 'Font Size 4XL', value: '2.25rem', type: 'typography', description: '4X large text' },
    { name: 'Font Size 5XL', value: '3rem', type: 'typography', description: '5X large text' },
    
    // Spacing
    { name: 'Spacing XS', value: '0.25rem', type: 'spacing', description: 'Extra small spacing' },
    { name: 'Spacing SM', value: '0.5rem', type: 'spacing', description: 'Small spacing' },
    { name: 'Spacing MD', value: '1rem', type: 'spacing', description: 'Medium spacing' },
    { name: 'Spacing LG', value: '1.5rem', type: 'spacing', description: 'Large spacing' },
    { name: 'Spacing XL', value: '2rem', type: 'spacing', description: 'Extra large spacing' },
    { name: 'Spacing 2XL', value: '3rem', type: 'spacing', description: '2X large spacing' },
    { name: 'Spacing 3XL', value: '4rem', type: 'spacing', description: '3X large spacing' },
    
    // Border Radius
    { name: 'Border Radius SM', value: '0.375rem', type: 'borderRadius', description: 'Small border radius' },
    { name: 'Border Radius MD', value: '0.5rem', type: 'borderRadius', description: 'Medium border radius' },
    { name: 'Border Radius LG', value: '0.75rem', type: 'borderRadius', description: 'Large border radius' },
    { name: 'Border Radius XL', value: '1rem', type: 'borderRadius', description: 'Extra large border radius' },
    { name: 'Border Radius 2XL', value: '1.5rem', type: 'borderRadius', description: '2X large border radius' },
    { name: 'Border Radius Full', value: '9999px', type: 'borderRadius', description: 'Full border radius' },
    
    // Shadows
    { name: 'Shadow SM', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', type: 'shadow', description: 'Small shadow' },
    { name: 'Shadow MD', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', type: 'shadow', description: 'Medium shadow' },
    { name: 'Shadow LG', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', type: 'shadow', description: 'Large shadow' },
    { name: 'Shadow XL', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', type: 'shadow', description: 'Extra large shadow' },
    { name: 'Shadow Glow', value: '0 0 20px rgba(245, 192, 74, 0.3)', type: 'shadow', description: 'Glow effect shadow' },
  ];
};

export const exportComponents = (): FigmaComponent[] => {
  return [
    {
      name: 'Header',
      description: 'Main navigation header with logo, wallet address, and language selector',
      properties: {
        height: '80px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid #3a4a5a',
        padding: '1rem 1.5rem',
      },
    },
    {
      name: 'Bottom Navigator',
      description: 'Bottom tab navigation with Home, Team, Assets tabs',
      properties: {
        height: '100px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid #3a4a5a',
        padding: '0.75rem 0',
      },
    },
    {
      name: 'Card',
      description: 'Base card component with glass morphism effect',
      properties: {
        background: 'linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%)',
        borderRadius: '1rem',
        border: '1px solid #3a4a5a',
        padding: '1.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
    {
      name: 'Button Primary',
      description: 'Primary action button with gradient background',
      properties: {
        background: 'linear-gradient(135deg, #f5c04a 0%, #d4a843 100%)',
        color: '#0b1a2b',
        borderRadius: '0.75rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
      },
    },
    {
      name: 'Button Secondary',
      description: 'Secondary button with glass morphism effect',
      properties: {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        color: '#eef5ff',
        borderRadius: '0.75rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: '1px solid #3a4a5a',
        cursor: 'pointer',
      },
    },
  ];
};

export const generateFigmaJSON = () => {
  const designTokens = exportDesignTokens();
  const components = exportComponents();
  
  return {
    name: 'Fractal dApp Design System',
    description: 'Complete design system for Fractal dApp with modern UI/UX',
    version: '1.0.0',
    designTokens,
    components,
    metadata: {
      created: new Date().toISOString(),
      author: 'Fractal dApp Team',
      framework: 'React + TypeScript + Styled Components',
      colors: {
        primary: '#f5c04a',
        background: '#0b1a2b',
        text: '#eef5ff',
      },
      typography: {
        primary: 'DM Sans',
        secondary: 'Noto Sans SC',
      },
    },
  };
};

export const exportToFigma = () => {
  const figmaData = generateFigmaJSON();
  const dataStr = JSON.stringify(figmaData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = 'fractal-dapp-design-system.json';
  link.click();
  
  return figmaData;
};
