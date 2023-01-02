import React from 'react'

function Card(props) {
  return (
    <div className="cd card " style={{width:'18rem'}}>
  <img src={props.data.img} className="hr card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">{props.data.p} </p>
    <a href="#" className="btn btn-secondary">{props.data.btn}</a>
  </div>
</div>
  )
}

export default Card
