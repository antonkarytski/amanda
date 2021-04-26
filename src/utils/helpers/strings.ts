export function firstLetterToUpperCase(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function camelCase(...prefixes: string[]): string {
  return prefixes.reduce((accumulator, prefix, index) => {
    if (index === 0) return prefix;
    return accumulator + firstLetterToUpperCase(prefix);
  }, "");
}
