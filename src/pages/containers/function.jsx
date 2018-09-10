import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../store/actions/userinfo'
import {formData} from '../redux/fn/actions'

class Fn extends Component {
  render() {
    return (
      <div>
        我是function组件
        <div>
          <p>{this.props.formData.orderSum}</p>
          {/* <p>{this.props.info.userid}</p> */}
          {/* <p>{this.props.info.city}</p> */}
        </div>
        <button onClick={this.assignment.bind(this)}>给变量赋值</button>
        <button onClick={this.getValue.bind(this)}>获取</button>
      </div>
    )
  }
  componentDidMount() {
    // 模拟登陆
    console.log(this.props.userInfoActions)
    // this.props.userInfoActions.login({
    //     userid: 'abc',
    //     city: 'beijing'
    // })
  }
  assignment() {
    this.props.userInfoActions.login({
      userid: 'wangJian',
      city: 'ShenZhen'
    })
  }
  getValue() {
    console.log(this.props.info);
  }
}

function mapStateToProps(state) {
  return {
      info: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userinfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Fn)

export default connect(state => ({
  formData: state.formData,
  proData: state.proData
}))(Fn)