const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <Header course={course.name}/>
     <Content names={[course.parts[0].name, course.parts[1].name, course.parts[2].name]} numbers={[course.parts[0].exercises, course.parts[1].exercises,course.parts[2].exercises]}/>
     <Total exercises={[course.parts[0].exercises, course.parts[1].exercises,course.parts[2].exercises]}/>
    </div>
  )
}

const Header = props => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) =>{
  return (
    <div>
      <Part name={props.names[0]} number={props.numbers[0]}/>
      <Part name={props.names[1]} number={props.numbers[1]}/>
      <Part name={props.names[2]} number={props.numbers[2]}/>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Total = (props) =>{
  return (
    <div>
      <p>Total number of exercises is {props.exercises[0]+props.exercises[1]+props.exercises[2]}</p>
    </div>
  )
}

export default App