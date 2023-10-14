import React from 'react'
import PropTypes from 'prop-types'

function CryptoTableRow({ data }) {
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
        <td>View Details</td>
    </tr>
  )
}

CryptoTableRow.propTypes = {
    data: PropTypes.any
}

export default CryptoTableRow
