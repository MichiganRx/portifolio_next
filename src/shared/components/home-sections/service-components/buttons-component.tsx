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
        'en-us': 'Corporate Systems',
        'pt-br': 'Sistemas Corporativos',
      },
    },
    {
      label: {
        'en-us': 'Apps',
        'pt-br': 'Apps',
      },
    },
    {
      label: {
        'en-us': 'Software for Industry 4.0',
        'pt-br': 'Software para Indústria 4.0',
      },
    },
    {
      label: {
        'en-us': 'Research and Development ',
        'pt-br': 'Pesquisa e Desenvolvimento',
      },
    },
    {
      label: {
        'en-us': 'Web Applications',
        'pt-br': 'Aplicações Web',
      },
    },
    {
      label: {
        'en-us': 'Financial Systems',
        'pt-br': 'Sistemas Financeiros',
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
