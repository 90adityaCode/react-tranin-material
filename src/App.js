import React, {Component} from 'react';
import UserList from './_components/user-list/UserList';
class App extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <UserList />
    )
  } 
  
}

export default App;