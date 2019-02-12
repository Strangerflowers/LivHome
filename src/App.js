import React, { Component } from 'react';
import Footer from './components/Footer.js';
import { Route,Switch,Redirect} from "react-router-dom";
import Home from './pages/Home/home.js';
import Cart from './pages/Cart/cart.js';
import Mine from './pages/mine/mine.js';
import Around from './pages/Around/around.js';
import Aproducts from './pages/Aproducts/all.js';
import Detail from './pages/Detail/detail.js';
// 引入antd样式
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Footer />
       <Switch>
            <Redirect exact from='/' to='/home/index/'/>
            <Route path="/home/"  component={Home} />
            <Route path="/cart/" component={Cart} />
            <Route path="/products/" component={Aproducts} />
            <Route path="/mine/" component={Mine} />
            <Route path = '/around' component = {Around} />
            <Route path="/detail/" component={Detail} />
        </Switch>

      </div>
    );
  }
}

export default App;
