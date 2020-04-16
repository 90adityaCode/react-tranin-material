import React, {Component} from 'react';
import UserList from './_components/user-list/UserList';
import Routers from './_router/Router';
class App extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <Routers />
    )
  } 
  
}

export default App;