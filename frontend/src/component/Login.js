import React from 'react';
export class Login extends React.Component{
  signin= () => {
    console.log(111,this)
    const {name,password}=this.refs
    window.fetch('/api/login',{
      method: 'POST',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      body: {name,password}
    }).then(res=>res.json()).then(res=>{
        if(res.status == 200){
          console.log(res.data)
        }
    })
  }
  render(){
    return (
      <div className="container">
        <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">用户名</label>
          <div className="col-sm-10">
            <input type="text" className="form-control"  ref="name" placeholder="name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">密码</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" ref="password" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-default" onClick={this.signin}>登录</button>
          </div>
        </div>
      </form>
    </div> 
      
    )
  }
}