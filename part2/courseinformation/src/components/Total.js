import React from 'react'

const Total = ({ parts }) => {
    const total = 0//parts.reduce((sum, part.exercisesNumber) => { sum + part.exercisesNumber, 0})
    return (
        <p>Number of exercises {total}</p>
    )
}
export default Total