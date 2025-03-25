import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props); // Prints undefined
        // But Props parameter is still available
        console.log(props); // Prints { name: 'protechstack',age: 30 }
    }

    render() {
        // No difference outside constructor
        console.log(this.props) // Prints { name: 'protechstack',age: 30 }
        return(
            <>pujaaa</>
        )
    }
}

export default MyComponent;