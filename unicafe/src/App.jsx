import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <tr>
      <td>{props.text}</td><td>{props.value}%</td>  
    </tr> 
    )
  } else {
    
    return (
      <tr>
        <td> {props.text}</td><td>{props.value} </td>
      </tr>  
    
     
  )}
  
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral;
  const average = total === 0 ? 0 : (props.good * 1 + props.bad * -1) / total;
  const positive = total === 0 ? 0 : (props.good * 100) / total;
if (total === 0){
  
  return (
    <h2>
      No feedback given
    </h2>
  )
}
  return (
    <table>
      <tbody>
        <StatisticLine 
        text={'good'}
        value={props.good}
      />
       <StatisticLine 
        text={'neutral'}
        value={props.neutral}
      />
       <StatisticLine 
        text={'bad'}
        value={props.bad}
      />
        <StatisticLine 
        text={'all'}
        value={total}
      />
        <StatisticLine 
        text={'average'}
        value={average}
      />
        <StatisticLine 
        text={'positive'}
        value={positive}
      />
      </tbody>
      
    </table>
  );
}


const Button = (props) => {
  return(
  <button onClick={props.handleclick}>{props.text}</button>
  )
  
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0); console.log( 'Good value is:', good)
  const [neutral, setNeutral] = useState(0); console.log('Neutral value is:', neutral)
  const [bad, setBad] = useState(0); console.log('Bad valiue is:', bad)

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        handleclick={() => setGood(good + 1)}
        text={'good'}
      />
      <Button 
        handleclick={() => setNeutral(neutral + 1)}
        text={'neutral'}
      />
      <Button 
        handleclick= {() => setBad(bad + 1)}
        text={'bad'}
      />
      <h1>statistics</h1>
 
      <div> 

        <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}
       />
      </div>

      
    </div>
  )
}

export default App
