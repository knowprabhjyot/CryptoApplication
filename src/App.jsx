import { useEffect, useState } from 'react';
import './App.css'
import { Button } from 'react-bootstrap';

const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;


function App() {

  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    // fetch(URL).then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   console.log(data);
    // }).catch((error) => {
    //   console.error(error);
    // })

    getCoinsData();
  }, [])

  const getCoinsData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCoinsData(data);
  }

  return (
    <>
      <Button>Click ME!</Button>
    </>
  )
}

export default App
