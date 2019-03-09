import React, { Component } from 'react'
import '../css/App.css'

class Footer extends Component {
    render() {
        return (
            <footer className="SignFlowHomepage-footer">
                <div className="ZhihuLinks">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShiinaOrez">我的主页</a>
                </div>
                <div className="ZhihuRights">
                    <span>© 2019 ShiinaOrez</span>
                </div>
            </footer>
        );
    }
}

export default Footer;