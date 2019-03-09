import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/App.css'

class RegisterContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputUsername: "",
            inputEmail: "",
            inputPassword: "",
            inputPassword2: ""
        }
    }

    changeName = e => {
        this.setState( {
            inputUsername: e.target.value
        });
    }

    changeEmail = e => {
        this.setState( {
            inputEmail: e.target.value
        });
    }

    changePassword = e => {
        this.setState( {
            inputPassword: e.target.value
        });
    }

    changePassword2 = e => {
        this.setState( {
            inputPassword2: e.target.value
        });
    }

    signup = () => {
        const {
            inputUsername,
            inputEmail,
            inputPassword,
            inputPassword2
        } = this.state;
        if (inputUsername && inputEmail && inputPassword && inputPassword2) {
            this.props.history.push('/homepage')
        } else {
            alert("Please input Username, Password and Email");
        }
    }

    render() {
        return (
            <div className="Register-content">
                <form noValidate="">
                    <div className="SignFlow-account">
                        <div className="SignFlowInput SignFlow-accountInputContainer">
                            <div className="SignFlow-accountInput Input-wrapper">
                                                    <input type="tel" name="phoneNo" className="Input" placeholder="您的用户名" onChange={this.changeName}></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="SignFlow-account">
                                            <div className="SignFlowInput SignFlow-accountInputContainer">
                                                <div className="SignFlow-accountInput Input-wrapper">
                                                    <input type="tel" name="phoneNo" className="Input" placeholder="您的预留邮箱" onChange={this.changeEmail}></input>
                                                </div>
                                            </div>
                                        </div>

                                            <div className="SignFlow SignFlow-smsInputContainer">
                                                <div className="SignFlowInput SignFlow-smsInput">
                                                    <div className="Input-wrapper">
                                                        <input type="password" name="digits" className="Input" placeholder="您的密码" onChange={this.changePassword}></input>
                                                    </div>
                                                </div>
                                            </div>

                                                <div className="SignFlow SignFlow-smsInputContainer">
                                                    <div className="SignFlowInput SignFlow-smsInput">
                                                        <div className="Input-wrapper">
                                                            <input type="password" name="digits" className="Input" placeholder="重复您的密码" onChange={this.changePassword2}></input>
                                                        </div>
                                                    </div>
                                                </div>

                                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue" onClick={this.signup}>注册</button>
                                    </form>
                                    <div className="Register-footer">
                                        <span className="Register-declaration">您的注册信息不会泄露到互联网</span>
                                    </div>
                                </div>
        );
    }
}

export default withRouter(RegisterContent);