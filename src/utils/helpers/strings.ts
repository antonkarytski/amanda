import { P_CONTACTS, Prefix } from "../../settings/dbPrefixes";

export function firstLetterToUpperCase(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function camelCase(...prefixes: string[]): string {
  return prefixes.reduce((accumulator, prefix, index) => {
    if (index === 0) return prefix;
    return accumulator + firstLetterToUpperCase(prefix);
  }, "");
}

export function buildInputName(prefix: Prefix, name: string, index?: number) {
  return index !== undefined ? prefix`[${index}].${name}` : prefix`${name}`;
}
