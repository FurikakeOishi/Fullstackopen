import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)
  }

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {create, getAll, update, deletePerson}