import Image from 'next/image';

import styles from './styles.module.scss';

interface DescriptionsProps {
  title: string;
  descriptions: string;
  imgProject: string | StaticImageData;
  isHidden: boolean;
}

const Descriptions = ({
  title,
  descriptions,
  isHidden,
  imgProject,
}: DescriptionsProps) => {
  return (
    <div
      className={`${styles.containerContent} ${isHidden ? styles.hidden : ''}`}
    >
      <Image width={50} height={50} src={imgProject} alt={title} />
      <div className={styles.containerDescription}>
        <h3>{title}</h3>
        <p>{descriptions}</p>
      </div>
    </div>
  );
};

export default Descriptions;
