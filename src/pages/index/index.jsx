import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import "./index.css"
import axios from 'axios'
// import Fn from '../containers/function'
// import Bibao from '../containers/bibao'
// import Rongzi from '../containers/rongzi/rongzi.js'
// import Edit from '../containers/rongzi/edit.js'
import subRoutes from './subRouter'
import 'antd/dist/antd.css'
import Home from './sub/Home'

import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const routes = subRoutes

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            isSublist: false,
            menuList: [
                {
                    node: 'JavaScript',
                    icon: 'pie-chart',
                    hash: 'javascript',
                    children: [
                        { node: '构造函数', hash: 'fn'},
                        { node: '闭包', hash: 'bibao'},
                        { node: '封装和继承', hash: 'fengzhuang'},
                        { node: '面向对象', hash: 'obj'},
                    ]
                },
                {
                    node: 'HTML',
                    icon: 'html5',
                    hash: 'html',
                    children: [
                        { node: 'form表单', hash: 'form'},
                        { node: 'HTML5新属性', hash: 'html'},
                        { node: 'HTML语义化', hash: 'yuyi'}
                    ]
                },
                {
                    node: '融资需求列表',
                    icon: 'pie-chart',
                    hash: 'rongzi',
                    children: []
                }
            ],
            currentObj: {
                parent: '',
                child: this.getOpen()
            },
            selectRoute: '/index/home',
            selectComponent: Home,
          parentRoute: '',
            list: []
        };
        
        for (let i = 0; i < this.state.menuList.length; i++) {
            let cur = this.state.menuList[i]
            for (let i = 0; i < cur.children.length; i++) {
                const element = cur.children[i];
                if (element.hash === this.getOpen()) {
                    this.state.currentObj.parent = cur.node;
                }
            }
        }
  }
  componentDidMount() {
    this.getMenuList()
  }
  getMenuList = () => {
    axios.get('./menuList.json').then(res => {
      if (res.status === 200) {
        this.setState({
          list: res.data.data
        })
        // console.log(this.state.list)
      }
    })
    
  }
    getOpen() {
        window.sessionStorage.setItem('parentRoute', '/index')
        var href = window.location.href;
        let path = href.split('#')[1]
        let currentRoute = ''
        if (path.includes('index')) {
            currentRoute = path.split('/')[2]
        }
        return currentRoute;
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    outLogin() {
        // BrowserRouter.push('/login')
        this.props.history.push('/login')
    }
    userMouseOver() {
        // let width = getComputedStyle(this.refs.sublist).width;
        // console.log(width)
        // this.refs.admin.style.width = width;
        // this.refs.sublist.style.visibility = 'visible';
        this.setState({
            isSublist: true
        })
    }
    userMouseLeave() {
        // this.refs.sublist.style.visibility = 'hiddens'
        this.setState({
            isSublist: false
        })
    }
    menuSelect(item, key) {
        // 选中时调用，同一个节点，点击多次也只执行一次
        let com = item.key[0].toUpperCase() + item.key.slice(1)
        var path = '/' + item.keyPath[1] + '/' + item.key;
        
        this.setState({
            selectRoute: path,
            selectComponent: com
        })
        // this.props.history.push(path)
    }
    itemSelect(item) {
        console.log(1314);
        // window.sessionStorage.setItem('parentRoute', '/'+item.key)
    }
    render() {
        return (
            <Router>
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">{this.state.collapsed ? '极客' : '后台管理系统'}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.currentObj.child]} defaultOpenKeys={[this.state.currentObj.parent]} onClick={this.menuSelect.bind(this)}>
                      {
                        this.state.list.map((item, index) => {
                          return item.SubNodes.length > 0 ?
                              <SubMenu onTitleClick={this.itemSelect.bind(this)} key={index} title={<span><span>{item.Node.Name}</span></span>}>
                                  {
                                      item.SubNodes.map((child, i) => {
                                          return <Menu.Item key={child.MenuID}>
                                              <Link to={`/index/${child.Ctrl}`}>{child.Name}</Link>
                                          </Menu.Item>
                                      })
                                  }
                              </SubMenu> :
                              <Menu.Item key={index}>
                                  {/* <Icon type={item.icon} /> */}
                                  {/* <span>{item.node}</span> */}
                                  <Link to={`/index/${item.hash}`} style={{display:'inline-block'}}>{item.Name}</Link>
                              </Menu.Item>
                        })
                      }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}></Icon>
                        {/* <div className="hd-box"> */}
                            <ul className="hd-list">
                            <li ref="admin" className="admin" onMouseOver={this.userMouseOver.bind(this)} onMouseLeave={this.userMouseLeave.bind(this)}>
                                <p className="hd-user"><Icon type="user" /> admin</p>
                                {
                                    this.state.isSublist ? <ul ref="sublist" className="sublist">
                                        <li><p>修改密码</p></li>
                                        <li onClick={this.outLogin.bind(this)}>退出</li>
                                    </ul> : ''
                                }
                                </li>
                            </ul>
                        {/* </div> */}
                        </Header>
                        <div className="com-title" style={{height: '40px', lineHeight: '40px', paddingLeft: '16px'}}>
                            <p>融资需求列表</p>
                        </div>
                    <Content style={{ margin: '0  16px 24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <div className="wrap" style={{height: '100%'}}>
                            {
                                routes.map((item, index) => {
                                        return <Route key={index} path={`${window.sessionStorage.getItem('parentRoute')}${item.path}`} component={item.sliderbar} exact={item.exact}/>
                                })
                            }
                                {/* <Route to={this.props.match.path} component={this.state.selectComponent}></Route> */}
                        </div>
                    </Content>
                </Layout>
            </Layout>
            </Router>
        )
    }
}
