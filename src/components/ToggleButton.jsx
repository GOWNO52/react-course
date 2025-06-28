import { useState } from "react";



const TogleButton = () => {
    const [power, setPower] = useState(false)

    const onChangePower = () => {
        setPower(!power)
    }

    return (
        <button onClick={onChangePower}>{power ? `вкл` : `выкл`}</button>
    )

}
export default TogleButton
