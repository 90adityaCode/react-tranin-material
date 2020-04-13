import React, { Component } from "react";
import UserDetail from "./UserDetails";
import UserService from "../../_services/user-list-service";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: "",
      userList: [
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
      ],
      userDetail: {}
    };

    this.handleUserEvent = this.handleUserEvent.bind(this);
  }

  handleUserEvent(e, val) {
    this.setState({ userDetail: val });
  }

  list = () => {
    const List = this.state.userList.map((val, key) => {
      return (
        <tr
          key={val.id}
          onClick={e => {
            this.handleUserEvent(e, val);
          }}
        >
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
    const userDetail = this.state.userDetail;
    return (
      <div className="container">
        {!userDetail.id ? (
          <>
            <h4>
              <center>User List</center>
            </h4>
            <table size="sm" className="table">
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
          </>
        ) : (
          <UserDetail data={userDetail} />
        )}
      </div>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (state.trainer !== props.trainer) {
      return {
        trainer: props.trainer
      };
    }
    return null;
  }

  componentDidMount() {
    const _userService = new UserService();
    _userService.fetchUser().then(userList => {
      console.log("userList",userList );
    });
  }
}

export default UserList;
