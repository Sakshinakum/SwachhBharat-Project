import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Country.css'
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { countryListRequest, countryListSuccess, countryListFailure } from '../Redux/Action/countryAction';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Country = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const [products, setProducts] = useState(formData);

  function handleSearchclick(value) {
    if(value === ""){
      setProducts(formData);
      return;
    }
    const filterBySearch = formData.filter(
      (item) =>
      item?.countryTitle?.toLowerCase().includes(value.toLowerCase()) ||
      item?.isdnCode?.toLowerCase().includes(value.toLowerCase())
    )
    setProducts(filterBySearch)
  }

  useEffect(() => {
    dispatch(countryListRequest());
    axios
    .get("http://localhost:3001/api/noAuth/country/?page=1&size=25")
    .then((res) => {
      if(res.status === 200) {
        console.log(res, "res")
        dispatch(countryListSuccess(res.data.data))
        setFormData(res.data.data);
        setProducts(res.data.data);
      }
    })
    .catch((err) => {
      dispatch(countryListFailure(err));
      console.log(err);
    });

  }, [])

  
  return (
    <div> 
        <Container>
          <div className="country-page">
            <nav className="country-nav">
              <Row>
                <Col sm={6}>
                  <h4 className='country-name'>Country List</h4>
                </Col>
                <Col sm={6}>
                  <Link to={"/addcountry"} className='country-add'>Add Country</Link>
                </Col>
              </Row>
            </nav>
            <div className="country-body">
              <Row>
                <Col sm={6}>
                  <label>
                    Show
                    <select>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entires
                  </label>
                </Col>
                  <Col sm={6}>
                    <div className="language-right">
                      <label>Search:</label>
                      <input onChange={(e) => handleSearchclick(e.target.value)} type="text" />
                    </div>
                  </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <table border={1} className="table table-bordered table-striped">
                    <thead>
                      <tr> 
                        <th>Id</th>  
                        <th>Country Name</th>
                        <th>ISDN Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((item) => (
                        <tr>
                        <td>{item._id}</td>
                        <td>{item.countryTitle}</td>
                        <td>{item.isdnCode}</td>
                        <td>
                          <div className='action'>
                            <div className='action'>
                              {/* <button className="edit-btn"><MdEditSquare /></button> */}
                              <Link to={"/editcountry"} state={item} className="edit-btn"><MdEditSquare /></Link>
                            </div>
                            <button className='dlt-btn'><MdDeleteForever /></button>
                          </div>
                        </td>
                      </tr>
                      ))}
                      
                     
                                                    
                    </tbody>
                  </table>
                  
                </Col>
              </Row>                       
            </div>
          </div>
         
        </Container>
    </div>
  )
}

export default Country