import { useState, useEffect } from "react";

interface ContentFetcherProps<T> {
  children: (data: T) => React.ReactNode;
  fallback?: React.ReactNode;
}

export function ContentFetcher<T>({ children, fallback }: ContentFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/texts/content.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20">Загрузка...</div>;
  if (!data && fallback) return <>{fallback}</>;

  return <>{children(data as T)}</>;
}