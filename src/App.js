
import './css/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { path } from './constant/constant';
import { history } from './redux';

import EditAllUser from './showAllUsers/EditAllUser';
import login from './login/login';
import EditProduct from './EditProduct/EditProduct';

import EditClock from './EditProductClock/EditClock';
import HomeHeader from './HomeHeader/HomeHeader';
import ShowUser from './showAllUsers/ShowUser';
import ProductInfor from './ProductInfor/ProductInfor';
// import { history } from './redux';
import { userIsAuthenticated, userIsNotAuthenticated } from './authentication/authentication'
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';
import Confir from './Confir/Confir';
import OrdersList from './OrdersList/OrdersList';
import OptionsforAdmin from './OptionsforAdmin/OptionsforAdmin';
import Userdk from './Userdk/Userdk';
import ConfirUserdk from './Confir/ConfirUserdk';



class App extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route path={path.HOME} exact component={userIsAuthenticated(HomePage)} />
            <Route path={path.HOMEPAGE} component={userIsAuthenticated(HomePage)} />

            <Route path={path.EDITALLUSERS} component={userIsAuthenticated(EditAllUser)} />
            <Route path={path.LOGIN} component={userIsNotAuthenticated(login)} />
            <Route path={path.EDITPRODUCT} component={(EditProduct)} />
            <Route path={path.EDITCLOCK} component={(EditClock)} />
            <Route path={path.HOMEHEADER} component={(HomeHeader)} />
            <Route path={path.SHOWUSER} component={(ShowUser)} />
            <Route path={path.PRODUCTINFOR} component={(ProductInfor)} />

            <Route path={path.ORDERCONFIR} component={(OrderConfirmation)} />
            <Route path={path.CONFIRSUCCESS} component={(Confir)} />
            <Route path={path.ORDERLIST} component={(OrdersList)} />

            <Route path={path.OPTIONSFORADMIN} component={(OptionsforAdmin)} />
            <Route path={path.USERDK} component={(Userdk)} />
            <Route path={path.LOADUSERDK} component={(ConfirUserdk)} />





          </Switch>
        </Router>

      </>
    )
  }
}



const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);