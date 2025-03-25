import React from "react";

const UnControlledForm = () => {
    const inputRef  = React.useRef()

    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log('Uncontrolled Input Value:', inputRef.current.value);

    }

    return (
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
          <button type="submit">Submit</button>
        </form>
      );
}

export default UnControlledForm;