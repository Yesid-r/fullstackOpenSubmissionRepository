import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text} </td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({clicks}) => {

    const {good, neutral, bad} = clicks
    const total = good + neutral + bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)

    if (total !== 0) {
      return (
        <div>
          <table>
            <tbody>
              <Statistic text="good" value={good} />
              <Statistic text="neutral" value={neutral} />
              <Statistic text="bad" value={bad} />
              <Statistic text="all" value={total} />
              <Statistic text="average" value={average} />
              <Statistic text="positive" value={positive} />
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div>
        No feedback given
      </div>
    )

    
}




const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})
  console.log(`clicks for good is --> ${clicks.good}`)
  console.log(`clicks for neutral is --> ${clicks.neutral}`);
  return (
    <div>
      
      <h1>Customer feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)