import React,{Component} from 'react';
import '../../styles/home-head.less';

class New extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
           
        }
    }
	render(){
		return (
				<div className='index'>
					新品
				</div>
			);
	}
}

export default New