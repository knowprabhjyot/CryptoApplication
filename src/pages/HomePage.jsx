import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CryptoTable from '../components/CryptoTable';
import { fetchAPI } from '../utils';

const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;


function HomePage(props) {
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
      const response = await fetchAPI(URL);
      setCoinsData(response);
    }
  
    return (
      <>
        <CryptoTable data={coinsData} />
      </>
    )
}

HomePage.propTypes = {}

export default HomePage
