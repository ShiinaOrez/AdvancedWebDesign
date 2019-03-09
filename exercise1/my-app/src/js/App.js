import React, { Component } from 'react';
import RegisterContent from './RegisterContent'
import Footer from './Footer'
import Login from './Login'
import Homepage from './Homepage'
import '../css/App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <div className="SignFlowHomepage">
                <div className="SignFlowHomepage-content">
                    <div className="Card SignContainer-content">
                        <div className="SignFlowHeader">
                            <div className="SignFlowHeader-slogen">欢迎来到ShiinaOrez的主站</div>
                        </div>
                        <div className="SignContainer-inner">
                            <RegisterContent />
                            <div className="SignContainer-switch">已有帐号？
                                <a href="/login">登录</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
  }
}

export default App;