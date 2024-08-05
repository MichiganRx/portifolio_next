import { DownloadButton } from '../../ui/button/button';

import styles from './styles.module.scss';

interface DescriptionsProps {
  title: string;
  descriptions: string;
  imgProject: string;
  isHidden: boolean;
  linkButton: string;
  isButtonVisible: boolean;
}

const Descriptions = ({
  title,
  descriptions,
  isHidden,
  imgProject,
  linkButton,
  isButtonVisible,
}: DescriptionsProps) => {
  return (
    <div
      className={`${styles.containerContent} ${isHidden ? styles.hidden : ''}`}
    >
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline>
          <source src={imgProject} type="video/mp4" />
        </video>
      </div>
      <div className={styles.containerDescription}>
        <h3>{title}</h3>
        <p>{descriptions}</p>
        <DownloadButton link={linkButton} isVisible={isButtonVisible} />
      </div>
    </div>
  );
};

export default Descriptions;
