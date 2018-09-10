import React from 'react'
import {connect} from 'react-redux'
// import { HashRouter as Router, Route, Link} from 'react-router-dom'
import { Table, Icon, Divider } from 'antd'
import "./css/rongzi.css"
import {actionSavaList, saveList} from '../../redux/financing/financingReducer'
// import { bindActionCreators } from 'redux';
// import * as userinfoActions from '../../redux/actions/actions'
const list = [
    {
        title: '融资需求2018-08-02',
        detail: [
            [
                {title: '融资主体', vaule: '恒大地产有限公司'},
                {title: '融资状态', vaule: '完成-提交产品申请'},
                {title: '产品经理', vaule: '林玲'},
            ],
            [
                {title: '融资规模', vaule: '2000万美元'},
                {title: '创建时间', vaule: '2017-08-12'},
                {title: '所在部门', vaule: '在线金融'}
            ]
        ]
    },
    {
        title: '融资需求2018-07-20',
        detail: [
            [
                {title: '融资主体', vaule: '绿地地产有限公司'},
                {title: '融资状态', vaule: '完成-提交产品申请'},
                {title: '产品经理', vaule: '陈晨'},
            ],
            [
                {title: '融资规模', vaule: '1000万美元'},
                {title: '创建时间', vaule: '2018-07-20'},
                {title: '所在部门', vaule: '在线金融'}
            ]
        ]
    }
]

class Rongzi extends React.Component {
    constructor() {
        super()
        // console.log()
    }
    componentDidMount() {
        this.props.actionSavaList(list, 'saveList')
    }
    render() {
        return (<div>
            <ul className="rongzi-list">
                {
                    list.map((item, p) => {
                        return <li className="rongzi-item" key={p}>
                          <div className="title">
                            <p className="title-name">{item.title}</p>
                              <div className="operation">
                                <button className="op-btn"><Icon type="eye-o"/> 查看</button>
                                <button className="op-btn" onClick={this.Edit.bind(this, item)}>
                                  <Icon type="edit" />
                                  {/* <Link to={{ path: '/edit', state: { name: '编辑' } }}>编辑</Link> */}
                                  编辑
                                </button>
                              </div>
                          </div>
                            <div className="item-main">
                            {
                              item.detail.map((detail, c) => {
                                return <div className="item-row" key={c}>
                                    {
                                        detail.map((td, t) => {
                                        return <p key={t} className="item-col"><span className="label">{td.title}：</span><span>{td.vaule}</span></p>
                                        })
                                    }
                                </div>
                              })
                            }
                          </div>
                      </li>
                    })
                }   
            </ul>
        </div>)
    }
    Edit(data) {
      this.props.history.push('/index/edit')
      console.log(data)
    }
}


// export default connect(
//     mapStateToProps,
//     mapDispatchToPrps
// )(Rongzi)

export default connect(state => ({
    saveList: state.saveList
}), {
    actionSavaList
})(Rongzi)