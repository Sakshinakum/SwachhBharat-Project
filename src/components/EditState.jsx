import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { stateEditRequest, stateEditSuccess, stateEditFailure } from '../Redux/Action/stateAction';
import { useDispatch, useSelector } from 'react-redux';

const EditState = ({formData, setFormData}) => {

    const { loginStatus } = useSelector((state) => state.login);
 
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [country, setCountry] = useState()
    const [stateTitle, setStateTitle] = useState()

    useEffect(() => {
        if(location.state){
            setCountry(location.state.country)
            setStateTitle(location.state.stateTitle)
           
        }
    }, [location.state]);

        const handleUpdate = (e) => {
            e.preventDefault();
           
            let data = {
                country : country,
                stateTitle : stateTitle
            }
            dispatch(stateEditRequest());

            axios
            .put(`http://localhost:3001/api/state/${location.state._id}`, data , {
                headers : {
                    Authorization : `Bearer ${loginStatus}`,
                },
            })
            .then((res) => {

                dispatch(stateEditSuccess(res.data.data));
                navigate("/state")
            })
            .catch((err) => {
                dispatch(stateEditFailure(err));
                console.log(err);
            })
        }
  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Edit State</h3>
            <form onSubmit={handleUpdate}>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label  htmlFor="name" className='user-label'>Country: <span className="required">*</span></label>
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
                       <input value={stateTitle} onChange={(e) => setStateTitle(e.target.value)}  id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                <Link to={"/state"} className="back-btn">Back</Link>
                <button type='submit' className="save-btn">update</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default EditState