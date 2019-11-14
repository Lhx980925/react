import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import Think from "./Think";
import Business from './Business';
import My from './My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/shouye(1).png')}
              />
            }
            selectedIcon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/shouye.png')}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/linggan(1).png')}
              />
            }
            selectedIcon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/linggan.png')}
              />
            }
            title="灵感"
            key="think"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <Think />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/jifenshangcheng(1).png')}
              />
            }
            selectedIcon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/jifenshangcheng.png')}
              />
            }
            title="商城"
            key="business"
            dot={false}
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
           <Business/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/wode(1).png')}
              />
            }
            selectedIcon={
              <img
                style={{
                  width: "22px",
                  height: "22px",
                }}
                src={require('../imgs/wode.png')}
              />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
          <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
