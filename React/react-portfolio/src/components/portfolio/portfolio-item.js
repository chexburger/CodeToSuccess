import React from 'react';
import { Link } from 'react-router-dom';

export default function(props){
  return(
    <div>
      <h3><Link to={`/portfolio/${props.slug}`}>{props.title}</Link></h3>
      <h4>{props.url}</h4>
    </div>
  )
}
