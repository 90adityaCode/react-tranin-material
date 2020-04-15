import React, { Component } from "react";
import "./user.css";
import Blog from "../blog/Blog";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {flag: false};
  }
  render() {
    console.log('render UserDetail')
    const user = this.props.data;
    return (
      <div className="container" style={{ "margin-top": "30px" }}>
        <div className="row">
          <div className="col-sm-3">
            <h5>
              <center>About Me</center>
            </h5>
            <div className="fakeimg">
              <img
                src={user.avatar}
                className="rounded"
                alt="Cinque Terre"
                width="250"
                height="210"
              />
            </div>
            <hr />
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <h6>
                  <span>First Name:</span> <span>{user.first_name}</span>
                </h6>
              </li>
              <li className="nav-item">
                <h6>
                  <span>Last Name:</span> <span>{user.last_name}</span>
                </h6>
              </li>
              <li className="nav-item">
                <h6>
                  <span>Email:</span> <span>{user.email}</span>
                </h6>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <Blog />
        </div>
      </div>
    );
  }

/***********************************************************************************************************************
  //Component Mounting Hooks Start
  // Sequence -> constructor-> getDerivedStateFromProps -> rneder-> componentDidMount
  //Component Update phase 
  //getDerivedStateFromProps -> shouldComponentUpdate-> render-> getSnapshotBeforeUpdate-> componentDidUpdate

************************************************************************************************************************/
  componentDidMount() {
    console.log('componentDidMount - UserDetail');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.data.id !== nextProps.data.id){ 
      return true
    }
    return false;
  }
   
  componentDidUpdate() {
    console.log('componentDidUpdate - UserDetail');
  }
  
  getSnapshotBeforeUpdate(){
   console.log('getSnapshotBeforeUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}

export default UserDetail;
