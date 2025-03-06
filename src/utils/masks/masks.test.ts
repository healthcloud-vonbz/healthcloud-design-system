import { describe, expect, it } from 'vitest';

import {
  utilsFormatCep,
  utilsFormatCNH,
  utilsFormatCnpj,
  utilsFormatCpf,
  utilsFormatDate,
  utilsFormatPassport,
  utilsOnlyLetters,
  utilsOnlyNumbers,
  utilsPhoneWithDDD,
} from '../masks';

describe('Formats Utils', () => {
  describe('utilsPhoneWithDDD', () => {
    it('should format currency correctly', () => {
      const formattedValue = utilsPhoneWithDDD.masked('11988888888');
      expect(formattedValue).toBe('(11) 98888-8888');
    });
  });

  describe('utilsFormatCpf', () => {
    it('should format cpf correctly', () => {
      const formattedValue = utilsFormatCpf.masked('22233377888');
      expect(formattedValue).toBe('222.333.778-88');
    });
  });

  describe('utilsFormatCnpj', () => {
    it('should format cnpj correctly', () => {
      const formattedValue = utilsFormatCnpj.masked('53094980000103');
      expect(formattedValue).toBe('53.094.980/0001-03');
    });
  });

  describe('utilsFormatCep', () => {
    it('should format cep correctly', () => {
      const formattedValue = utilsFormatCep.masked('09889998');
      expect(formattedValue).toBe('09889-998');
    });
  });

  describe('utilsFormatDate', () => {
    it('should format date correctly', () => {
      const formattedValue = utilsFormatDate.masked('22091889');
      expect(formattedValue).toBe('22/09/1889');
    });
  });

  describe('utilsOnlyNumbers', () => {
    it('should return only number', () => {
      const formattedValue = utilsOnlyNumbers.masked('d2s20s9f1f8dhk89');
      expect(formattedValue).toBe('22091889');
    });
  });

  describe('utilsOnlyLetters', () => {
    it('should return only letters', () => {
      const formattedValue = utilsOnlyLetters.masked('56tes87t9e');
      expect(formattedValue).toBe('teste');
    });
  });

  describe('utilsFormatCNH', () => {
    it('should return cnh correctly', () => {
      const formattedValue = utilsFormatCNH.masked('788844447');
      expect(formattedValue).toBe('788844447');
    });
  });

  describe('utilsFormatPassport', () => {
    it('should return cnh correctly', () => {
      const formattedValue = utilsFormatPassport.masked('DN6788899998');
      expect(formattedValue).toBe('DN678889');
    });
  });
});
