import React from 'react'

const Persons = ({persons, deleteFunc}) =>{
return( 
    <ul>
    {persons.map(person => 
    <li key = {person.id}   >
        {person.id} {person.name} {person.phone} <div><button onClick={()=>deleteFunc(person.id)}>Delete</button></div>
    </li>
    )}
  </ul> 
)}
export default Persons