
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import Help from './components/Help';
import EditExpenses from './components/EditPage'
import Page404 from './components/404Page';
import Header from './components/Header';
import AddExpenses from './components/AddExpenses';


 const AppRouters = () => (
  
     <BrowserRouter>

     <div>
     <Header />
 
     <Switch>
     <Route path="/" component={LandingPage}  exact={true}/>
     <Route path="/create" component={AddExpenses} />
     <Route path="/dashboard" component={DashBoard}/>
     <Route path="/edit/:id" component={EditExpenses}/>
     <Route path="/help" component={Help} />
     <Route  component={Page404} />

     </Switch>

     </div>

     </BrowserRouter>

 );
 
 export default AppRouters;