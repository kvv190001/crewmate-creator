import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client'


const Card = (props) =>  {
  return (
      <div className="crewmate-card">
          <h3 className="name">Name: {props.name}</h3>
          <h3 className="speed">Speed: {props.speed}</h3>
          <h3 className="color">Color: {props.color}</h3>
          <Link to={'edit/'+ props.id}>Edit Crewmate</Link>
      </div>
  );
};

export default Card