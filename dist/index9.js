import { Mask as t } from "./index10.js";
const e = new t({
  mask: "(##) 9####-####"
}), n = new t({
  mask: "###.###.###-##"
}), a = new t({
  mask: ["###.###.###-##", "##.###.###/####-##"]
}), o = new t({
  mask: "#####-###"
}), m = new t({
  mask: "##/##/####"
}), r = new t({
  mask: "9",
  tokens: {
    9: {
      pattern: /[0-9]/,
      repeated: !0
    }
  }
});
export {
  o as utilsFormatCep,
  a as utilsFormatCnpj,
  n as utilsFormatCpf,
  m as utilsFormatDate,
  r as utilsOnlyNumbers,
  e as utilsPhoneWithDDD
};
//# sourceMappingURL=index9.js.map
