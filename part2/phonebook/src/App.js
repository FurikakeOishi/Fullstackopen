import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson=(event)=>{
    //preents the page from reloading
    event.preventDefault()
    console.log('button clicked', event.target)
    //checks only name
    if(checkName(newName))
      alert(`${newName} is already added to phonebook`)
    if(checkPhone(newPhone))
      alert(`${newPhone} is already added to phonebook`) 
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const checkName=(newName)=>{
    return  persons.find(({ name }) => name === newName)
  }

  const checkPhone=(newPhone)=>{
    return  persons.find(({ phone }) => phone === newPhone)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* Forms */}
      <form onSubmit={addPerson}>  
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person id={person.id} person={person.name} phone={person.phone}/>
        )}
      </ul>
      <div>debug: {newName} {newPhone}</div>
    </div>
  )
}

export default App