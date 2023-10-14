import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import CryptoTableRow from './CryptoTableRow'

const   CryptoTable = ({ data }) => {
  return (
    <Table className='table-container' striped bordered hover>
      <thead>
        <tr>
          <th>AVATAR</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current price</th>
          <th>24 HIGH</th>
          <th>24 LOW</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((coinData, index) => {
                return <CryptoTableRow data={coinData} key={index} />
                // Create A table Row Component
            })
        }
      </tbody>
    </Table>
  )
}

CryptoTable.propTypes = {
    data: PropTypes.any
}

export default CryptoTable