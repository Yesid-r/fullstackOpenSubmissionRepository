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
  console.log(props);
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      
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
let numberExcercises = 0;
const parts = props.course.parts;
parts.forEach(element => {
  numberExcercises += element.exercises
  
});
  return (
    <div>
      <p>Number of exercises {numberExcercises}</p>
    </div>
  )
}

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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))