import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdEditSquare } from "react-icons/md";
import "./State.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import {
  stateListRequest,
  stateListSuccess,
  stateListFailure,
} from "../Redux/Action/stateAction";
import { useDispatch } from "react-redux";

const State = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const [products, setProducts] = useState(formData);

  function handleSearchClick(value) {
    if (value === "") {
      setProducts(formData);
      return;
    }
    const filterBySearch = formData.filter(
      (item) =>
        item?.country?.toLowerCase().includes(value.toLowerCase()) ||
        item?.stateTitle?.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filterBySearch);
  }

 

  useEffect(() => {
    dispatch(stateListRequest());
    axios
      .get("http://localhost:3001/api/noAuth/state/?page=1&size=50")
      .then((res) => {
        if(res.status === 200) {
        console.log(res, "res")
        dispatch(stateListSuccess(res.data.data))
        setProducts(res.data.data);
        setFormData(res.data.data);
        }
      })
      .catch((err) => {
        dispatch(stateListFailure(err));
        console.log(err);
      });
  }, []);



  return (
    <div>
      <Container>
        <div className="state-page">
          <nav className="state-nav">
            <Row>
              <Col sm={6}>
                <h4 className="state-name">State List</h4>
              </Col>
              <Col sm={6}>
                <Link to={"/addstate"} className="state-add">
                  Add State
                </Link>
              </Col>
            </Row>
          </nav>
          <div className="box-body">
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
                <div className="box-right">
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
                      <th>Id</th>
                      <th>Country Name</th>
                      <th>State Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((item) => (
                      <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.country}</td>
                        <td>{item.stateTitle}</td>
                        <td>
                          <div className="action">
                            <div className="action">
                              <Link to={"/editstate"} state={item} className="edit-btn">
                                <MdEditSquare />
                              </Link>
                            </div>
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
  );
};

export default State;
