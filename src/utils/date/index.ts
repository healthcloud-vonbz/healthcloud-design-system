import { isAfter, isValid, parse } from 'date-fns';

export function isValidBrazilianDate(date: string): boolean {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());

  return isValid(parsedDate);
}

export function isValidBirthday(date: string): boolean {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());

  return isValid(parsedDate) && !isAfter(parsedDate, new Date());
}
