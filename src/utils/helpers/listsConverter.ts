type ConvertibleOption = {
  nameRus: string;
  code: string;
};

export function convertToOptions(list: ConvertibleOption[]) {
  return list.map(({ nameRus, code }) => ({
    value: code,
    label: nameRus,
  }));
}
