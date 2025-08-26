import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './User.css'

const User = () => {
  return (
    <div>
        <Container className='user-page1'>
            <h3 className='user-name'>Edit Admin Detail</h3>
            <form>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label for="name" className='user-label'>Name: <span class="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                        <input type="text" id="name" className='user-input' required />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label for="email" className='user-label'>E-Mail Address: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input type="email" id="email"   className='user-input'  required />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                         <label for="password" className='user-label'>Password: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input type="password" id="password" className='user-input'  required />
                    </Col>
                </Row>   
            </div>
            <div className="form-group">
                <Row>
                    <Col sm={4}>
                        <label for="confirm-password" className='user-label'>Confirm Password: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                       <input type="password" id="confirm-password" className='user-input' required />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                 <Row>
                    <Col sm={4}>
                        <label for="role" className='user-label'>Role: <span className="required">*</span></label>
                    </Col>
                    <Col sm={8}> 
                        <select id="role" className='user-input'>
                            <option value="admin">admin</option>
                            <option value="user">test ADMIN</option>
                         </select>
                    </Col>
                </Row>
            </div>
            <div className="buttons">
                
                <Link to={"/dashboard"} className="back-btn">Back</Link>
                <button type="submit" className="update-btn">Update</button>
            </div>
            </form>
        </Container>
    </div>
  )
}

export default User