import React,{Component} from 'react';
import Footer from '../../components/Footer.js';
import '../../styles/all-head.less';

class Aproducts extends Component{
	render(){
		return (
				<div className='aproducts'>
					<div className="all-head" >
						<div className="all-head-content">
							全部产品
						</div>
						
						<div   id="wrap" className="search-panel">
							<div   id="search-bar">
								<form   action="">
									<i className="iconfont  icon-sousuo"></i>
									<input   type="search" placeholder="搜索商品" className="searchinput changeStyle" /> 
									<input   id="btnCancel" type="button" value="取消" className="sch-cancel" />
								</form>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			);
	}
}

export default Aproducts