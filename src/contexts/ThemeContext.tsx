import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
}

interface ThemeSettings {
  mode: 'light' | 'dark' | 'auto';
  colors: ThemeColors;
  fontSize: number;
  lineHeight: number;
  fontFamily: 'inter' | 'roboto' | 'poppins' | 'montserrat';
  layout: 'wide' | 'boxed' | 'fluid';
  headerStyle: 'default' | 'minimal' | 'centered' | 'sidebar';
  headerTheme: 'light' | 'dark' | 'transparent' | 'gradient';
  headerAlignment: 'left' | 'center' | 'right';
  showContactButton: boolean;
  isFluid: boolean;
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full';
  spacing: 'compact' | 'normal' | 'relaxed';
  animations: boolean;
  shadows: 'none' | 'subtle' | 'medium' | 'strong';
  backgroundPattern: 'none' | 'dots' | 'grid' | 'waves' | 'gradient';
  sidebarPosition: 'left' | 'right';
  footerStyle: 'default' | 'minimal' | 'extended';
}

interface ThemeContextType {
  theme: ThemeSettings;
  updateTheme: (updates: Partial<ThemeSettings>) => void;
  updateColors: (colors: Partial<ThemeColors>) => void;
  resetToDefault: () => void;
  applyPreset: (preset: string) => void;
  toggleMode: () => void;
}

const lightColors: ThemeColors = {
  primary: '#3B82F6',
  secondary: '#EF4444',
  accent: '#EC4899',
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  shadow: 'rgba(0, 0, 0, 0.1)'
};

const darkColors: ThemeColors = {
  primary: '#60A5FA',
  secondary: '#F87171',
  accent: '#F472B6',
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  border: '#334155',
  shadow: 'rgba(0, 0, 0, 0.3)'
};

