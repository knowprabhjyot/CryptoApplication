import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CryptoTableRow({ data }) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToCoinDetail = () => {
    // Do some logics here.
    setIsLoading(true);

    // THis logic doesn't make sense, just wrote to explain
    // why useNavigate can be handy
    setTimeout(() => {
      setIsLoading(false);
      navigate(`crypto/detail/${data.name}`)
    }, 3000);
  }

  return (
    <tr>
      <td>
        <img width={80} src={data.image} alt={data.id} />
      </td>
      <td>{data.name}</td>
      <td>{data.symbol}</td>
      <td>{data.current_price}</td>
      <td>{data.high_24h}</td>
      <td>{data.low_24h}</td>
      <td>
        {/* <Link to={`/crypto/detail/${data.name}`}>View Details</Link> */}
        <Button onClick={navigateToCoinDetail}>
          <span>{isLoading ? 'Loading...' : 'View Details'}</span>
        </Button>
      </td>
    </tr>
  )
}

CryptoTableRow.propTypes = {
  data: PropTypes.any
}

export default CryptoTableRow
