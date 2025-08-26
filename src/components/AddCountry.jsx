import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import { useNavigate, Link } from 'react-router-dom'
import { countryAddSuccess, countryAddRequest, countryAddFailure } from '../Redux/Action/countryAction'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const AddCountry = () => {

      const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()

    // const [countryTitle, setCountryTitle] = useState();
    // const [isdnCode, setIsdnCode] = useState();
    const [formData, setFormData] = useState([]);

    const { loginStatus } = useSelector((country) => country.login);
    console.log(loginStatus, "data")

     const navigate = useNavigate();
     const dispatch = useDispatch();
        const onSubmit = (formData) => {
           
            let data = {
                id : formData.length + 1,
                countrytitle : formData.countryTitle,
                isdncode : formData.isdnCode
            };
            dispatch(countryAddRequest());
            axios.post("http://localhost:3001/api/country/", data, {
                headers: {
                    Authorization: `Bearer ${loginStatus}`,
                }
            })
            .then((res) => {
                if(res.status === 200) {
                    dispatch(countryAddSuccess(res.data.data));
                    navigate("/country");
                }
                
            })
            .catch((err) => {
                dispatch(countryAddFailure(err));
                console.log(err);
            });
        };
  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Add Country</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Country Title:  <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                    <input type="text" {...register("countryTitle", {required: true})} id="name" className='user-input' /> <br/>
                       {errors.countryTitle && <span>This field is required</span>}
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>ISDN Code: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input type="text" {...register("isdnCode", {required: true})}  id="name" className='user-input'  /> <br />
                       {errors.isdnCode && <span>This field is required</span>}
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                <Link to={"/country"} className="back-btn">Back</Link>
                <button type='submit' className="save-btn">Save</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default AddCountry