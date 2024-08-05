import { useLocaleSelected } from '@/shared/hooks/use-locale-selected';

import Button from '../../ui/button/button';

import styles from './styles.module.scss';

interface ButtonsProps {
  selectedIndex: number;
  onButtonClick: (index: number) => void;
}

const Buttons = ({ selectedIndex, onButtonClick }: ButtonsProps) => {
  const localeSelected = useLocaleSelected();
  const buttonsData = [
    {
      label: {
        'en-us': 'MR Marcenaria',
        'pt-br': 'MR Marcenaria',
      },
    },
    {
      label: {
        'en-us': 'Caneta Zoo',
        'pt-br': 'Caneta Zoo',
      },
    },
    {
      label: {
        'en-us': 'Mobank',
        'pt-br': 'Mobank',
      },
    },
  ];

  const handleButtonClick = (index: number) => {
    onButtonClick(index);
  };

  return (
    <div className={styles.containerButtons}>
      <div>
        <div>
          {buttonsData.map((button, index) => (
            <Button
              key={index}
              variant="quaternary"
              onClick={() => handleButtonClick(index)}
              className={selectedIndex === index ? styles.selected : ''}
            >
              {button.label[localeSelected]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
