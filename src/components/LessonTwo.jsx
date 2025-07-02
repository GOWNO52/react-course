import { use, useState } from "react";
import App from "../App"



function LessonTwo() {

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

export default LessonTwo
