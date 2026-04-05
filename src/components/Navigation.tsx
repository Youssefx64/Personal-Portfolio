import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');

  // Navigation items with translations
  const navItems = {
    en: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Publications', href: '#publications' },
      { name: 'Blog', href: '#blog' },
      { name: 'Resume', href: '#resume' },
      { name: 'Contact', href: '#contact' }
    ],
    ar: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'نبذة عني', href: '#about' },
      { name: 'أعمالي', href: '#portfolio' },
      { name: 'المنشورات', href: '#publications' },
      { name: 'المدونة', href: '#blog' },
      { name: 'السيرة الذاتية', href: '#resume' },
      { name: 'تواصل معي', href: '#contact' }
    ]
  };

  // Get current navigation items based on language
  const currentNavItems = navItems[currentLanguage];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Language toggle functionality with actual language switching
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    
    // Apply RTL/LTR direction to the document
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    
    console.log(`Language switched to: ${newLanguage === 'ar' ? 'Arabic' : 'English'}`);
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex-shrink-0 ${currentLanguage === 'ar' ? 'order-3' : ''}`}>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Youssef Taha B.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                  currentLanguage === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links & Dark Mode Toggle */}
          <div className={`hidden md:flex items-center ${currentLanguage === 'ar' ? 'space-x-reverse space-x-4 order-1' : 'space-x-4'}`}>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                currentLanguage === 'ar' ? 'flex-row-reverse' : ''
              }`}
              title={`Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className={`w-4 h-4 ${currentLanguage === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <span className="text-sm font-medium">
                {currentLanguage === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 transform hover:scale-105"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center ${currentLanguage === 'ar' ? 'space-x-reverse space-x-2 order-1' : 'space-x-2'}`}>
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-all duration-300 ${
                currentLanguage === 'ar' ? 'flex-row-reverse' : ''
              }`}
              title={`Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe className={`w-4 h-4 ${currentLanguage === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className="text-xs font-medium">
                {currentLanguage === 'en' ? 'ع' : 'EN'}
              </span>
            </button>
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-all duration-300"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg ${
              currentLanguage === 'ar' ? 'text-right' : 'text-left'
            }`}>
              {currentNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-all duration-200 ${
                    currentLanguage === 'ar' ? 'text-right font-arabic' : 'text-left'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;