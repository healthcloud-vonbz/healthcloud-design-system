import { Mask } from 'maska';

export const utilsPhoneWithDDD = new Mask({
  mask: '(##) 9####-####',
});

export const utilsFormatCpf = new Mask({
  mask: '###.###.###-##',
});

export const utilsFormatCnpj = new Mask({
  mask: ['###.###.###-##', '##.###.###/####-##'],
});

export const utilsFormatCep = new Mask({
  mask: '#####-###',
});

export const utilsFormatDate = new Mask({
  mask: '##/##/####',
});

export const utilsOnlyNumbers = new Mask({
  mask: '9',
  tokens: {
    9: {
      pattern: /[0-9]/,
      repeated: true,
    },
  },
});
