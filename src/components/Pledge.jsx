import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Pledge.css'
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pledge = () => {

    const [formData, setFormData] = useState();
    const [products, setProducts] = useState(formData);

    function handleSearchClick(value) {
        if(value === ""){
            setProducts(formData);
            return;
        }
        const filterBySearch = formData.filter((item) => 
            item?._id?.toLowerCase().includes(value.toLowerCase()) ||
            item?.name?.toLowerCase().includes(value.toLowerCase()) ||
            item?.email?.toLowerCase().includes(value.toLowerCase()) ||
            item?.mobile?.toLowerCase().includes(value.toLowerCase()) ||
            item?.state?.toLowerCase().includes(value.toLowerCase()) ||
            item?.city?.toLowerCase().includes(value.toLowerCase()) 
        )
        setProducts(filterBySearch);
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWE0Mjg5YjQxOGUzNmEzYzU1ZWI2YyIsInRva2VuIjoiNDMzZWJhOWE3MjFjYzQwNzk5NWJmMDY5ODdmNWRkNWMiLCJpYXQiOjE3NTM3Njc3MzIsImV4cCI6MTc1Mzg1NDEzMn0.59sIK1N7AMIy0FSZMrquVjUXyt8BYz47-GVfrqtA2Yg"


    useEffect(() => {
        axios
        .get("http://localhost:3001/api/pledge/?page=1&size=15", {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
            
        
        .then((res) => {
            console.log(res, "res");
            setFormData(res.data.data);
            setProducts(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  return (
    <div>
        <Container>
            <div className="pledge-page">
                <div className="pledge-nav">
                    <Row>
                        <Col sm={6}>
                            <h4 className="pledge-name">Take a Pledge List</h4>
                        </Col>
                        <Col sm={6}>
                            <Link to={"/addpledge"} className="pledge-add">
                                Add Pledge List
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="box-body">
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
                            <div className="box-right">
                            <label>Search:</label>
                            <input onChange={(e) => handleSearchClick(e.target.value)} type="text" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <table border={1} className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((item) => (
                                        <tr>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.state}</td>
                                            <td>{item.city}</td>
                                            
                                            <td>
                                            <div className='action'>
                                                    <div className='action'>
                                                        <button className="edit-btn"><MdEditSquare /></button>
                                                    </div>
                                                    <button className="dlt-btn"><MdDeleteForever /></button>
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

export default Pledge