import { useEffect, useState } from "react"

const TascThree = () => {



    const [theme, setTheme] = useState(localStorage.getItem(`theme`) ?? `white`);

    const onChangeThem = () => {
        const newTheme = theme === `white` ? `Black` : `white`
        setTheme(newTheme)
        localStorage.setItem(`theme`, newTheme)
    }


    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (

        <>
            <button onClick={onChangeThem}>менять фон</button >

        </>

    )
}

export default TascThree