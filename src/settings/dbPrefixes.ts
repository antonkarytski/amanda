import { firstLetterToUpperCase } from "../utils/helpers/strings";

export type Prefix = (name?: TemplateStringsArray | string) => string;

const generatePrefix = (prefix: string): Prefix => {
  const stringGenerator: Prefix = (name = "") => {
    return `${prefix}${firstLetterToUpperCase(name[0])}`;
  };
  stringGenerator.toString = () => prefix;
  return stringGenerator;
};

export const P_ORG = generatePrefix("org");
export const P_CEO = generatePrefix("ceo");
export const P_ACCOUNT = generatePrefix("account");
export const P_CONTACT = generatePrefix("contact");
