import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, InputGroup, Table } from 'react-bootstrap'
import CryptoTableRow from './CryptoTableRow'
import './CryptoTable.css';

const CryptoTable = ({ data }) => {


  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [tableData, setTableData] = useState(data);
  const [tempData, _setTempData] = useState(data);

  useEffect(() => {
    
    // console.log(searchedKeyword, 'searchedKeyword');
    setTableData((prevState) => {
      return tempData;
    });
    const filteredArray = tableData.filter((coin) => {
      return coin.name.includes(searchedKeyword);
    })
    setTableData(filteredArray);
  }, [searchedKeyword])

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div>
      <InputGroup style={{ width: '800'}} size="sm" className="mb-3 p-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchedKeyword}
          onChange={(event) => setSearchedKeyword(event.target.value)}
        />
      </InputGroup>

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
            tableData.map((coinData, index) => {
              return <CryptoTableRow data={coinData} key={index} />
              // Create A table Row Component
            })
          }
        </tbody>
      </Table>
    </div>

  )
}

CryptoTable.propTypes = {
  data: PropTypes.any
}

export default CryptoTable