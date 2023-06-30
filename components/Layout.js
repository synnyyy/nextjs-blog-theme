import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const setAppTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  const handleSystemThemeChange = () => {
    // Remove the logic for handling system theme change
    // since we want to always display in dark mode.
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
}

