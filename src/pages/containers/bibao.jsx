import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { saveFormData, saveImg, clearData } from "../redux/fn/actions";
import { formData } from '../redux/fn/reducers';

class bibao extends Component {
  render() {
    return (
      <div>
        我是闭包组件
        <p>{this.props.formData.orderSum}</p>
      </div>
    )
  }
  componentDidMount() {
    this.props.saveFormData(30, 'orderSum')
  }
}

function mapStateToProps(state) {
  return {
      userInfo: state.userInfo
  }
}

export default connect(state => ({
  formData: state.formData,
  proData: state.proData
}), {
    saveFormData,
    saveImg,
    clearData
})(bibao)