const defaultTheme: ThemeSettings = {
  mode: 'light',
  colors: lightColors,
  fontSize: 16,
  lineHeight: 24,
  fontFamily: 'inter',
  layout: 'wide',
  headerStyle: 'default',
  headerTheme: 'light',
  headerAlignment: 'right',
  showContactButton: true,
  isFluid: true,
  borderRadius: 'medium',
  spacing: 'normal',
  animations: true,
  shadows: 'medium',
  backgroundPattern: 'none',
  sidebarPosition: 'left',
  footerStyle: 'default'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('t3shiva-theme');
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme);
        setTheme(parsed);
      } catch (error) {
        console.error('Error loading saved theme:', error);
      }
    }
  }, []);

  // Save theme to localStorage and apply CSS variables
  useEffect(() => {
    localStorage.setItem('t3shiva-theme', JSON.stringify(theme));
    
    // Determine effective colors based on mode
    let effectiveColors = theme.colors;
    if (theme.mode === 'dark') {
      effectiveColors = { ...darkColors, ...theme.colors };
    } else if (theme.mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveColors = prefersDark ? { ...darkColors, ...theme.colors } : { ...lightColors, ...theme.colors };
    }
    
    // Apply CSS custom properties
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--color-primary', effectiveColors.primary);
    root.style.setProperty('--color-secondary', effectiveColors.secondary);
    root.style.setProperty('--color-accent', effectiveColors.accent);
    root.style.setProperty('--color-background', effectiveColors.background);
    root.style.setProperty('--color-surface', effectiveColors.surface);
    root.style.setProperty('--color-text', effectiveColors.text);
    root.style.setProperty('--color-text-secondary', effectiveColors.textSecondary);
    root.style.setProperty('--color-border', effectiveColors.border);
    root.style.setProperty('--color-shadow', effectiveColors.shadow);
    
    // Typography
    root.style.setProperty('--font-size', `${theme.fontSize}px`);
    root.style.setProperty('--line-height', `${theme.lineHeight}px`);
    
    // Font Family
    const fontFamilies = {
      inter: 'Inter, system-ui, sans-serif',
      roboto: 'Roboto, system-ui, sans-serif',
      poppins: 'Poppins, system-ui, sans-serif',
      montserrat: 'Montserrat, system-ui, sans-serif'
    };
    root.style.setProperty('--font-family', fontFamilies[theme.fontFamily]);
    
    // Border Radius
    const borderRadiusValues = {
      none: '0px',
      small: '4px',
      medium: '8px',
      large: '16px',
      full: '9999px'
    };
    root.style.setProperty('--border-radius', borderRadiusValues[theme.borderRadius]);
    
    // Spacing
    const spacingValues = {
      compact: '0.75',
      normal: '1',
      relaxed: '1.25'
    };
    root.style.setProperty('--spacing-scale', spacingValues[theme.spacing]);
    
    // Shadows
    const shadowValues = {
      none: 'none',
      subtle: '0 1px 3px var(--color-shadow)',
      medium: '0 4px 6px -1px var(--color-shadow), 0 2px 4px -1px var(--color-shadow)',
      strong: '0 20px 25px -5px var(--color-shadow), 0 10px 10px -5px var(--color-shadow)'
    };
    root.style.setProperty('--shadow', shadowValues[theme.shadows]);
    
    // Background Pattern
    const patterns = {
      none: 'none',
      dots: 'radial-gradient(circle, var(--color-border) 1px, transparent 1px)',
      grid: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
      waves: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e5e7eb" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      gradient: 'linear-gradient(45deg, transparent 25%, var(--color-border) 25%, var(--color-border) 50%, transparent 50%, transparent 75%, var(--color-border) 75%)'
    };
    root.style.setProperty('--background-pattern', patterns[theme.backgroundPattern]);
    
    // Apply mode class to body
    document.body.className = `theme-${theme.mode} font-${theme.fontFamily} layout-${theme.layout} header-${theme.headerStyle} spacing-${theme.spacing}`;
    
    // Apply animations
    if (!theme.animations) {
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.setProperty('--transition-duration', '0.2s');
    }
  }, [theme]);

  const updateTheme = (updates: Partial<ThemeSettings>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const updateColors = (colors: Partial<ThemeColors>) => {
    setTheme(prev => ({
      ...prev,
      colors: { ...prev.colors, ...colors }
    }));
  };

  const resetToDefault = () => {
    setTheme(defaultTheme);
  };

  const toggleMode = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : prev.mode === 'dark' ? 'auto' : 'light'
    }));
  };

  const applyPreset = (preset: string) => {
    const presets: Record<string, Partial<ThemeSettings>> = {
      'ocean-blue': {
        colors: {
          ...theme.colors,
          primary: '#3B82F6',
          secondary: '#06B6D4',
          accent: '#8B5CF6'
        }
      },
      'forest-green': {
        colors: {
          ...theme.colors,
          primary: '#10B981',
          secondary: '#059669',
          accent: '#F59E0B'
        }
      },
      'sunset-orange': {
        colors: {
          ...theme.colors,
          primary: '#F97316',
          secondary: '#EF4444',
          accent: '#EC4899'
        }
      },
      'royal-purple': {
        colors: {
          ...theme.colors,
          primary: '#8B5CF6',
          secondary: '#A855F7',
          accent: '#EC4899'
        }
      },
      'rose-gold': {
        colors: {
          ...theme.colors,
          primary: '#EC4899',
          secondary: '#F97316',
          accent: '#EF4444'
        }
      },
      'midnight': {
        colors: {
          ...theme.colors,
          primary: '#6366F1',
          secondary: '#3B82F6',
          accent: '#06B6D4'
        }
      },
      'minimal-light': {
        mode: 'light' as const,
        headerStyle: 'minimal' as const,
        shadows: 'subtle' as const,
        borderRadius: 'small' as const,
        spacing: 'normal' as const
      },
      'dark-modern': {
        mode: 'dark' as const,
        headerStyle: 'default' as const,
        shadows: 'medium' as const,
        borderRadius: 'medium' as const,
        backgroundPattern: 'dots' as const
      },
      'creative-bold': {
        borderRadius: 'large' as const,
        shadows: 'strong' as const,
        spacing: 'relaxed' as const,
        backgroundPattern: 'waves' as const,
        animations: true
      }
    };

    if (presets[preset]) {
      updateTheme(presets[preset]);
    }
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      updateTheme,
      updateColors,
      resetToDefault,
      applyPreset,
      toggleMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};