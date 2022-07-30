import React, { useEffect, useState } from 'react'

const Search = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);


    const names = ["imran", "nilofar", "izhaan", "simran", "nihal", "abc", "xyz", "pqr"];



    useEffect(() => {
        setOutput([]);
        names.filter((val) => {
            if (val.toLowerCase().includes(input.toLowerCase())) {
                return setOutput(output => [...output, val]);
            }
        })
    }, [input])


    return (
        <>
            <input type="search" name='input' onChange={e => setInput(e.target.value)} />
            {
                output.map((ele, ind) => {
                    return (
                        <h1 key={ind}>{ele}</h1>
                    )
                })
            }
        </>

    )
}

export default Search