import styles from './Button.module.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'lg' | 'default' | 'sm';
  className?: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  variant,
  size,
  className,
  type = 'button',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
};
