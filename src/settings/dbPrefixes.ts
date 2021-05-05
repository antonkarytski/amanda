export type Prefix = (
  strings: TemplateStringsArray,
  ...keys: (string | number)[]
) => string;

const generatePrefix = (prefix: string): Prefix => {
  const stringGenerator: Prefix = (name, ...key) => {
    const fullStr = name.reduce((accum, stringPart, index) => {
      let nextVal = accum + stringPart;
      if (key[index] !== undefined) nextVal += key[index];
      return nextVal;
    }, "");
    return `${prefix}${fullStr}`;
  };
  stringGenerator.toString = () => prefix;
  return stringGenerator;
};

export const P_ORG = generatePrefix("org");
export const P_CEOS = generatePrefix("ceos");
export const P_ACCOUNTS = generatePrefix("accounts");
export const P_CONTACTS = generatePrefix("contacts");
