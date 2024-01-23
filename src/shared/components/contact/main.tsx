import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { mask, unmask } from 'remask';
import { useState } from 'react';

import { contactLocale } from '@/shared/data/locales/contact/contact';
import { useLocale } from '@/shared/hooks/use-locale';
import {
  SendMessageDataInput,
  sendMessageSchema,
} from '@/shared/validators/send-message.schema';
import { sendMessageService } from '@/shared/services/send-message.services';
import SelectDemo from '@/shared/components/ui/select/select-component';

import Button from '../ui/button/button';

import styles from './style.module.scss';

export const MainSection = () => {
  const [isMessageSend, setIsMessageSend] = useState(false);
  const {
    title,
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    select,
    textArea,
    placeholderTextArea,
    buttonForm,
    h2Success,
    h3Success,
  } = useLocale(contactLocale);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SendMessageDataInput>({
    resolver: zodResolver(sendMessageSchema),
  });

  const handleSendMessage: SubmitHandler<SendMessageDataInput> = async (
    data
  ) => {
    try {
      await sendMessageService({
        ...data,
        phone: `${data.areaCode}${data.phone}`,
      });
      setIsMessageSend(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangePhone = (phone: string) => {
    setValue('phone', mask(unmask(phone), ['9999-9999', '99999-9999']));
  };

  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      {isMessageSend && (
        <div className={styles.messageSucess}>
          <Image src="/logo.svg" alt="Organic" width={190} height={125} />
          <h2>{h2Success}</h2>
          <h3>{h3Success}</h3>
        </div>
      )}
      <form autoComplete="off" onSubmit={handleSubmit(handleSendMessage)}>
        <div className={styles.areaLabel}>
          <label htmlFor="name">{label1}</label>
          <input
            type="text"
            id="name"
            placeholder="Ex.: José Ferreira "
            {...register('name')}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div className={styles.areaLabel}>
          <label htmlFor="email">{label2}</label>
          <input
            type="email"
            id="email"
            placeholder="Ex.: solucoes@organic.com.br"
            {...register('email')}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
        <div className={`${styles.areaLabel} ${styles.areaLabelPhone}`}>
          <div>
            <div>
              <label htmlFor="areaCode">{label6}</label>
              <input
                type="text"
                id="areaCode"
                placeholder="DDD"
                maxLength={2}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
                {...register('areaCode')}
              />
            </div>
            <div>
              <label htmlFor="phone">{label3}</label>
              <input
                type="text"
                id="phone"
                placeholder="Ex.: 9 9999-9999"
                {...register('phone')}
                onChange={(event) => onChangePhone(event.target.value)}
              />
            </div>
          </div>
          <div>
            {errors.areaCode?.message && <p>{errors.areaCode?.message}</p>}
            {errors.phone?.message && <p>{errors.phone?.message}</p>}
          </div>
        </div>
        <div className={styles.areaLabel}>
          <label htmlFor="company">{label4}</label>
          <input
            type="company"
            id="company"
            placeholder="Ex.: Organic Soluções"
            {...register('company')}
          />
          {errors.company?.message && <p>{errors.company?.message}</p>}
        </div>
        <div className={styles.areaLabel}>
          <label htmlFor="company_position">{label5}</label>
          <input
            type="text"
            id="company_position"
            {...register('company_position')}
            placeholder="Ex.: Software"
          />
          {errors.company_position?.message && (
            <p>{errors.company_position?.message}</p>
          )}
        </div>
        <div className={styles.areaLabel}>
          <label htmlFor="subject">{select}</label>
          <SelectDemo id="subject" {...register('subject')} />
          {errors.subject?.message && <p>{errors.subject?.message}</p>}
        </div>
        <div className={styles.textArea}>
          <label htmlFor="message">{textArea}</label>
          <textarea
            id="message"
            placeholder={placeholderTextArea}
            {...register('message')}
          />
          {errors.message?.message && <p>{errors.message?.message}</p>}
        </div>
        <Button variant="tertiary">{buttonForm}</Button>
      </form>
    </section>
  );
};
