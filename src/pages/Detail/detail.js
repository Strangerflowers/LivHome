import React,{Component} from 'react';
import '../../styles/detail.less';


import {NavLink} from 'react-router-dom';
import { Carousel } from 'antd';

class Hhead extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            Dbanner:[],
            dataList:[]

        }
    }

    componentDidMount() {
        this.getMainData();
    }
	getMainData() {
        React.axios.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid=31162&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
            .then((res) => {
               console.log(res);
               let banner=res.data.InnerData.Headers;
               let list=res.data.InnerData;
               this.setState({
                   Dbanner:banner,
                   dataList:list
               },()=>{
                   console.log(this.state.Dbanner)
               })
            })
            .catch((err) => {
                console.log(err);
            })
	}
   
	render(){
		return (
				<div className='detail'>
					<div className="detail-head">
                        <i className="iconfont icon-jiantou-copy"></i>
                        <div className="detail-title">
                            商品详情
                        </div>
                        <i></i>
                    </div>
                    <div className="swiper">
						<Carousel autoplay>
						{
							this.state.Dbanner.map((item,idx)=>{
								return <div  key="idx">
									<img src={'http://i.lifevccdn.com'+item.ImageUrl} alt=" " />
								</div>
							})
						}
						</Carousel>
						{/* mountNode */}
					</div>
                    <div className="detail-content">
                        <div className="detail-name">
                            {this.state.dataList.Name}
                        </div>
                        <div className="detail-describe">
                            {this.state.dataList.Caption}
                        </div>
                        <div className="detail-price">
                            <span className="rmb">￥</span> <span className="Dprice">{this.state.dataList.SalePrice}</span>   
                            {/* <span className="pic">新</span> */}
                        </div>
                    </div>
					
				</div>
			);
	}
}

export default Hhead