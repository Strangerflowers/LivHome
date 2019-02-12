import React,{Component} from 'react';
import '../../styles/home-head.less';

class Clothes extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
           
        }
    }
	render(){
		return (
				<div className='index'>
					家居服
				</div>
			);
	}
}

export default Clothes