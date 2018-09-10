import React from 'react'
// import {BrowserRouter} from 'react-router-dom'
// import { browserRouter } from "react-router";
import "./login.css"
// import Axios from '../../../node_modules/axios';

export default class Login extends React.Component {

    render() {
        return (
            <div className="m-login">
                <div className="lg-form">
                    <p className="lg-title">极客平台</p>
                    <p>
                        <input ref="userName" className="lg-input" type="text" placeholder="请输入账号"/>
                    </p>
                    <p>
                        <input ref="userPwd" className="lg-input" type="password" placeholder="请输入密码"/>
                    </p>
                    <p className="lg-tip">{this.state.errorTip}</p>
                    <p>
                        <button className="lg-btn" onClick={this.login.bind(this)}>登录</button>
                    </p>
                </div>
            </div>
        )
    }
    constructor() {
        super()
        this.state = {
            errorTip: '',
            tips: {
                isNull: '账号和密码不能为空',
                isNoExistent: '账号不存在',
                pwdError: '密码错误'
            }
        }
    }
    formSubmit(e) {
        e.preventDefault();
        console.log('login')
    }
    login() {
        let userName = this.refs.userName.value;
        let userPwd = this.refs.userPwd.value;
        if (!userName || !userPwd) {
            console.log(123);
            this.setState({
                errorTip: this.state.tips.isNull
            })
        } else {
            this.props.history.push('/index/home')
        }
    }
}