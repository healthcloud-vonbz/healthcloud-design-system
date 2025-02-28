import { describe, expect, it } from 'vitest';

import { formatSimpleCurrencyPtBrWithLabel, removeSpecialCharacters } from '.';

describe('Formats Utils', () => {
  describe('formatSimpleCurrencyPtBrWithLabel', () => {
    it('should format currency with label', () => {
      const formattedCurrency = formatSimpleCurrencyPtBrWithLabel(1000);
      expect(formattedCurrency.replace(/\s+/g, ' ')).toEqual('R$ 1.000,00');
    });

    it('should format currency with cents', () => {
      const formattedCurrency = formatSimpleCurrencyPtBrWithLabel(1234.56);
      expect(formattedCurrency.replace(/\s+/g, ' ')).toBe('R$ 1.234,56');
    });

    it('should format currency with fractional digits', () => {
      const formattedCurrency = formatSimpleCurrencyPtBrWithLabel(5000.5);
      expect(formattedCurrency.replace(/\s+/g, ' ')).toBe('R$ 5.000,50');
    });
  });

  describe('removeSpecialCharacters', () => {
    it('should remove special characters', () => {
      const format = removeSpecialCharacters('teste@test.com');
      expect(format).toEqual('testetestcom');
    });
  });
});
