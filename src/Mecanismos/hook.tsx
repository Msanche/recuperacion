import { useEffect, useState } from 'react';

interface ImageError {
  message: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError((error as ImageError).message || 'Error al cargar los datos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
