import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import  Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Home';
import Footer from './components/Footer';
import Sell from './components/Sell';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/home" component = {Home} />
            <Route path = "/details" component = {Details} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/items" component = {ProductList} /> 
            <Route path = "/sell" component = {Sell} />
            <Route component = {Default} />
          </Switch>
          <Modal/>
          <Footer />

      </React.Fragment>
    );
  }
}

export default App;
