import React, { useState, useMemo } from "react"

export default function FilteredList({list}) {
    const [persons, setList] = useState(list);

    function listFilter() {
        setList((lis) => lis.filter((item) => item.age > 18))}
    useMemo(() => {
        listFilter()
        console.log("I ran!");
       },[])

       const handleRender = () => {
        setList((prev) => prev)
        console.log("Rerendered");
       }

    const jsx = persons.map((el) => <h1>{el.name} is {el.age} years old.</h1>)

    return (<div>
        <h1>List of names filtered by age</h1>
        <button onClick={() => handleRender()}>Rerender</button>
        {jsx}
    </div>)
}