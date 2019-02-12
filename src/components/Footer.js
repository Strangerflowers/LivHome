import React from 'react';
import { NavLink} from "react-router-dom";
import '../styles/footer.less'
class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            footerList: [
                { title: '首页', pic: 'iconfont icon-shouye', path: '/home' },
                { title: '全部商品', pic: 'iconfont icon-icon-', path: '/products' },
                { title: '闲逛', pic: 'iconfont icon-faxian', path: '/around' },
                { title: '购物车', pic: 'iconfont icon-gouwuchekong', path: '/cart' },
                { title: '账户中心', pic: 'iconfont icon-icon03', path: '/mine' },

            ]
        }
    }
    render(){
        return (
            <div className="footer">
                <ul className="footermenuNav">
                {
                    this.state.footerList.map((item,idx)=>{
                        return  <NavLink to={item.path} key={idx} activeStyle={{color:'#58bc58'}}>
                                    <li key={item.title}>
                                        <div className={item.pic}></div> <span className="lispan">{item.title}</span>
                                    </li> 
                                </NavLink>
                    })
                }
                   
                </ul> 
            </div>
        )
    }
}


export default Footer