import React from 'react'
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { FaTasks } from "react-icons/fa";
// import { FaDatabase, FaArrowCircleRight } from 'react-icons/fa';
import { GrTasks } from "react-icons/gr";
import { FaArrowCircleRight } from "react-icons/fa";

import { FaUsers } from "react-icons/fa";



const Dashboard = () => {
  return (
    <div>
      <div>   
        <div className='main-container'>
          <p className="dashboard">Dashboard</p>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">6</h1>
                      <p>Total Programmes</p>
                    </div>
                    <div className="card-icon">
                      <GrTasks size={40} color="#007bff"/>
                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">108</h1>
                      <p>Total Donors</p>
                    </div>
                    <div className="card-icon">
                      <FaUsers size={50} color="#007bff"/>

                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">33</h1>
                      <p>Total Take a Pledge</p>
                    </div>
                    <div className="card-icon">
                      <FaUsers size={50} color="#007bff"/>
                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
            </Row>
            <br />
             <Row >
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">6</h1>
                      <p>Total OurImpact</p>
                    </div>
                    <div className="card-icon">
                      <GrTasks size={40} color="#007bff"/>
                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">8</h1>
                      <p>Total Joined Volunteers</p>
                    </div>
                    <div className="card-icon">
                      <FaUsers size={50} color="#007bff"/>
                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="info-card">
                  <div className="card-content">
                    <div className="card-left">
                      <h1 className="number">88</h1>
                      <p>Total Apply Volunteers</p>
                    </div>
                    <div className="card-icon">
                      <FaUsers size={50} color="#007bff"/>
                    </div>
                  </div>
                  <div className="footer">
                    More info <FaArrowCircleRight size={18} />
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
        </div>
        {/* <div>
            <p>
              <b>Copyright © 2025 </b> 
              <span className='brand'>SwachhBharat. </span>
              All rights reserved.
            </p>
        </div> */}
      </div>
        
    </div>
  )
}

export default Dashboard