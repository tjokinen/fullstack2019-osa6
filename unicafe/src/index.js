import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const kaikki = store.getState().good + store.getState().ok + store.getState().bad
  const keskiarvo = (store.getState().good - store.getState().bad) / kaikki
  const positiivinen = store.getState().good / kaikki * 100 + " %"

  const Statistics = (props) => {
    if (kaikki === 0) {
      return (
        <><tr><td>{props.text}</td><td>0</td></tr></>
      )
    } else {
      return (
        <><tr><td>{props.text}</td><td>{props.value}</td></tr></>
      )
    }
  }

  return (
    <div>
      <h2>anna palautetta</h2>
      <button onClick={good}>hyvä</button>
      <button onClick={ok}>neutraali</button>
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <h2>tilastot</h2>

      <table>
        <tbody>
          <Statistics text="hyvä" value={store.getState().good} />
          <Statistics text="neutraali" value={store.getState().ok} />
          <Statistics text="huono" value={store.getState().bad} />
          <Statistics text="kaikki" value={kaikki} />
          <Statistics text="keskiarvo" value={keskiarvo} />
          <Statistics text="positiivinen" value={positiivinen} />
        </tbody>
      </table>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(() => {
  renderApp()
})
