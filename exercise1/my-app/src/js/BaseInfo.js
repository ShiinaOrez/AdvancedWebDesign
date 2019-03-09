import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/Main.css'

class BaseInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            realName: "",
            whereFrom: "",
            age: 0
        }
    }

    changeName = e => {
        this.setState( {
            realName: e.target.value
        });
    }

    render() {
        return (
            <div class="subject cardContainer">
            <div>
             <div>
              <b class="title">个人设置</b>
              <div class="main">
               <img src="./木犀工作台_files/img.png1548138424.5539513" alt="avatar" style="width: 114px; height: 114px; border-radius: 100%;" />
               <input type="file" class="personalSet-imgSelectImg" accept=".png, .jpg, .jpeg" />
               <div class="personalSet-avaTip">
                <b class="personalSet-selectImg">选择新头像<input type="file" class="personalSet-spanSelectImg" accept=".png, .jpg, .jpeg" /></b>
                <p class="avaForm">你可以选择png/jpg图片作为头像</p>
               </div>
               <div class="personalSet-inputList">
                <b>名字</b>
                <input type="text" placeholder="木小犀" class="personalSet-writeTip" value="ShiinaOrez" />
                <p class="transparent personalSet-warning">输入框不能为空！</p>
                <b>手机</b>
                <input type="text" placeholder="88888888" class="personalSet-writeTip" value="13646477149" />
               </div>
              </div>
              <div class="footer">
               <b>通知设置</b>
               <div class="sel">
                <div class="member-selectMem">
                 <div class="member-unit">
                  <input type="checkbox" id="check站内信0" />
                  <label for="check站内信0" id="lab"><span class="member-name" title="站内信">站内信</span></label>
                 </div>
                 <div class="member-unit">
                  <input type="checkbox" id="check邮箱通知1" />
                  <label for="check邮箱通知1" id="lab"><span class="member-name" title="邮箱通知">邮箱通知</span></label>
                 </div>
                </div>
               </div>
               <br />
               <button type="button" class="saveBtn">保存设置</button>
              </div>
              <div class="none">
               <div class="circle"></div>保存成功
              </div>
             </div>
            </div>
           </div>
        );
    }
}

export default withRouter(BaseInfo);