import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { languageEditFailure, languageEditRequest, languageEditSuccess } from '../Redux/Action/languageAction';

const Editlanguage = ({formData, setFormData}) => {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm();

    const { loginStatus } = useSelector((state) => state.login);
    console.log(loginStatus, "data");

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const _id = parseInt(location.state)
    console.log(location, "loc");

    useEffect(() => {
        if(location.state){
            setValue("languageName", location.state.languageName)
            setValue("languageCode", location.state.languageCode)
            setValue("status", location.state.status)
        }
    }, [location.state])

    const onSubmit = (formData) => {
        

        let data = {
            _id : formData._id,
            languageName : formData.languageName,
            languageCode : formData.languageCode,
            status : formData.status
        }
        dispatch(languageEditRequest());
        // let result = formData?.map((item) => {
        //     if(item._id === _id){
        //         return data
        //     }
        //     return item
        // })

        axios 
        .put(`http://localhost:3001/api/language/${location.state._id}`, data, {
            headers: {
                Authorization: `Beaere ${loginStatus}`
            }
        })
        .then((res) => {
            if (res.status === 200) {
                dispatch(languageEditSuccess(res.data.data));
                setFormData(res.data.data)
                navigate("/language")
            }
            
        })
        .catch((err) => {
            dispatch(languageEditFailure(err));
            console.log(err);
        })
    }

  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Edit Language</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label  htmlFor="name" className='user-label'>Language Name: <span class="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                        <input {...register("languageName", { required : true })} type="text" id="name" className='user-input' />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Language Code: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("languageCode", { required : true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
             <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Status: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("status", { required: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                <Link to={"/language"} className="back-btn">Back</Link>
                <button type='submit' className="save-btn">update</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default Editlanguage