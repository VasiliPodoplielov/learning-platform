import { IFormInput } from './types';

export const getApplicationMessage = (data: IFormInput) =>
  `📩 *Нова заявка*\n\n👤 *Ім'я:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Телефон:* ${data.phone}\n✅ *Згода:* ${data.accept ? 'Так' : 'Ні'}`;
