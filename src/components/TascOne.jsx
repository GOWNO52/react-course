import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { minusOne, plusOne } from './store/todoSlice'

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.todos.count)
  console.log(count)

  const onClickButton = () => {
    dispatch(plusOne())
  }


  const onClickButon =  () => {
    dispatch(minusOne())
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">,=
        <button onClick={onClickButton}>+</button>
         <button onClick={onClickButon}>-</button>

            count is {count}
        
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
