import { enUS, ptBR } from 'date-fns/locale';

export const locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export type Locales = keyof typeof locales;
