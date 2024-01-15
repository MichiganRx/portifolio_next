import Image from 'next/image';

import styles from './acting.module.scss';

interface ModuleActingProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const ModuleActing = ({
  image,
  alt,
  title,
  subtitle,
  description,
}: ModuleActingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.areaText}>
        <Image width={90} height={90} src={image} alt={alt} />
        <div>
          <span>{title}</span>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className={styles.boxDescription}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ModuleActing;
