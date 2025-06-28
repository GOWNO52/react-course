const WishList = (props) => {

    console.log(`WishList`, props)

    return (

        <>
            <ul>
            {props.list.map((element) => (<li key={element}>{element}</li>))}
            </ul>
        </>
    )

}


export default WishList