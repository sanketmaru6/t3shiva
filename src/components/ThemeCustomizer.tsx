import React, { useState } from 'react';
import { X, Palette, Type, Layout, RotateCcw, Sparkles, Eye, Sun, Moon, Monitor, Zap, Grid, Layers, Settings, Smartphone, Tablet, LampDesk as Desktop, Paintbrush, Sliders } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ isOpen, onClose }) => {
  const { theme, updateTheme, updateColors, resetToDefault, applyPreset, toggleMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'colors' | 'type' | 'layout' | 'advanced'>('colors');

  const presets = [
    {
      id: 'ocean-blue',
      name: 'Ocean Blue',
      colors: ['#3B82F6', '#06B6D4', '#8B5CF6'],
      description: 'Professional blue theme'
    },
    {
      id: 'forest-green',
      name: 'Forest Green',
      colors: ['#10B981', '#059669', '#F59E0B'],
      description: 'Nature-inspired green'
    },
    {
      id: 'sunset-orange',
      name: 'Sunset Orange',
      colors: ['#F97316', '#EF4444', '#EC4899'],
      description: 'Warm sunset colors'
    },
    {
      id: 'royal-purple',
      name: 'Royal Purple',
      colors: ['#8B5CF6', '#A855F7', '#EC4899'],
      description: 'Elegant purple theme'
    },
    {
      id: 'rose-gold',
      name: 'Rose Gold',
      colors: ['#EC4899', '#F97316', '#EF4444'],
      description: 'Luxurious rose gold'
    },
    {
      id: 'midnight',
      name: 'Midnight',
      colors: ['#6366F1', '#3B82F6', '#06B6D4'],
      description: 'Deep night colors'
    }
  ];

  const stylePresets = [
    {
      id: 'minimal-light',
      name: 'Minimal Light',
      description: 'Clean and minimal design',
      icon: <Sun className="w-4 h-4" />
    },
    {
      id: 'dark-modern',
      name: 'Dark Modern',
      description: 'Modern dark interface',
      icon: <Moon className="w-4 h-4" />
    },
    {
      id: 'creative-bold',
      name: 'Creative Bold',
      description: 'Bold and creative style',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const ColorPicker: React.FC<{
    label: string;
    description: string;
    value: string;
    onChange: (color: string) => void;
  }> = ({ label, description, value, onChange }) => (
    <div className="space-y-3">
      <div>
        <h4 className="text-white font-medium">{label}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
        <div 
          className="w-12 h-12 rounded-lg border-2 border-gray-500 cursor-pointer transition-transform hover:scale-105"
          style={{ backgroundColor: value }}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'color';
            input.value = value;
            input.onchange = (e) => onChange((e.target as HTMLInputElement).value);
            input.click();
          }}
        />
        <div className="flex-1">
          <input
            type="text"
            value={value.toUpperCase()}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-gray-300 font-mono text-sm focus:outline-none"
            placeholder="#000000"
          />
          <p className="text-gray-500 text-xs mt-1">Click to customize</p>
        </div>
      </div>
    </div>
  );

  const SelectField: React.FC<{
    label: string;
    description?: string;
    value: string;
    options: { value: string; label: string; icon?: React.ReactNode }[];
    onChange: (value: string) => void;
  }> = ({ label, description, value, options, onChange }) => (
    <div className="space-y-3">
      <div>
        <h4 className="text-white font-medium">{label}</h4>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 ${
              value === option.value
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:border-gray-500/50'
            }`}
          >
            {option.icon && <span>{option.icon}</span>}
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const SliderField: React.FC<{
    label: string;
    description?: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    onChange: (value: number) => void;
  }> = ({ label, description, value, min, max, step = 1, unit = '', onChange }) => (
    <div className="space-y-3">
      <div>
        <h4 className="text-white font-medium">{label}</h4>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
      <div className="space-y-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>{min}{unit}</span>
          <span className="text-white font-medium">{value}{unit}</span>
          <span>{max}{unit}</span>
        </div>
      </div>
    </div>
  );

  const ToggleField: React.FC<{
    label: string;
    description?: string;
    value: boolean;
    onChange: (value: boolean) => void;
  }> = ({ label, description, value, onChange }) => (
    <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
      <div>
        <h4 className="text-white font-medium">{label}</h4>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? 'bg-blue-600' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="relative w-96 bg-gray-800 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">T3Shiva</h2>
                <p className="text-gray-400 text-sm">Theme Customizer</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center space-x-2 mb-6">
            <button
              onClick={toggleMode}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {theme.mode === 'light' && <Sun className="w-4 h-4" />}
              {theme.mode === 'dark' && <Moon className="w-4 h-4" />}
              {theme.mode === 'auto' && <Monitor className="w-4 h-4" />}
              <span className="capitalize">{theme.mode}</span>
            </button>
            
            <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Magic</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-1 bg-gray-700/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'colors' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Colors</span>
            </button>
            <button
              onClick={() => setActiveTab('type')}
              className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'type' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Type className="w-4 h-4" />
              <span>Type</span>
            </button>
            <button
              onClick={() => setActiveTab('layout')}
              className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'layout' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>Layout</span>
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'advanced' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Advanced</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {activeTab === 'colors' && (
            <>
              {/* Style Presets */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <h3 className="text-white font-semibold">Style Presets</h3>
                </div>
                <div className="space-y-3">
                  {stylePresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset.id)}
                      className="w-full flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        {preset.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
                          {preset.name}
                        </p>
                        <p className="text-gray-400 text-sm">{preset.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Presets */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h3 className="text-white font-semibold">Color Presets</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset.id)}
                      className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 group"
                    >
                      <div className="flex space-x-1 mb-3">
                        {preset.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-200">
                        {preset.name}
                      </p>
                      <p className="text-gray-400 text-xs">{preset.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Colors */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Paintbrush className="w-4 h-4 text-blue-400" />
                  <h3 className="text-white font-semibold">Custom Colors</h3>
                </div>

                <ColorPicker
                  label="Primary Color"
                  description="Main brand color for buttons and accents"
                  value={theme.colors.primary}
                  onChange={(color) => updateColors({ primary: color })}
                />

                <ColorPicker
                  label="Secondary Color"
                  description="Supporting color for highlights"
                  value={theme.colors.secondary}
                  onChange={(color) => updateColors({ secondary: color })}
                />

                <ColorPicker
                  label="Accent Color"
                  description="Additional accent color"
                  value={theme.colors.accent}
                  onChange={(color) => updateColors({ accent: color })}
                />

                <ColorPicker
                  label="Background Color"
                  description="Main background color"
                  value={theme.colors.background}
                  onChange={(color) => updateColors({ background: color })}
                />

                <ColorPicker
                  label="Surface Color"
                  description="Card and surface backgrounds"
                  value={theme.colors.surface}
                  onChange={(color) => updateColors({ surface: color })}
                />
              </div>
            </>
          )}

          {activeTab === 'type' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Type className="w-4 h-4 text-blue-400" />
                <h3 className="text-white font-semibold">Typography</h3>
              </div>

              <SelectField
                label="Font Family"
                description="Choose the main font for your website"
                value={theme.fontFamily}
                options={[
                  { value: 'inter', label: 'Inter' },
                  { value: 'roboto', label: 'Roboto' },
                  { value: 'poppins', label: 'Poppins' },
                  { value: 'montserrat', label: 'Montserrat' }
                ]}
                onChange={(value) => updateTheme({ fontFamily: value as any })}
              />

              <SliderField
                label="Font Size"
                description="Base font size for body text"
                value={theme.fontSize}
                min={12}
                max={24}
                unit="px"
                onChange={(value) => updateTheme({ fontSize: value })}
              />

              <SliderField
                label="Line Height"
                description="Spacing between lines of text"
                value={theme.lineHeight}
                min={16}
                max={32}
                unit="px"
                onChange={(value) => updateTheme({ lineHeight: value })}
              />
            </div>
          )}

          {activeTab === 'layout' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Layout className="w-4 h-4 text-blue-400" />
                <h3 className="text-white font-semibold">Layout Settings</h3>
              </div>

              <SelectField
                label="Layout Style"
                description="Choose how content is contained"
                value={theme.layout}
                options={[
                  { value: 'wide', label: 'Wide', icon: <Desktop className="w-4 h-4" /> },
                  { value: 'boxed', label: 'Boxed', icon: <Tablet className="w-4 h-4" /> },
                  { value: 'fluid', label: 'Fluid', icon: <Smartphone className="w-4 h-4" /> }
                ]}
                onChange={(value) => updateTheme({ layout: value as any })}
              />

              <SelectField
                label="Header Style"
                description="Choose header layout and design"
                value={theme.headerStyle}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'centered', label: 'Centered' },
                  { value: 'sidebar', label: 'Sidebar' }
                ]}
                onChange={(value) => updateTheme({ headerStyle: value as any })}
              />

              <SelectField
                label="Header Theme"
                description="Header color scheme"
                value={theme.headerTheme}
                options={[
                  { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
                  { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
                  { value: 'transparent', label: 'Transparent' },
                  { value: 'gradient', label: 'Gradient' }
                ]}
                onChange={(value) => updateTheme({ headerTheme: value as any })}
              />

              <SelectField
                label="Footer Style"
                description="Footer layout and content"
                value={theme.footerStyle}
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'minimal', label: 'Minimal' },
                  { value: 'extended', label: 'Extended' }
                ]}
                onChange={(value) => updateTheme({ footerStyle: value as any })}
              />

              <ToggleField
                label="Contact Button"
                description="Show contact button in header"
                value={theme.showContactButton}
                onChange={(value) => updateTheme({ showContactButton: value })}
              />

              <ToggleField
                label="Fluid Layout"
                description="Allow content to stretch full width"
                value={theme.isFluid}
                onChange={(value) => updateTheme({ isFluid: value })}
              />
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-blue-400" />
                <h3 className="text-white font-semibold">Advanced Settings</h3>
              </div>

              <SelectField
                label="Border Radius"
                description="Roundness of corners"
                value={theme.borderRadius}
                options={[
                  { value: 'none', label: 'None (0px)' },
                  { value: 'small', label: 'Small (4px)' },
                  { value: 'medium', label: 'Medium (8px)' },
                  { value: 'large', label: 'Large (16px)' },
                  { value: 'full', label: 'Full (999px)' }
                ]}
                onChange={(value) => updateTheme({ borderRadius: value as any })}
              />

              <SelectField
                label="Spacing Scale"
                description="Overall spacing between elements"
                value={theme.spacing}
                options={[
                  { value: 'compact', label: 'Compact' },
                  { value: 'normal', label: 'Normal' },
                  { value: 'relaxed', label: 'Relaxed' }
                ]}
                onChange={(value) => updateTheme({ spacing: value as any })}
              />

              <SelectField
                label="Shadow Depth"
                description="Depth of shadows and elevation"
                value={theme.shadows}
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'subtle', label: 'Subtle' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'strong', label: 'Strong' }
                ]}
                onChange={(value) => updateTheme({ shadows: value as any })}
              />

              <SelectField
                label="Background Pattern"
                description="Subtle background patterns"
                value={theme.backgroundPattern}
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'dots', label: 'Dots' },
                  { value: 'grid', label: 'Grid' },
                  { value: 'waves', label: 'Waves' },
                  { value: 'gradient', label: 'Gradient' }
                ]}
                onChange={(value) => updateTheme({ backgroundPattern: value as any })}
              />

              <ToggleField
                label="Animations"
                description="Enable smooth transitions and animations"
                value={theme.animations}
                onChange={(value) => updateTheme({ animations: value })}
              />
            </div>
          )}

          {/* Reset Button */}
          <button
            onClick={resetToDefault}
            className="w-full flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset to Default</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;