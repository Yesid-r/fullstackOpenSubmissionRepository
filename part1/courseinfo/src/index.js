import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course} </h1>
      
    </div>
  )
}
const Content =(props) => {
  return(
    <div>
      <p>
        {props.content.part1} {props.content.exercises1}
      </p>
      <p>
        {props.content.part2} {props.content.exercises2}
      </p>
      <p>
        {props.content.part3} {props.content.exercises3}
      </p>
    </div>
  )
}
/*
const Content = (props) => {
  return (
    <div>
      <Part part={props.content.part1} exercises={props.content.exercises1}/>
      <Part part={props.content.part2} exercises={props.content.exercises2}/>
      <Part part={props.content.part3} exercises={props.content.exercises3}/>
      
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
*/
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = { part1, exercises1, part2, exercises2, part3, exercises3 }
  return (
    <div>
      <Header course={course}/>      
      <Content content={content} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))