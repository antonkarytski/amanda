export type Prefix = (
  strings: TemplateStringsArray,
  keys?: string | number
) => string;

const generatePrefix = (prefix: string): Prefix => {
  const stringGenerator: Prefix = (name, ...key) => {
    const fullStr = name.reduce((accum, stringPart, index) => {
      let nextVal = accum + stringPart;
      if (key[index]) nextVal += key[index];
      return nextVal;
    }, "");
    return `${prefix}${fullStr}`;
  };
  stringGenerator.toString = () => prefix;
  return stringGenerator;
};

export const P_ORG = generatePrefix("org");
export const P_CEO = generatePrefix("ceo");
export const P_ACCOUNT = generatePrefix("account");
export const P_CONTACT = generatePrefix("contact");
