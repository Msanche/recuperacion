import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
       <h1>Elige el mecanismo</h1>
       <nav>
        <ul>
          <li>
            <button onClick={() => navigate('/swr')}>SWR</button> {/* Navega a la ruta /swr */}
          </li>
        </ul>
       </nav>
      </div>
    </>
  )
}

export default App;

  