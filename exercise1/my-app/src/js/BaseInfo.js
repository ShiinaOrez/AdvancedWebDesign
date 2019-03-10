import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Footer from './Footer.js'
import '../css/Main.css'
import '../css/App.css'

class BaseInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            realName: "",
            realEmail: "",
            whereFrom: "",
            sex: false,
            age: 0
        }
    }

    changeName = e => {
        this.setState( {
            realName: e.target.value
        });
    }

    changeEmail = e => {
        this.setState( {
            realEmail: e.target.value
        })
    }

    changeWhere = e => {
        this.setState( {
            whereFrom: e.target.value
        })
    }

    changeSex = e => {
        this.setState( {
            sex: e.target.value
        })
    }

    save = () => {
        const {
            realName,
            realEmail,
            whereFrom,
            sex,
            age
        } = this.state;
        alert("Save Successful!");
    }

    render() {
        return (
            <div className="box">
            <div className="subject cardContainer">
            <div>
             <div>
              <b className="title">个人设置</b>
              <div className="main">
               <img src="./木犀工作台_files/img.png1548138424.5539513" alt="avatar" className="avaclassName" />
               <input type="file" className="personalSet-imgSelectImg" accept=".png, .jpg, .jpeg" />
               <div className="personalSet-avaTip">
                <b className="personalSet-selectImg">选择新头像<input type="file" className="personalSet-spanSelectImg" accept=".png, .jpg, .jpeg" /></b>
                <p className="avaForm">你可以选择png/jpg图片作为头像</p>
               </div>
               <div className="personalSet-inputList">
                <b>名字</b>
                <input type="text" className="personalSet-writeTip" onChange={this.changeName}/>
                <p className="transparent personalSet-warning">输入框不能为空！</p>
                <b>邮箱</b>
                <input type="text" className="personalSet-writeTip" onChange={this.changeEmail}/>
                <p className="transparent personalSet-warning">输入框不能为空！</p>
                <b>家乡</b>
                <input type="text" className="personalSet-writeTip" onChange={this.changeWhere}/>
               </div>
              </div>
              <div className="footer">
               <b>性别设置</b>
               <div className="sel">
                <div className="member-selectMem">
                  <select className="backup_sex" name="sex" onChange={this.changeSex}>
                    <option value="man">男</option>
                    <option value="woman">女</option>
                  </select>
                </div>
               </div>
               <br />
               <button type="button" className="Button Register-submitButton Button--primary Button--blue" onClick={this.save}>保存设置</button>
              </div>
            </div>
            </div>
            </div>
            <Footer />
            </div>
        );
    }
}

export default withRouter(BaseInfo);