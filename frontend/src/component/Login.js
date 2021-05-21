import React from 'react';
export class Login extends React.Component{
  
  render(){
    return (
      <div className="container">
        <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">用户名</label>
          <div className="col-sm-10">
            <input type="text" className="form-control"   placeholder="name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">密码</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">登录</button>
          </div>
        </div>
      </form>
    </div> 
      
    )
  }
}