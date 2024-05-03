import React from 'react';
import useSWR from 'swr';

interface ImageData {
  url: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json() as Promise<ImageData[]>);

const SwrComponent = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/photos', fetcher);

  if (error) return <div>Error al cargar las imágenes</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Imágenes Recuperadas:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((imageData, index) => (
          <img key={index} src={imageData.url} alt={`Imagen ${index}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default SwrComponent;
