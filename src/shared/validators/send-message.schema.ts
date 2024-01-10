import { unMask } from 'remask';
import { z } from 'zod';

export const sendMessageSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'O nome é obrigatório',
  }),
  email: z
    .string({
      required_error: 'O e-mail é obrigatório',
    })
    .email('O e-mail deve estar no formato correto'),
  areaCode: z.string().trim().length(2, 'DDD deve ter dois caracteres'),
  phone: z
    .string({ required_error: 'Campo obrigatório' })
    .trim()
    .min(9, 'Telefone é obrigatório')
    .transform((value) => unMask(value)),
  company: z.string().trim().min(1, 'A empresa é obrigatória'),
  company_position: z.string().trim().min(1, 'A área de atuação é obrigatória'),
  subject: z.string().min(1, {
    message: 'O assunto é obrigatório',
  }),
  message: z.string().min(1, 'A mensagem é obrigatória'),
});

export type SendMessageDataInput = z.infer<typeof sendMessageSchema>;
