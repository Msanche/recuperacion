import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'; // Suponiendo que estás utilizando React Router

interface ImageError {
  message: string;
}

const fetchImages = async () => {
  const response = await fetch('https://api.example.com/images');
  if (!response.ok) {
    throw new Error('Error al cargar las imágenes');
  }
  return response.json();
};

const reactQuery = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL si es necesario
  const { data, error, isLoading, refetch } = useQuery('images', fetchImages);

  useEffect(() => {
    refetch(); // Volver a cargar los datos cuando la página se monte o se actualice
  }, [refetch]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {(error as ImageError).message}</div>;

  return (
    <div>
      <h1>Imágenes Recuperadas:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((imageUrl: string, index: number) => (
          <img key={index} src={imageUrl} alt={`Imagen ${index}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default reactQuery;

