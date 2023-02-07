import React from 'react'

const PersonForm = ({data})=>{
return(
<form onSubmit={data.addPerson}>  
        <div>name: <input value={data.newName} onChange={data.handleNameChange}/></div>
        <div>number: <input value={data.newPhone} onChange={data.handlePhoneChange}/></div>
        <div><button type="submit" onClick={()=>data.setPersons(data.persons)}>add</button></div>
    </form>
)}

export default PersonForm