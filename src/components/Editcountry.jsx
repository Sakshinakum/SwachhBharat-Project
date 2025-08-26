import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { countryEditSuccess, countryEditRequest, countryEditFailure } from '../Redux/Action/countryAction';
import { useDispatch, useSelector } from 'react-redux';

const Editcountry = ({setFormData}) => {

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
            setValue("countryTitle", location.state.countryTitle);
            setValue("isdnCode", location.state.isdnCode);
        }
    }, [location.state])

    const onSubmit = (formData) => {
        

        let data = {
            _id : formData.length + 1,
            countryTitle : formData.countryTitle,
            isdnCode : formData.isdnCode
        }
        dispatch(countryEditRequest());
        // let result = formData?.map((item) => {
        //     if(item._id === id){
        //         return data
        //     }
        //     return item
        // })

        axios 
        .put(`http://localhost:3001/api/country/${location.state._id}`, data, {
            headers : {
                Authorization : `Beaere ${loginStatus}` 
            }
        })
        .then((res) => {
            dispatch(countryEditSuccess(res.data.data));
            navigate("/country")
        })
        .catch((err) => {
            dispatch(countryEditFailure(err));
            console.log(err)
        })
        
    }




  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Edit Country</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label  htmlFor="name" className='user-label'>Country Title: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                        <input {...register("countryTitle",{required : true})} type="text" id="name" className='user-input' />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>ISDN Code: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("isdnCode",{required : true})} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                
                <Link to={"/country"} className="back-btn">Back</Link>
                <button type='submit' className="save-btn">update</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default Editcountry