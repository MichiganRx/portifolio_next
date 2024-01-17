import styles from './style.module.scss';

interface ModuleActingProps {
  title: string;
  subtitle: string;
  description: string;
  imgProject: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Cards = ({
  title,
  subtitle,
  description,
  imgProject: ImgComponent,
}: ModuleActingProps) => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <ImgComponent />
        </div>
      </div>
      <span>{title}</span>
      <span>{subtitle}</span>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
