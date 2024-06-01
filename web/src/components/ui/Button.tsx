import styles from './Button.module.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'lg' | 'default' | 'sm';
  className?: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
};

export const Button = ({
  variant,
  size,
  className,
  type = 'button',
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
};
