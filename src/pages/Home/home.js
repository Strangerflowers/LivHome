import React,{Component} from 'react';
import Footer from '../../components/Footer.js';
import Hhead from './head.js';
import { Route,Switch,Redirect} from "react-router-dom";

import Index from './Index.js';
import New from './new.js';
import House from './house.js';
import Kitchen from './kitchen.js';
import Life from './life.js';
import Clothes from './clothes.js';
import Bedding from './bedding.js';
import Wash from './wash.js';
import About from './about.js';
class Home extends Component{
	render(){
		return (
				<div className='App'>
					<Hhead/>
					<Switch>
						{/* <Redirect from='/' to='/home/index/' /> */}
                        <Route path='/home/index/' component={Index}/>
                        <Route path='/home/new/' component={New}/>
                        <Route path='/home/house/' component={House}/>
                        <Route path='/home/kitchen/' component={Kitchen}/>
						<Route path='/home/life/' component={Life}/>
						<Route path='/home/clpthes/' component={Clothes}/>
						<Route path='/home/bedding/' component={Bedding}/>
						<Route path='/home/wash/' component={Wash}/>
						<Route path='/home/about/' component={About}/>
                        {/* <Route path='/home/channel/:pageId' component={Channel}/> */}
                        
                    </Switch>
					<Footer />
				</div>
			);
	}
}

export default Home