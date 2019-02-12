import React,{Component} from 'react';
import '../../styles/home-head.less';
import {NavLink} from 'react-router-dom';

class Hhead extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            navList: [
                { title: '首页' ,path:'/home/index/'},
                { title: '新品' ,path:'/home/new/'},
                { title: '家务' ,path:'/home/house/'},
                { title: '下厨' ,path:'/home/kitchen/'},
                { title: '生活' ,path:'/home/life/'},
                { title: '家居服' ,path:'/home/clpthes/'},
                { title: '床品' ,path:'/home/bedding/'},
                { title: '沐浴洗漱' ,path:'/home/wash/'}
            ],
            sel: Number(sessionStorage.getItem('sel')) || 0
        }
    }
    // changeSel(nextProps){
    //     this.setState({
    //         sel: nextProps.sel
    //     });
    //     window.sessionStorage.setItem('sel', nextProps.sel);
    // }
	render(){
		return (
				<div className='head'>
					<div className="head-top">
                        {/* <img src="../../img/head.png" alt=""/> */}
                        <div className="headinfo"></div>
                        <i className="iconfont icon-chazhaobiaodanliebiao"></i>
                    </div>
                    <div  title="分类导航条" className="wrap-menuNavNewProduct" >
                        <div id="navPanelDiv" className="menuNavNewProductPanel">
                            <ul id="navUL" className="menuNavNewProduct" >
                            {
                                this.state.navList.map((item,idx)=>{
                                    return <NavLink to={item.path} key={idx}
                                     activeStyle={{color:'#58bc58','borderBottom':'2px solid #58bc58'}}
                                    >
                                        <li className="font-large selected" key={item.title}>
                                            <span>{item.title}</span>
                                        </li> 
                                    </NavLink>
                                })
                            }
                               
                               
                            </ul>
                        </div>
                    </div>

					
				</div>
			);
	}
}

export default Hhead