import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Language.css"
import { MdEditSquare } from "react-icons/md";
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { languageListFailure, languageListRequest, languageListSuccess } from '../Redux/Action/languageAction';


const Language = () => {


    const { loginStatus } = useSelector((state) => state.login);
    console.log(loginStatus, "data");

    const dispatch = useDispatch();
    const [formData, setFormData] = useState([]);
    const [products, setProducts] = useState(formData);

    function handleSearchClick(value){
        if(value === ""){
            setProducts(formData);
            return;
        }
        const filterBySearch = formData.filter((item) =>
            item?.languageName?.toLowerCase().includes(value.toLowerCase()) ||
            item?.languageCode?.toLowerCase().includes(value.toLowerCase()) ||
            item?.status?.toLowerCase().includes(value.toLowerCase())
        )
        setProducts(filterBySearch);
    }

    useEffect(() => {
        dispatch(languageListRequest());
        axios
        .get("http://localhost:3001/api/language/?page=1&size=30", {
            headers: {
                Authorization: `Bearer ${loginStatus}`
            }
        })
        .then((res) => {
            if(res.status === 200) {
            console.log(res, "res");
            dispatch(languageListSuccess(res.data.data));
            setFormData(res.data.data);
            setProducts(res.data.data);
            }
            
        })
        .catch((err) => {
            dispatch(languageListFailure(err));
            console.log(err);
        })
    }, []);
  return (
    <div>
       
        <Container>
            <div className="language-page">
                <nav className='language-nav'>
                     <Row>
                        <Col sm={6}>
                            <h4 className='language-name'>Language List</h4>
                        </Col>
                        <Col sm={6}>
                            <Link to={"/addlanguage"} className='language-add'>Add Language</Link>
                        </Col>
                    </Row>
                </nav>           
                <div className="language-body">
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
                                    
                                    <th>Language Name</th>
                                    <th>Language Code</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {products?.map((item) => (
                                <tr>
                                    <td>{item._id}</td>
                                    
                                    <td>{item.languageName}</td>
                                    <td>{item.languageCode}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <div className='action'>
                                            {/* <button className="edit-btn"><MdEditSquare /></button> */}
                                            <Link to={"/editlanguage"} state={item} className='edit-btn'><MdEditSquare /></Link>
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

export default Language