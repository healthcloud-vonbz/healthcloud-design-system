export const formatSimpleCurrencyPtBrWithLabel = (value: number) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
};

export const removeSpecialCharacters = (str: string): string => {
  return str.replace(/[^\w\s]/gi, "");
};
