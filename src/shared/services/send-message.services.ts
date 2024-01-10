import { SendMessageDataInput } from '../validators/send-message.schema';

import { api } from './api';

export const sendMessageService = async (data: SendMessageDataInput) => {
  await api.post('send_email/', data);
};
