import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './AddState.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { stateAddRequest, stateAddSuccess, stateAddFailure } from '../Redux/Action/stateAction';
import { useDispatch, useSelector } from 'react-redux';
const AddState = () => {

    const { loginStatus } = useSelector((state) => state.login);
    console.log(loginStatus, "data");

    const [country, setCountry] = useState()
    const [stateTitle, setStateTitle] = useState()
    const [formData, setFormData] = useState([]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id : formData.length + 1,
            country: country,
            stateTitle: stateTitle
        }
        dispatch(stateAddRequest());
        axios.post("http://localhost:3001/api/state/", data, {
            headers: {
                Authorization : `Bearer ${loginStatus}`,
            }
        })
        .then((res) => {
            setFormData(res.data.data);
            dispatch(stateAddSuccess(res.data.data));
            navigate("/state")
        })
        .catch((err) => {
            dispatch(stateAddFailure(err));
            console.log(err);
        })
    }

  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Add State</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Country: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                        <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" id="name" className='user-input' />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>State Title: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input value={stateTitle} onChange={(e) => setStateTitle(e.target.value)} type="text"  id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                <Link to={"/state"}  className="back-btn">Back</Link>
                <button type='submit' className="save-btn">Save</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default AddState