import React from "react";

const FormWithValidation = () => {

    const [userName, setUserName] = React.useState('')
    const [error, setError] = React.useState('')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!userName){
            setError('Username cannot be empty!');
        } else {
            setError('')
            console.log(userName)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default FormWithValidation;