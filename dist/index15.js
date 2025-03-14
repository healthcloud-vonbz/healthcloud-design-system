import { Mask as t } from "./index17.js";
const e = new t({
  mask: "(##) 9####-####"
}), a = new t({
  mask: "###.###.###-##"
}), n = new t({
  mask: ["##.###.###/####-##"]
}), o = new t({
  mask: "#####-###"
}), m = new t({
  mask: "##/##/####"
}), r = new t({
  mask: "#########"
}), k = new t({
  mask: "@@######"
}), u = new t({
  mask: "9",
  tokens: {
    9: {
      pattern: /[0-9]/,
      repeated: !0
    }
  }
}), i = new t({
  mask: "a",
  tokens: {
    a: {
      pattern: /[a-zA-Z]/,
      repeated: !0
    }
  }
});
export {
  r as utilsFormatCNH,
  o as utilsFormatCep,
  n as utilsFormatCnpj,
  a as utilsFormatCpf,
  m as utilsFormatDate,
  k as utilsFormatPassport,
  i as utilsOnlyLetters,
  u as utilsOnlyNumbers,
  e as utilsPhoneWithDDD
};
//# sourceMappingURL=index15.js.map
