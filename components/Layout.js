import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
