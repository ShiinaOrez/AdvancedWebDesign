import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import RegisterContent from './RegisterContent'
import PropTypes from "prop-types"
import Footer from './Footer'
import '../css/App.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputUserName: "",
            inputPassword: ""
        };
    }

    changeName = e => {
        this.setState( {
            inputUserName: e.target.value
        });
    }

    changePwd = e => {
        this.setState( {
            inputPassword: e.target.value
        })
    }

    login = () => {
        const {
            inputUserName,
            inputPassword
        } = this.state;
        if (inputUserName && inputPassword) {
            this.props.history.push('/homepage')
        } else {
            alert("Please input the username and password");
        }
    }

    render() {
        return (
        <div className="SignFlowHomepage">
            <div className="SignFlowHomepage-content">
                <div className="Card SignContainer-content">
                    <div className="SignFlowHeader">
                        <div className="SignFlowHeader-slogen">欢迎来到ShiinaOrez的主站</div>
                    </div>
                    <div className="SignContainer-inner">
                            <div className="Register-content">
                                <form>
                                    <div className="SignFlow-account">
                                        <div className="SignFlowInput SignFlow-accountInputContainer">
                                            <div className="SignFlow-accountInput Input-wrapper">
                                                <input type="tel" name="userName" className="Input" placeholder="您的用户名" onChange={this.changeName} onBlur={this.changeName}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SignFlow SignFlow-smsInputContainer">
                                        <div className="SignFlowInput SignFlow-smsInput">
                                            <div className="Input-wrapper">
                                                <input type="password" name="passWord" className="Input" placeholder="您的密码" onChange={this.changePwd} readOnly={false}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="Button Register-submitButton Button--primary Button--blue" onClick={this.login}>登录</button>
                                </form>
                                <div className="Register-footer">
                                    <span className="Register-declaration">请确保您的账号和密码正确</span>
                                </div>
                            </div>
                        <div className="SignContainer-switch">没有帐号？
                            <a href="/">注册</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default withRouter(Login);