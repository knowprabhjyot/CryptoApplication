import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { fetchAPI } from '../utils';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const URL = `https://api.coingecko.com/api/v3/coins/`;
const CryptoDetailPage = (props) => {
  const [cryptoDetail, setCryptoDetail] = useState({});


  const params = useParams();
  console.log(params);

  useEffect(() => {
    getCoinDetails();
  }, []);

  const getCoinDetails = async () => {
    const response = await fetchAPI(URL + params.id);
    setCryptoDetail(response);
  }

  return (
    <div>
        <Link to={'/'}>{'< Go Back'}</Link>
        <Card>
            <CardHeader>
                {cryptoDetail.name}
            </CardHeader>
            <CardBody>
                <img src={cryptoDetail?.image?.small  || ''} />
            </CardBody>
        </Card>
    </div>
  )
}

CryptoDetailPage.propTypes = {}

export default CryptoDetailPage