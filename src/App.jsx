import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { minusOne, plusOne } from './store/todoSlice'
import Posts from './components/Posts'

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.todos.count)
  console.log(count)

  const onClickButton = () => {
    dispatch(plusOne())
  }


  const onClickButon = () => {
    dispatch(minusOne())
  }



  return (
    <>
      <Posts></Posts>
    </>
  )
}

export default App
