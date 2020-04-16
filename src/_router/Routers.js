import React from 'react';
import UserList from './_components/user-list/UserList';
import Blog from './_components/blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Routers = ()=>{
  return (
    <Router>
    <Switch>
      <Route path="/users" component={UserList}/>
      <Route path="/blog" component={Blog}/> 
      <Redirect to='/' />
    </Switch>
       
    </Router>
  )
}
export default Routers;