import _ from "lodash";

type AnyObject = {
  [key: string]: unknown;
};

export function filterByKey(source: AnyObject, searchKey: string) {
  const filtered = _.pickBy(source, (value, key) => {
    return key.startsWith(searchKey);
  });
  return _.mapKeys(filtered, (value, key) => {
    return key.replace(searchKey, "");
  });
}
