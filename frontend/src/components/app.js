import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container'
import Modal from './modal/modal';
import Footer from './footer/footer'
import './reset.css';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => (
  <div className='main-app'>
    <NavBarContainer />
    <Modal />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/" component={MainPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;