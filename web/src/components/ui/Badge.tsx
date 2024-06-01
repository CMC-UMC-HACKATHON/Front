import styles from './Badge.module.css';

type BadgeProps = {
  className?: string;
  text: string;
};

const Badge = ({ className, text }: BadgeProps) => {
  return <div className={`${styles.badge} ${className}`}>{text}</div>;
};

export default Badge;
