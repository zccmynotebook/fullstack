import React from 'react';
export default class List extends React.Component{
  render(){
    return (
      <div className="container">
        <button className="btn btn-default mt10" type="submit">添加</button>

        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </div> 
      
    )
  }
}