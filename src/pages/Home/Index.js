import React, { Component } from "react";
import "../../styles/home-index.less";
import { Carousel } from "antd";
class Index extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      picList: [],
      otherList: [],
      rootPath: "http://i.lifevccdn.com"
    };
  }

  componentDidMount() {
    this.getMainData();
  }
  getMainData() {
    React.axios
      .get(
        "http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true"
      )
      .then(res => {
        // if (res.statusText === 'OK') {
        let picList = res.data.InnerData[0].InnerData;
        console.log(res);
        console.log(picList);
        // for (let i = 0; i < picList.length; i++) {
        //     let picUrl = this.state.rootPath + picList[i].ImageUrl;
        //     banner.push(picUrl);
        // }
        let others = res.data.InnerData.slice(1);
        console.log("others", others);
        for (let i = 0; i < others.length; i++) {
          others[i].InnerData.ImageUrl =
            this.state.rootPath + others[i].InnerData.ImageUrl;
        }
        this.setState({
          picList: picList,
          otherList: others
        });
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }
  gotoDetail() {
    console.log(111);
  }

  render() {
    return (
      <div className="home-index">
        <div className="swiper">
          <Carousel autoplay>
            {this.state.picList.map((item, idx) => {
              return (
                <div key="idx">
                  <img src={"http://i.lifevccdn.com" + item.ImageUrl} alt=" " />
                </div>
              );
            })}
          </Carousel>
          mountNode
        </div>

        {this.state.otherList.map((item, index) => {
          return (
            <div className="others" key={index}>
              <img
                src={item.InnerData.ImageUrl}
                alt=""
                style={{
                  width: "100%"
                }}
                useMap={"#planetmap" + index + 1}
              />
              <map name={"planetmap" + index + 1} id={"planetmap" + index + 1}>
                {item.InnerData.TouchElem.map((itm, idx) => {
                  return (
                    <area
                      key={idx}
                      shape="rect"
                      alt=""
                      coords={
                        Math.floor(
                          ((itm.BeginXP / 100) * item.InnerData.ImageWidth) / 2
                        ) +
                        "," +
                        Math.floor(
                          ((itm.BeginYP / 100) * item.InnerData.ImageHeight) / 2
                        ) +
                        "," +
                        Math.floor(
                          ((itm.EndXP / 100) * item.InnerData.ImageWidth) / 2
                        ) +
                        "," +
                        Math.floor(
                          ((itm.EndYP / 100) * item.InnerData.ImageHeight) / 2
                        )
                      }
                      onClick={this.gotoDetail.bind(this)}
                      // href={itm.Uri}
                    />
                  );
                })}
              </map>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Index;
