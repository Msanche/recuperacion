import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface ImageError {
  message: string;
}

const LibraryAxios = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get<string[]>('https://api.example.com/images');
        setImages(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ImageError>;
          setError(axiosError.response?.data.message || 'Error al cargar las imágenes');
        } else {
          setError('Error al cargar las imágenes');
        }
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Imágenes Recuperadas:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Imagen ${index}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default LibraryAxios;
