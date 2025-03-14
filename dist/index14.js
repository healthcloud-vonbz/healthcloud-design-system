const e = (r) => Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2
}).format(r), t = (r) => r.replace(/[^\w\s]/gi, "");
export {
  e as formatSimpleCurrencyPtBrWithLabel,
  t as removeSpecialCharacters
};
//# sourceMappingURL=index14.js.map
