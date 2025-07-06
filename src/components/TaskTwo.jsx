

import { useState, useEffect } from "react";

const TaskTwo = () => {
    const [name, setName] = useState(sessionStorage.getItem(`name-key`)?? ``);


    useEffect(() => {
        const Name = sessionStorage.getItem("name-key");
    }, [name]);

   const onChangeName = (e) => {
        const newName = e.target.value;
        setName(newName);
        sessionStorage.setItem("name", newName);
    };


    return (
        <>
            <input value={name} onChange={onChangeName} />
            <h3>{name}</h3>
        </>
    );
};

export default TaskTwo;
