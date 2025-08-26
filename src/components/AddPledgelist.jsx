import axios from 'axios';
import React, { use, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

const AddPledgelist = () => {

    const{
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()



    
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [mobile, setMobile] = useState();
    // const [city, setCity] = useState();
    // const [state, setState] = useState();
    // const [message, setMessage] = useState();
    const [formData, setFormData] = useState([]);
    

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWE0Mjg5YjQxOGUzNmEzYzU1ZWI2YyIsInRva2VuIjoiY2EyZDMzNWViNDJkYTZiODgyY2Q2Y2JhNmY3MmYzZjQiLCJpYXQiOjE3NTMxNzI0MzUsImV4cCI6MTc1MzI1ODgzNX0.wtxo_nC6vBBM8M_4LTTPObDfS0Ug3ZEczNrQTMwynbU"

    const navigate = useNavigate();

    const onSubmit = (formData) => {
        

        let data = {
            id : formData.length + 1,
            name : formData.name,
            email : formData.email,
            mobile : formData.mobile,
            city : formData.city,
            state : formData.state,
            message : formData.message
        }

        axios 
        .post("http://localhost:3001/api/noAuth/pledge/", data, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then((res) => {
            setFormData(res.data.data);
            navigate("/pledge");
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
        <Container className='user-page'>
            <h3 className='user-name'>Add Pledge List</h3>
            <form onSubmit={handleSubmit}>
            
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Name: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("name", { require: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Email: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("email", { require: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Phone: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("phone", { require: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>City: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("city", { require: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>State: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("state", { require: true })} id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Message: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input {...register("message", { require: true })}   id="name" className='user-input'  />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label htmlFor="name" className='user-label'>Front-Side Display: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <select id="role" className='user-input'>
                            <option true="yes">yes</option>
                            <option true="no">No</option>
                         </select>
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                <Link to={"/pledge"} className="back-btn">Back</Link>
                <button type='submit' className="save-btn">Save</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default AddPledgelist