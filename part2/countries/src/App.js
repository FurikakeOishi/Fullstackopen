import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/persons'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [personsFilter, setPersonsFilter] = useState(persons);
  const [message, setMessage] =useState('')

  useEffect(()=>  {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])


  const addPerson=(event)=>{
    //prevents the page from reloading
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
    personService.create(nameObject)
      .then(returnedPerson =>persons.concat(returnedPerson))
    setNewName('')
    setNewPhone('')
    setMessage('A user was added')
    setTimeout(() => {setMessage('')}, 2500)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
    const newPersons = persons.filter(
      (person) =>
        person.name.toLowerCase().search(newSearch.toLowerCase()) !== -1
    );
    setPersonsFilter(newPersons);
  }

  const checkName=(newName)=>{
    return  persons.find(({ name }) => name === newName)
  }

  const checkPhone=(newPhone)=>{
    return  persons.find(({ phone }) => phone === newPhone)
  }
  
  const deletePhone = (deleteID)=>{
    //event.preventDefault()
    if(window.confirm(`Delete ?`))
      personService
      .deletePerson(deleteID)
      .then(console.log("deleted"))
      .catch(error => {
        setMessage(`Error: '${error}'`)
        setTimeout(() => {setMessage('')}, 2500)
      })
  }

  const formData={
    handlePhoneChange,
    handleNameChange,
    newName,
    newPhone,
    addPerson,
    setPersons,
    persons
  }

  const filterData ={
    newSearch, 
    handleSearchChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter data={filterData}/>
      {/* Forms */}
      <h3>Add a new</h3>
      <PersonForm data={formData}/>
      <h2>Numbers</h2>
      <Persons persons={Object.keys(personsFilter).length == 0 ? persons :  personsFilter} deleteFunc={deletePhone}/>
      <div>debug: {newName} {newPhone}</div>
    </div>
  )
}

export default App