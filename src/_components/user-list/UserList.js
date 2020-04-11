import React, { Component } from "react";
// there 3 ways to create/perform event in react
//a. bind method b. public class field, callback
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        }
      ]
    };

    this.handleUserEvent = this.handleUserEvent.bind(this); 
  }

  handleUserEvent(e, id) {
    alert(id);
  }

  list = () => {
    const List = this.state.data.map((val, key) => {
      return (
        <tr key={val.id}  onClick={this.handleUserEvent.bind(val.id, this)}>
          <td>
            <img src={val.avatar} style={{ width: "15%" }} />
          </td>
          <td>{val.email}</td>
          <td>{val.first_name}</td>
          <td>{val.last_name}</td>
        </tr>
      );
    });
    return List;
  };

  render() {
    return (
      <>
        <div className="container">
          <table striped bordered hover size="sm" className="table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>{this.list()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default UserList;
