import { useState } from "react"
import Age from "./components/Age"
import WishList from "./components/WishList"



function App() {

  const [count,setCount]= useState(0)

const onChangeCount=() => {
setCount(count +1)


}
const onDeleteOne=()=>{
  setCount(count -1)
}

  return (
    <>
      <p>{count}</p>
      <button onClick={onChangeCount} >count ++</button>
      <button onClick={onDeleteOne}>count --</button>
    </>
  )
}

export default App


