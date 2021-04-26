import { useCallback, useState } from "react";

export function useFetch() {
  const [response, setResponse] = useState<Response | null>(null);
  const [onLoading, setOnLoading] = useState(false);
  const [onError, setOnError] = useState(null);

  const request = useCallback(
    async (url: string, options = {}): Promise<unknown> => {
      setOnLoading(true);
      setOnError(null);
      return fetch(url, options)
        .then((res) => {
          setOnLoading(false);
          setResponse(res);
        })
        .catch((err) => {
          setOnLoading(false);
          setOnError(err);
        });
    },
    []
  );

  return { response, onLoading, onError, request };
}
