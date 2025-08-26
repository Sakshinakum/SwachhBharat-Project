import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { languageAddRequest, languageAddSuccess, languageAddFailure } from "../Redux/Action/languageAction";
import { useDispatch, useSelector } from "react-redux";

const AddLanguage = () => {

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // const [languageCode, setLanguageCode] = useState();
  // const [languageName, setLanguageName] = useState();
  // const [status, setStatus] = useState();
  const [formData, setFormData] = useState([]);
  
  const { loginStatus } = useSelector((state) => state.login);
  console.log(loginStatus, "data");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
   
    let data = {
      id : formData.length + 1,
      languageCode: formData.languageCode,
      languageName: formData.languageName,
      status: formData.status
    };
    dispatch(languageAddRequest());
    axios
      .post("http://localhost:3001/api/language/", data, {
            headers: {
                Authorization: `Bearer ${loginStatus}`
            }
      })
      .then((res) => {
        if(res.status === 200) {
          dispatch(languageAddSuccess(res.data.data));
           setFormData(res.data.data);
          navigate("/language");
        }
       
      })
      .catch((err) => {
        dispatch(languageAddFailure(err));
        console.log(err);
      });
    
  };
  return (
    <div>
      <Container className="user-page">
        <h3 className="user-name">Add Language</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Row>
              <Col sm={4}>
                <label htmlFor="name" className="user-label">
                  Language Name: <span className="required">*</span>
                </label>
              </Col>
              <Col sm={8}>
                <input type="text" {...register("languageName", { required: true })}   id="name" className="user-input" />
              </Col>
            </Row>
          </div>
          <div className="form-group">
            <Row>
              <Col sm={4}>
                <label htmlFor="name" className="user-label">
                  Language Code: <span class="required">*</span>
                </label>
              </Col>
              <Col sm={8}>
                <input type="text" {...register("languageCode", { required: true })} id="name" className="user-input" />
              </Col>
            </Row>
          </div>
          
          <div className="form-group">
            <Row>
              <Col sm={4}>
                <label htmlFor="name" className="user-label">
                  Status: <span className="required">*</span>
                </label>
              </Col>
              <Col sm={8}>
                <input type="text" {...register("status", { required: true })}   id="name" className="user-input" />
              </Col>
            </Row>
          </div>
          <div className="buttons">
            <Link to={"/language"} className="back-btn">Back</Link>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddLanguage;
