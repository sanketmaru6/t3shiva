import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X, Sun, Moon, Laptop, User, LogOut, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Helper to combine class names
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

// Search Modal Component
const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <div className={cn("rounded-lg shadow-2xl", isDark ? 'bg-gray-800 border theme-border' : 'bg-white')}>
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for anything..."
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition",
                  isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                )}
                autoFocus
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['T3 Stack', 'Next.js 14', 'React Server Components', 'Tailwind CSS'].map(item => (
                  <button key={item} aria-label={`Search for ${item}`} className={cn("px-3 py-1 text-sm rounded-full", isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200')}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Dropdown Component
const Dropdown = ({ content, children, isMega = false }: { content: React.ReactNode, children: React.ReactNode, isMega?: boolean }) => (
  <div className="relative group">
    {children}
    <div className={cn(
      "absolute left-0 mt-2 origin-top-left bg-white dark:bg-gray-800 theme-border border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2",
      isMega ? 'w-[480px]' : 'w-56'
    )}>
      {content}
    </div>
  </div>
);

// Navigation Item Component
const NavItem = ({ item, theme, isMobile = false }: { item: any, theme: any, isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme.headerTheme === 'dark' || theme.headerTheme === 'gradient';

  const navItemClasses = cn(
    'flex items-center space-x-1 px-3 py-2 transition-colors duration-200 w-full text-left',
    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:theme-primary',
    item.active && (isDark ? 'text-white' : 'theme-primary'),
    isMobile && 'justify-between p-3 theme-radius',
    isMobile && (isDark ? 'hover:bg-gray-800' : 'hover:theme-surface')
  );

  if (!item.hasDropdown) {
    return <button className={navItemClasses}><span className="font-medium">{item.name}</span></button>;
  }

  if (isMobile) {
    return (
      <div>
        <button className={navItemClasses} onClick={() => setIsOpen(!isOpen)}>
          <span className="font-medium">{item.name}</span>
          <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
        </button>
        <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96' : 'max-h-0')}>
          <div className="pl-6 py-2 flex flex-col items-start">
            {item.dropdownContent.map((option: any) => (
              <a href="#" key={option.title || option} className="py-2 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                {option.title || option}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dropdown isMega={item.isMega} content={
      <div className={cn("gap-4", item.isMega ? 'grid grid-cols-2' : 'flex flex-col')}>
        {item.dropdownContent.map((option: any) => (
          <a href="#" key={option.title || option} className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm text-gray-700 dark:text-gray-200 rounded-lg transition-colors">
            {option.title ? (
              <div>
                <h4 className="font-semibold">{option.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{option.description}</p>
              </div>
            ) : (
              option
            )}
          </a>
        ))}
      </div>
    }>
      <button className={navItemClasses}>
        <span className="font-medium">{item.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </Dropdown>
  );
};


const Header = () => {
  const { theme, toggleMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Demo', hasDropdown: true, active: true, isMega: true, dropdownContent: [
      { title: 'Agency', description: 'For creative agencies' }, { title: 'SaaS', description: 'For software companies' },
      { title: 'Gym', description: 'For fitness centers' }, { title: 'E-Commerce', description: 'For online stores' },
      { title: 'Medical', description: 'For healthcare' }, { title: 'Product Landing', description: 'For new products' },
      { title: 'Education', description: 'For schools & courses' }, { title: 'Consulting', description: 'For business advisors' },
    ]},
    { name: 'Layouts', hasDropdown: true, dropdownContent: ['Wide', 'Boxed', 'Fluid'] },
    { name: 'Pages', hasDropdown: true, dropdownContent: ['About Us', 'Contact', 'Pricing', 'Blog'] },
    { name: 'Elements', hasDropdown: true, dropdownContent: ['Buttons', 'Forms', 'Cards', 'Modals'] },
    { name: 'News', hasDropdown: false },
  ];

  const isDark = theme.headerTheme === 'dark' || theme.headerTheme === 'gradient';

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled ? 'shadow-lg' : 'shadow-none',
    isScrolled && theme.headerTheme === 'transparent' && 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b theme-border',
    theme.headerTheme === 'light' && 'bg-white',
    theme.headerTheme === 'dark' && 'bg-gray-900',
    theme.headerTheme === 'gradient' && 'bg-gradient-to-r from-blue-600 to-purple-600',
    theme.headerStyle === 'minimal' ? 'py-2' : 'py-0'
  );

  const containerClasses = cn(
    'mx-auto px-4 sm:px-6 lg:px-8',
    theme.layout === 'wide' ? 'max-w-7xl' :
    theme.layout === 'boxed' ? 'max-w-5xl' :
    'max-w-full'
  );

  const navContainerClasses = cn(
    'flex items-center',
    theme.headerAlignment === 'center' ? 'justify-center' :
    theme.headerAlignment === 'left' ? 'justify-start' :
    'justify-between',
    theme.headerStyle === 'minimal' ? 'h-14' : 'h-16'
  );

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <header ref={headerRef} className={headerClasses}>
        <div className={containerClasses}>
          <div className={navContainerClasses}>
            {/* Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-9 h-9 theme-bg-primary theme-radius flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T3</span>
              </div>
              <span className={cn('text-xl font-bold', isDark ? 'text-white' : 'theme-text')}>T3shiva</span>
            </div>

            {/* Desktop Nav */}
            <nav className={cn(
              'hidden lg:flex items-center space-x-6',
              theme.headerAlignment === 'center' && 'absolute left-1/2 transform -translate-x-1/2'
            )}>
              {navItems.map((item) => <NavItem key={item.name} item={item} theme={theme} />)}
            </nav>

            {/* Right-side Icons & Actions */}
            <div className="flex items-center space-x-2">
              <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className={cn('p-2 rounded-full transition-colors', isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5')}>
                <Search className="w-5 h-5" />
              </button>
              
              <button aria-label="Toggle theme" onClick={toggleMode} className={cn('p-2 rounded-full transition-colors', isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5')}>
                {theme.mode === 'light' && <Sun className="w-5 h-5" />}
                {theme.mode === 'dark' && <Moon className="w-5 h-5" />}
                {theme.mode === 'auto' && <Laptop className="w-5 h-5" />}
              </button>

              {theme.showContactButton && (
                <button className="hidden md:inline-flex items-center theme-bg-primary hover:opacity-90 text-white px-5 py-2 theme-radius font-medium transition-all duration-200 text-sm shadow-sm hover:shadow-md">
                  Get Started
                </button>
              )}
              
              <button
                className={cn('lg:hidden p-2 rounded-full transition-colors', isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5')}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div className={cn(
          'lg:hidden fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
        )}>
          <div className="h-full flex flex-col">
            <div className="p-4 flex justify-between items-center border-b theme-border">
              <span className="text-lg font-bold">Menu</span>
              <button aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}><X /></button>
            </div>
            <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} theme={theme} isMobile />
              ))}
            </nav>
            <div className="p-4 border-t theme-border">
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              <div className="space-y-1">
                <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"><Settings className="w-4 h-4" /><span>Settings</span></a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"><LogOut className="w-4 h-4" /><span>Logout</span></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
