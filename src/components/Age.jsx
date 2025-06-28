import App from "../App"

const Age = (props) =>{

    console.log(`age`, props)

    return(
        <div>
            <b>Age is</b>
        {props.children}
        </div>
    )
}

export default Age