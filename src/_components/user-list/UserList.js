import React, { Component } from "react";
import UserDetail from "./UserDetails";
import UserService from "../../_services/user-list-service";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: "",
      userList: [],
      userDetail: {},
      count: 0
    };

    this.handleUserEvent = this.handleUserEvent.bind(this);
  }


  render() {
    const userDetail = this.state.userDetail;
    console.log('render userList')
    return (
      <div className="container">
        <span style={{'float':'right'}} onClick={this.addUserHandler}>+</span>
        New User {this.state.count}
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
  
  addUserHandler = ()=> {
    this.setState({ count: this.state.count + 1 });
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

  //Component Mounting Hooks Start
  // Sequence -> constructor-> getDerivedStateFromProps -> rneder-> componentDidMount
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps  - userList')
    if (state.trainer !== props.trainer) {
      return {
        trainer: props.trainer
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount - userList')
    const _userService = new UserService();
    _userService.fetchUser().then(userList => {
      this.setState({userList: userList.data})
    });
  }

}

export default UserList;
