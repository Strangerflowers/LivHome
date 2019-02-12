import React,{Component} from 'react';
import '../../styles/home-head.less';

class House extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
           
        }
    }
	render(){
		return (
				<div className='index'>
					家务
				</div>
			);
	}
}

export default House