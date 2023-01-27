import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(1))

  const handleSelected=()=>{
    setSelected(Math.floor(Math.random()*7))
  }

  const handleVote=()=>{
    const copy={...votes, [selected]: votes[selected]+=1}
    console.log((votes))
    console.log(Math.max(1,2))
    console.log(Math.max(votes))
    setVotes(copy)
  }

  return (
    <div>
      <Button onClick={handleSelected} text="Next"/>
      <Button onClick={handleVote} text="Vote"/>
      <p>This has {votes[selected]}</p>
      <br/>
      {anecdotes[selected]}
      <h1>Most votes</h1>
      <p> {anecdotes[Math.max(votes)]}<br/> Has: {votes[Math.max(votes)]} votes.</p>
    </div>
  )
}

export default App