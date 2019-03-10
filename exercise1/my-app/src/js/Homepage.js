import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import RegisterContent from './RegisterContent'
import PropTypes from "prop-types"
import Footer from './Footer'
import '../css/App.css';

class Homepage extends Component {
    baseInfo = () => {
        this.props.history.push("/baseInfo")
    }

    eduHistory = () => {
        this.props.history.push("/eduHistory")
    }

    render() {
        return (
            <div className="SignFlowHomepage">
            <div className="SignFlowHomepage-content">
                <div className="Card SignContainer-content">
                    <div className="SignFlowHeader">
                        <div className="SignFlowHeader-slogen">完善个人信息</div>
                    </div>
                    <div className="SignContainer-inner">
                        <div className="Register-content">
                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue" onClick={this.baseInfo}>基本信息</button>
                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue" >教育经历</button>
                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue" >家庭信息</button>
                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue" >兴趣爱好</button>
                            <div className="Register-footer">
                                <span className="Register-declaration">进入相应页面来填写个人信息</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default withRouter(Homepage);