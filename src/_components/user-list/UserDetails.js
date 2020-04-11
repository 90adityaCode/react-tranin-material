import React from "react";
import "./user.css";

const UserDetail = props => {
  console.log(props);
  const user = props.data;
  return (

    <div className="container" style={{"margin-top":"30px"}}>
      <div className="row">
        <div className="col-sm-3">
          <h5><center>About Me</center></h5>
          <div className="fakeimg">
           <img src={user.avatar}  class="rounded" alt="Cinque Terre" width='250' height='210'/>
          </div>  
          <hr />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
             <h6><span>First Name:</span> <span>{user.first_name}</span></h6>
            </li>
            <li className="nav-item">
              <h6><span>Last Name:</span> <span>{user.last_name}</span></h6>
            </li>
            <li className="nav-item">
              <h6><span>Email:</span> <span>{user.email}</span></h6>
            </li> 
          </ul>
          <hr className="d-sm-none" />
        </div>
        <div className="col-sm-9">
            
          <br />
          <h2>Latest Blog</h2>
          <h5>Title description, April 2, 2020</h5> 
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    </div>  
  );
}

export default UserDetail;