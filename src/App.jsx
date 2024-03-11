import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';
import FetchCities from './components/APIs/FetchCities';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState(null);
  // const [city,setCity]=useState([])

  const errorCallback = (error) => {
    console.log(error);
  };

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    setCoords({ latitude, longitude });
  };

//   const country = 'nigeria'
//   useEffect(() => {
//     const fetchCity = async () => {
//       try {
//         const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
//         setCity(res.data)
//         console.log(res.data)
//       } catch(error) {
//         console.error(error)
//       }
//     }
//     fetchCity()
// },[])
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      const fetchApi = async () => {
        const { latitude, longitude } = coords;
          const APIkey = 'f6c1565407545e1c01bfb46d37e00141';
          try {
            const res = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`,
            );
            setData(res.data);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
      };
      fetchApi();
    }
  }, [coords]);
console.log(data)
  return (
    <>
      <FetchCities/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
