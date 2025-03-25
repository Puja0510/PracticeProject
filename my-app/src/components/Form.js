import React from "react";

const Form = () => {
    const [data, setData] = React.useState('')

    const updateField = (e) => {
        setData(e.target.value)
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("valuee", data)
    }
    return(
        <form onSubmit={submitData}>
            <input type='text' value={data} onChange={updateField}/>
            <button type='submit'>submit</button>
        </form>
    )
}

export default Form;