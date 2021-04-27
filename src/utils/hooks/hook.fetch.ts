import { useCallback, useState } from "react";
import { Prefix } from "../../settings/dbPrefixes";

export function useApi(initialApi: string) {
  const [api] = useState(initialApi);
  const [response, setResponse] = useState<Response | null>(null);
  const [onLoading, setOnLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  const request = useCallback(
    async (url: string | Prefix, options = {}): Promise<unknown> => {
      setOnLoading(true);
      setOnError(null);
      return fetch(`${api}/api/${url}`, options)
        .then((res) => {
          setOnLoading(false);
          setResponse(res);
        })
        .catch((err) => {
          setOnLoading(false);
          setOnError(err);
        });
    },
    [api]
  );

  return { response, onLoading, onError, request };
}
