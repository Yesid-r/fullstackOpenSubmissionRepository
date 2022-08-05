import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course} </h1>
      
    </div>
  )
}
/*
const Content =(props) => {
  return(
    <div>
      <p>
        {props.content.part1.name} {props.content.part1.exercises}
      </p>
      <p>
        {props.content.part2.name} {props.content.part2.exercises}
      </p>
      <p>
        {props.content.part3.name} {props.content.part3.exercises}
      </p>
    </div>
  )
}
*/

const Content = (props) => {
  return (
    <div>
      <Part part={props.content.part1.name} exercises={props.content.part1.exercises}/>
      <Part part={props.content.part2.name} exercises={props.content.part2.exercises}/>
      <Part part={props.content.part3.name} exercises={props.content.part3.exercises}/>
      
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const content = { part1,part2,part3 }
  return (
    <div>
      <Header course={course}/>      
      <Content content={content} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))