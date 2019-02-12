import React,{Component} from 'react';
import '../../styles/home-head.less';

class Wash extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
           
        }
    }
	render(){
		return (
				<div className='index'>
					洗漱用品
				</div>
			);
	}
}

export default Wash